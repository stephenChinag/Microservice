import { useEffect, useState } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const renderPost = Object.values(posts);
  const listRenderedPost = renderPost.map((p) => (
    <div
      className="card"
      style={{ width: "30%", marginBottom: "20px" }}
      key={p.id}
    >
      <div className="card-body">
        <h3> {p.title}</h3>
        <CommentList postId={p.id} />
        <CommentCreate postId={p.id} />
      </div>
    </div>
  ));
  return (
    <div className="d-flex flex-roe flex-wrap justify-conten-between">
      {listRenderedPost}
    </div>
  );
};

export default PostList;
