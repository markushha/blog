import {useEffect, useState} from "react";
import axios from "axios";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3004/posts");
      setPosts(response.data);
    } catch(e) {
      const error = e;
      console.log(error.message);
    }
  };

  const onDeleteHandler = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`);
    window.location.reload();
  }

  const onSubmitHandler = (e, title, body) => {
    e.preventDefault();
    if (title.trim().length > 0 && body.trim().length > 0) {
      try {
        axios.post('http://localhost:3004/posts', {
          title: title,
          body: body
      })
      setErrorMessage('');
      window.location.pathname = '/';
      } catch (e) {
        setErrorMessage(e.message);
      }
    } else {
      setErrorMessage('Invalid input data!');
    }
  }

  const onUpdateHandler = (id, title, body) => {
    
  }

  useEffect(() => {
    getPosts();
  }, []);

  return { posts, getPosts, onDeleteHandler, onSubmitHandler, onUpdateHandler, errorMessage }
}