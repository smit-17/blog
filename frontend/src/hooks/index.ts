import axios from "axios";
import { useEffect, useState } from "react";
import { BACKENDURL } from "../config";

export interface Blog {
  title: string;
  content: string;
  id: string;
  author: {
    name: string;
  };
}
export const useBlogs = () => {
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKENDURL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setblogs(res.data.data);
        setloading(false);
      });
  }, []);
  return {
    loading,
    blogs,
  };
};
export const useBlog = ({ id }: { id: string }) => {
  const [loading, setloading] = useState(true);
  const [blog, setblog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKENDURL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setblog(res.data.post);
        setloading(false);
      });
  }, [id]);
  return {
    loading,
    blog,
  };
};
