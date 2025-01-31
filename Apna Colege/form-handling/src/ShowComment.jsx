import React from 'react'
import Form from './Form';
import './ShowComment.css';
import { useState } from 'react';
export default function ShowComment() {
  let [comments, setComments] = useState([
    { username: "First User", remark: "Nice Try", rating: 1 },
  ]);

  let addComment = (comment) => {
    setComments((prev) => [...prev, comment]);
  };

  return (
    <div className="container">
      <div className="form-section">
        <Form addComment={addComment} />
      </div>
      <div className="comments-section">
        <h2>All Comments</h2>
        {comments.map((ele, i) => (
          <div key={i} className="comment-item">
            <h5>{ele.username}</h5>
            <p>{ele.remark}</p>
            <h5>{ele.rating}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}