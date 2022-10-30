import React from "react";
import Post from "../components/Post";
import { usePosts } from "../hooks/posts";
import { Link } from "react-router-dom";

function Posts() {
  const { posts } = usePosts();

  return (
    <>
     <Link to="create"><button className="ui inverted secondary button">New Post</button></Link>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Post Name</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <Post title={post.title} body={post.body} date={post.createdAt} id={post._id} key={post._id}/>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Posts;
