import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    mobileNo: "",
  });
  const navigate = useNavigate();

  const allUser = JSON.parse(localStorage.getItem("users"));

  const submitHandler = (e) => {
    e.preventDefault();
    if (!user.name || !user.password || !user.mobileNo) {
      alert("Please fill the form.");
    } else {
      localStorage.setItem("isAuthenticated", false);
      localStorage.setItem("users", JSON.stringify([...allUser, user]));
      navigate("/login");
    }
  };

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          label="UserName"
          name="name"
          value={user.name}
          onChange={changeHandler}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value={user.password}
          onChange={changeHandler}
        />
        <Input
          type="number"
          label="Mo No"
          name="mobileNo"
          value={user.mobileNo}
          onChange={changeHandler}
        />
        <button>Submit</button>
        <br />
        <Link to="/login">Already have an account?</Link>
      </form>
    </div>
  );
};
export default Register;
