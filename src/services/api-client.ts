import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "00fe3673dc2743299eb3d94507523ee5"
  }
})