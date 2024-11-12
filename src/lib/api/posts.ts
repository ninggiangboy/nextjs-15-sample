import { Post } from "../types";
import http from "./http";

export const getPosts = async (
  query: { page?: number; limit?: number } = {}
) => {
  const params = new URLSearchParams();
  params.append("_page", String(query.page || 1));
  params.append("_limit", String(query.limit || 10));
  const res = await http.get(`/posts?${params}`, {
    retries: 3,
  });
  return res.data as Post[];
};

export const getPost = async (id: number) => {
  const res = await http.get(`/posts/${id}`);
  return res.data as Post;
};
