import type { Post } from "@/types";
import axios from "axios";

interface Response {
  results: Post[];
}

const http = axios.create({
  baseURL: "https://dev.codeleap.co.uk/careers/",
});

export const api = {
  getPosts: async (): Promise<Post[]> => {
    const { data } = await http.get<Response>("");
    return data.results;
  },

  createPost: async (payload: { username: string; title: string; content: string }): Promise<Post> => {
    const { data } = await http.post<Post>("", payload);
    return data;
  },

  updatePost: async (id: number, payload: { title: string; content: string }): Promise<Post> => {
    const { data } = await http.patch<Post>(`${id}/`, payload);
    return data;
  },

  deletePost: async (id: number): Promise<void> => {
    await http.delete(`${id}/`);
  },
};