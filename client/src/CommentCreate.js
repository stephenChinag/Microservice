import { useState } from "react";
import axios from "axios";
const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  //onChange for inpute Value
  const onChangeandler = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label> Comment</label>
          <input
            value={content}
            onChange={onChangeandler}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
