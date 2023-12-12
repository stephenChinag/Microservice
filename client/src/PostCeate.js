import { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const onClickHandler = (e) => {
    e.preventDefault();

    console.log(title);
    setTitle("");
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label> Title</label>
          <input
            value={title}
            className="form-control"
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={onClickHandler} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
