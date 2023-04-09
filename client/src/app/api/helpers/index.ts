import axios from "axios";

const API = axios.create({
  baseURL: process.env.API_URL || "",
});

const tryCatchWrapper = (data: any) => {
  try {
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { API, tryCatchWrapper };
