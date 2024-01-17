import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요, props를 사용합니다.",
    },
    {
        name: "가나다",
        comment: "리액트 배울 것들이 너무 많아요.",
    },
    {
        name: "리액트",
        comment: "언젠가는 능숙해지겠죠~"
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;