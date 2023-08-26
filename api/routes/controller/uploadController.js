import multer from "multer";
const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    // cb(null, file.originalname);
    cb(
      null,
      new Date() + "-" + file.originalname + file.originalname.match(/\..*$/)[0]
    );
  },
});

const fileFilter = (req, file, callback) => {
  // reject a file

  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg " ||
    file.mimetype == "application/pdf" ||
    file.mimetype == "application/photoshop"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};
let uploadHandler = multer({ storage: storageEngine });
// export default uploadHandler = multer({
//   storage: storageEngine,
//   fileFilter: fileFilter,
// });
export default uploadHandler;
// exports.uploadHandler = multer({
//   storage: storageEngine,
//   fileFilter: fileFilter,
// });
