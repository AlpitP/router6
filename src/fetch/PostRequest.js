import React, { useState } from "react";

const PostRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [deleteMessage, setDeleteMessage] = useState();
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const clickHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => setFormData(data));
  };
  const editDataHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Alpit", email: "alpitpethani@gmail.com" }),
    })
      .then((response) => response.json())
      .then((data) => setFormData(data));
  };
  const deleteDataHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "DELETE",
      body: JSON.stringify({ name: "alpit" }),
    }).then(() => setDeleteMessage("Delete Successful"));
  };
  return (
    <>
      <div>Post Request</div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={changeHandler}
          value={formData.name}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={formData.email}
        />
        <br />
        <button type="submit" onClick={clickHandler}>
          Submit
        </button>
        <button type="edit" onClick={editDataHandler}>
          Edit
        </button>
        <button type="delete" onClick={deleteDataHandler}>
          Delete
        </button>
      </form>
      <h3>No : {formData.id}</h3>
      <h3>Name : {formData.name}</h3>
      <h3>Email : {formData.email}</h3>
      {console.log(deleteMessage)}
    </>
  );
};

export default PostRequest;
