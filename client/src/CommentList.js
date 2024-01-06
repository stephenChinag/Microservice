const CommentList = ({ comments }) => {
  const renderedComment = comments.map((c) => {
    let content;

    if (c.status === "approved") {
      content = c.content;
      console.log(c.content);
    }
    if (c.status === "pending") {
      content = "The comment await approval";
      console.log("pending");
    }
    if (c.status === "declined") {
      content = "This comment has been Rejected ";
      console.log("rejected");
    }
    return <li key={c.id}>{content}</li>;
  });

  return <ul> {renderedComment}</ul>;
};

export default CommentList;
