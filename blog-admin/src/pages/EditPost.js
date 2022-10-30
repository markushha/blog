import React from "react";
import { Link } from "react-router-dom";

function EditPost({ title, body, id }) {
  return (
    <div>
      <Link to="/">
        <button
          className="ui inverted secondary button"
          style={{ margin: "0px 0px 20px 0" }}
        >
          Go back
        </button>
      </Link>
      <form
        class="ui form"
        onSubmit={() => {
        }}
      >
        <div class="field">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={() => {
            }}
          />
        </div>
        <div class="field">
          <label>Body</label>
          <textarea
            type="text"
            value={body}
            onChange={() => {
            }}
          />
        </div>
        <button className="ui inverted green button">Save Changes</button>
      </form>
    </div>
  );
}

export default EditPost;
