import { useState } from "react";
import './Form.css'; 

export default function Form({ addComment }) {
  const [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 0,
  });

  let handlingFormData = (event) => {
    setFormData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  let onSubmitData = (event) => {
    addComment(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remark: "",
      rating: 0,
    });
  };

  return (
    <div>
      <h3>Give a comment</h3>
      <form onSubmit={onSubmitData}>
        <input
          type="text"
          name="username"
          placeholder="Enter the username"
          value={formData.username}
          onChange={handlingFormData}
        />
        <textarea
          name="remark"
          id="commentBox"
          placeholder="Write your comment..."
          value={formData.remark}
          onChange={handlingFormData}
        ></textarea>
        <input
          type="number"
          name="rating"
          placeholder="Rate out of 5"
          min={0}
          max={5}
          value={formData.rating}
          onChange={handlingFormData}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
