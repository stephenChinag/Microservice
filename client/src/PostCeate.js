import { useState } from "react";
import axios from "axios";
const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const onClickHandler = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onClickHandler}>
        <div className="form-group">
          <label> Title</label>
          <input
            value={title}
            className="form-control"
            onChange={onChangeHandler}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
