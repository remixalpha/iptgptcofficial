import axios from "axios";

// local host
export const image_url = "http://localhost:7001/";
const base_url = "http://localhost:7001/api";

// backend
export const token = localStorage.getItem("token");

export const postLogin = async (url, body) => {
  try {
    // console.log(`${base_url}${url}`);
    const response = await axios.post(`${base_url}${url}`, body);
    return response;
  } catch (err) {
    console.log(err);
  }
};
export const getRequest = async (url) => {
  try {
    console.log(`${base_url}${url}`);
    const response = await axios.post(`${base_url}${url}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const FetchRequest = async (url) => {
  try {
    console.log(`${base_url}${url}`);
    const response = await axios.get(`${base_url}${url}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};
export const postSignup = async (url, body) => {
  try {
    const response = await axios.post(`${base_url}${url}`, body);
    return response;
  } catch (err) {}
};
export const removeUploadsString = (filename) => {
  // Use a regular expression to replace "uploads" followed by a slash with an empty string
  return filename.replace(/uploads\//, "");
};
