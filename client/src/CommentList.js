import { useEffect, useState } from "react";
import axios from "axios";
const CommentList = ({ postId }) => {
  const [comments, setComment] = useState("");

  const fetchComment = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComment(res.data);
  };

  useEffect(() => {
    fetchComment();
  });

  const renderComment = Object.values(comments);
  const listRenderComment = renderComment.map((p) => (
    <div key={p.id}>
      {" "}
      <h5> {p.content}</h5>
    </div>
  ));

  return <div> {listRenderComment}</div>;
};

export default CommentList;
