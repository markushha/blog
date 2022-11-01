import React from "react";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="ui container" style={{ margin: "20px 0px" }}>
      <div className="ui menu">
        <div className="header item">Admin Panel</div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts">
            <Route path=":id" element={<EditPost />} />
            <Route path="new" element={<CreatePost />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
