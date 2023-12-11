import { useState } from "react";
import { Form } from "react-router-dom";
const PostCreate = () => {
  const [name, setName] = useState("");
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const onclickHandler = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label> Title</label>
          <input
            className="form-control"
            onChange={onChangeHandler}
            value={name}
          />
        </div>
        <button className="btn btn-primary" onClick={onclickHandler}>
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
