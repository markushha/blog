import React from "react";
import { usePosts } from "../hooks/posts";
import {useNavigate} from 'react-router-dom';
import PostForm from '../components/PostForm';

function CreatePost() {
  const { onSubmitHandler, errorMessage } = usePosts();
  const navigate = useNavigate();

  return (
    <div>
      <button className="ui inverted secondary button" style={{margin: "0px 0px 20px 0" }} onClick={() => navigate(-1)}>Go back</button>
      <div className="ui item">
        <label style={{fontWeight: "bold", fontSize: "28px" }}>Create Post</label>
      </div>
      <PostForm onSubmit={onSubmitHandler} errorMessage={errorMessage} />
    </div>
  );
}

export default CreatePost;
