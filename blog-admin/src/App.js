import React from "react";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
      <div className="ui container" style={{ margin: "20px 0px" }}>
        <h3 className="ui block header">Admin Panel</h3>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/create" element={<CreatePost />}/>
            <Route path="/update" element={<EditPost />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
