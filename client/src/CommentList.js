const CommentList = ({ comments }) => {
  const renderedComment = comments.map((c) => {
    let content;
    if (c.status === "approved") {
      content = c.content;
    }
    if (c.status === "pending") {
      content = " The comment await approval";
    }
    if (c.status === "rejected") {
      content = " This comment has been Rejected ";
    }

    <li key={c.id}>{content}</li>;
  });

  return <ul> {renderedComment}</ul>;
};

export default CommentList;
