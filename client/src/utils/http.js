import axios from "axios";

let baseUrl = window.location.origin;
if (window.location.hostname === "localhost") {
  baseUrl = "http://localhost";
}

const http = axios.create({
  baseURL: `${baseUrl}:3001`
});

export default http;
