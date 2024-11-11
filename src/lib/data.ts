import { HttpClient } from "./http-client";
import { Post, Comment } from "./types";

const http = new HttpClient("https://jsonplaceholder.typicode.com");

// Add a request interceptor to simulate a delay
http.addRequestInterceptor(async (options) => {
  // random delay between 0 and 2 second
  const delay = Math.random() * 2000;
  await new Promise((resolve) => setTimeout(resolve, delay));
  return options;
});

http.addResponseInterceptor((response) => {
  // console.log("Response received", response.data);
  return response;
});

type QueryParams = {
  page?: number;
  limit?: number;
};

export const getPosts = async (query: QueryParams = {}) => {
  const params = new URLSearchParams();
  params.append("_page", String(query.page || 1));
  params.append("_limit", String(query.limit || 10));
  const res = await http.get(`/posts?${params}`);
  return res.data as Post[];
};

export const getPost = async (id: number) => {
  const res = await http.get(`/posts/${id}`);
  return res.data as Post;
};

export const getComments = async (postId: number) => {
  const res = await http.get(`/posts/${postId}/comments`);
  return res.data as Comment[];
};
