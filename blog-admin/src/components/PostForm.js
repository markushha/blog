import React, { useState } from "react";

function PostForm({ onSubmit, initialValues, errorMessage }) {
  const [title, setTitle] = useState(initialValues ? initialValues.title : '')
  const [body, setBody] = useState(initialValues ? initialValues.body : '')

  return (
    <form
      className="ui form"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit({title, body})
      }}
    >
      <div className="field" style={{margin: "15px 0 15px 0"}}>
        <label style={{fontSize: "18px"}}>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="field">
        <label style={{fontSize: "18px"}}>Body</label>
        <textarea
          name="body"
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </div>
      <div style={{margin: "10px 0"}}>
          {errorMessage && <label style={{fontWeight: "bold", color: "red"}}>Error: {errorMessage}</label>}
        </div>
      <button className="ui inverted green button" type="submit">Save</button>
    </form>
  )
}

export default PostForm