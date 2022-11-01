import {useEffect, useState} from "react";
import axios from "axios";
import client from "../client";
import { useNavigate } from "react-router-dom";

export function usePosts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3004/posts");
      setPosts(response.data);
    } catch(e) {
      const error = e;
      console.log(error.message);
    }
    setLoading(false);
  };

  const onDeleteHandler = (id) => {
    if (window.confirm('Are you really want to delete this post?')) {
      axios.delete(`http://localhost:3004/posts/${id}`);
      getPosts();
    }
  }
  

  const onSubmitHandler = async ({ title, body }) => {
    if (title.trim().length > 0 && body.trim().length > 0) {
      await client.post("/posts", { title, body })
      navigate(-1)
    } else {
      setErrorMessage('Error! You must fill two fields to create new post!')
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return { posts, getPosts, onDeleteHandler, onSubmitHandler, errorMessage, loading }
}