import React, { useState } from "react";
import { usePosts } from "../hooks/posts";
import { Link } from 'react-router-dom';

function CreatePost() {
  const { onSubmitHandler, errorMessage } = usePosts();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
       <Link to="/"><button className="ui inverted secondary button" style={{margin: "0px 0px 20px 0" }}>Go back</button></Link>
      <div className="ui item">
        <label style={{fontWeight: "bold", fontSize: "28px" }}>Create Post</label>
      </div>
      <form
        className="ui form"
        onSubmit={(e) => {
          onSubmitHandler(e, title, body);
        }}
      >
        <div className="field" style={{margin: "20px 0"}}>
          <label style={{fontSize: "18px" }}>Post's title</label>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="field">
          <label style={{fontSize: "18px" }}>Post's body</label>
          <textarea
            type="text"
            name="body"
            placeholder="Body..."
            onChange={(e) => {setBody(e.target.value)}}
            value={body}
          />
        </div>
        <div style={{margin: "10px 0"}}>
          {errorMessage && <label style={{fontWeight: "bold", color: "red"}}>Error: {errorMessage}</label>}
        </div>
        <button className="ui inverted green button" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
