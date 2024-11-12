import { Comment } from "../types";
import http from "./http";

export const getComments = async (postId: number) => {
  const res = await http.get(`/posts/${postId}/comments`);
  return res.data as Comment[];
};
