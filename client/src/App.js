import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import PostCreate from "./PostCeate";

function App() {
  return (
    <div className="container">
      <h1> Create Post</h1>
      <PostCreate />
    </div>
  );
}

export default App;
