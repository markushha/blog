import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import client from '../client';

function EditPost() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
  const params = useParams();

  useEffect(() => {
    client.get(`/posts/${params.id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
  }, [params.id]);

  if (loading) {
    return (
      <div className="ui text active loader">Loading...</div>
    )
  }

  const handleSubmit = ({ title, body }) => {
    client.patch(`/posts/${params.id}`, { title, body })
      .then(() => navigate(-1))
  }

  return (
    <div>
        <button
          className="ui inverted secondary button"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
        <h1 className="ui header">Edit Post</h1>
        <PostForm initialValues={post} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditPost;
