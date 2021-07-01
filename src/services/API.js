import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  timeout: 10000
});

export default {
  async getTodos() {
    return await axiosInstance.get("todos");
  },
  async getPosts() {
    return await axiosInstance.get("posts");
  }
};
