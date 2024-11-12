import { HttpClient } from "../http-client";

const http = new HttpClient("https://jsonplaceholder.typicode.com");

http.addRequestInterceptor(async (options) => {
  if (process.env.NODE_ENV === "development") {
    const delay = Math.random() * 2000;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  return options;
});

export default http;
