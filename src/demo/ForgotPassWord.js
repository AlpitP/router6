import React, { useState } from "react";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassWord = () => {
  const [newPassword, setNewPassword] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("users"));
  console.log(user);

  const submitHandler = (e) => {
    e.preventDefault();
    const index = user.findIndex(
      (element) => element.name === newPassword.name
    );
    console.log(index);
    if (newPassword.password === "" && newPassword.name === "") {
      alert("Please Enter New Password.");
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          { ...user[index], password: newPassword.password },
          ...user,
        ])
      );
      navigate("/login");
    }
  };

  const changeHandler = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={submitHandler}>
        <h1>Forgot Password</h1>
        <Input
          type="text"
          name="name"
          label="UserName"
          onChange={changeHandler}
          value={newPassword.name}
        />
        <Input
          type="password"
          name="password"
          label="Enter New Password"
          onChange={changeHandler}
          value={newPassword.password}
        />
        <button>Submit</button>
        <br />
        <Link to="/login">Login?</Link>
      </form>
    </div>
  );
};

export default ForgotPassWord;
