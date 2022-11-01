import React from "react";
import Post from "../components/Post";
import { usePosts } from "../hooks/posts";
import { Link } from "react-router-dom";

function Posts() {
  const { posts, loading } = usePosts();

  return (
    <>
      {loading && (
        <div className="ui container">
          <h2>Loading...</h2>
        </div>
      )}
      {!loading && (
        <>
          <Link to="posts/new">
            <button className="ui inverted secondary button">New Post</button>
          </Link>
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
                <Post
                  title={post.title}
                  body={post.body}
                  date={post.createdAt}
                  id={post._id}
                  key={post._id}
                />
              ))}
            </tbody>
          </table>
          {posts.length === 0 && (
            <div className="ui container">
              <h2 style={{ textAlign: "center", margin: "100px" }}>
                There are no any posts yet...
              </h2>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Posts;
