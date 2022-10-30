import React from "react";
import { usePosts } from "../hooks/posts";
import { Link } from "react-router-dom";

function Post({ title, body, date, id }) {
  const { onDeleteHandler, onUpdateHandler } = usePosts();

  return (
    <>
      <tr>
        <td data-label="Post Nmae">{title}</td>
        <td data-label="Date">{date}</td>
        <td data-label="Actions">
          <Link to="/update">
            <button
              className="ui inverted green button"
              onClick={() => {
                onUpdateHandler(id, title, body);
              }}
            >
              Edit
            </button>
          </Link>
          <button
            className="ui inverted red button"
            onClick={() => {
              onDeleteHandler(id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Post;
