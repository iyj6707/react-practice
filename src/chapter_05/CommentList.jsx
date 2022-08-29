import React from "react"
import Comment from "./Comment";

const comments = [
  {
    name: "임연재",
    comment: "ㅎㅇㅎㅇ",
  },
  {
    name: "tom",
    comment: "hihi",
  },
];

function CommentList(props) {
  return (
    <div>
      {
        comments.map((comment) => {
          return (
            <Comment name={comment.name} comment={comment.comment} />
          );
        })
      }
    </div>
  );
}

export default CommentList;