const CommentList = ({ comments }) => {
  const renderedComment = comments.map((c) => (
    <div key={c.id}>
      <li> {c.content}</li>
    </div>
  ));

  return <div> {renderedComment}</div>;
};

export default CommentList;
