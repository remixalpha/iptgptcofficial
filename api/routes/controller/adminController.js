import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config/config";
import Joi from "joi";
import crypto from "crypto";
import { adminModel, departmentModel } from "../../models";
export const createUser = async (req, res, next) => {
  //joi validation
  // console.log(req.body);
  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "in"] },
    }),

    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")),
  });

  const error = schema.validate(req.body);

  if (error.error) {
    return res.status(200).json({ msg: error.error.details[0].message });
  }

  // check email exist
  let emailExist;
  (await adminModel.findOne({ email: req.body.email }))
    ? (emailExist = true)
    : (emailExist = false);
  if (emailExist) {
    res.status(200).json({ msg: "email exist" });
  } else {
    try {
      // hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      //   create a new adminModel
      const user = new adminModel({
        // username: req.body.username,
        // email: req.body.email,
        // password: hashedPassword,
        ...req.body,
        password: hashedPassword,
      });
      const savedUser = await user.save();
      res.status(201).json({ user: user._id, msg: "account created" });
    } catch (err) {
      //   res.status(400).json({ err: err });
      next(err);
    }
  }
};
// get user

export const getUsers = async (req, res, next) => {
  try {
    if (req.body._id) {
      let doc = await adminModel.findOne({ _id: req.body._id }).select("email");
      res.status(200).json({ status: true, doc: doc });
      // if (user) {
      //   doc = await User.findOne(req.body).select("name email");
      //   res.status(200).json({ status: true, doc: doc });
      // }
      // .select("name email");
    } else {
      res.status(400).json({ status: false });
    }
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    let doc = await adminModel.find(req.body).select("email");
    // .populate({
    //   path: "model",
    //   select: [, "feild", "field"],
    // });
    //for sort populate; //for sort populate
    res.status(200).json({ status: true, doc: doc });
  } catch (err) {
    next(err);
  }
};

// login user

export const login = async (req, res, next) => {
  // validate the data before we a user using joi

  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "in"] },
    }),
    // username: Joi.string().min(2),
    password: Joi.string().min(6).required(),
  });

  const error = schema.validate(req.body);

  if (error.error) {
    return res
      .status(200)
      .json({ status: false, msg: error.error.details[0].message });
  }

  // check id mail exists

  const user = await adminModel.findOne({
    email: req.body.email,
  });
  if (!user)
    return res
      .status(200)
      .json({ status: false, msg: "Invalid email or password" });
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res
      .status(200)
      .send({ status: false, msg: "invalid email or password" });

  // create and assign a token

  const token = jwt.sign({ _Id: user._id }, config[config.ENV].PRIVATEKEY, {
    expiresIn: "8800s",
  });
  res
    .header("auth-token", token)
    .send({ token: token, id: user._id, status: true, msg: "login" });
};
export const createDept = async (req, res, next) => {
  try {
    let requests = await req.body;
    // console.log({ req: requests });
    let doc = await new departmentModel(req.body).save();
    res.status(201).json({ status: true, doNotTrack: doc });
  } catch (err) {
    next(err);
  }
};
export const getDept = async (req, res, next) => {
  try {
    let requests = await req.body;
    // console.log({ req: requests });
    let doc = await departmentModel.find(req.body);
    res.status(201).json({ status: true, doNotTrack: doc });
  } catch (err) {
    next(err);
  }
};
