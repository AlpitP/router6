import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input";

const Login = () => {
  const navigate = useNavigate();
  const [loginUserData, setLoginUserData] = useState({
    name: "",
    password: "",
  });

  const user = JSON.parse(localStorage.getItem("users"));

  const submitHandler = (e) => {
    e.preventDefault();
    const validUser =
      user &&
      user.find((element) => {
        return (
          element.name === loginUserData.name &&
          element.password === loginUserData.password
        );
      });

    if (validUser) {
      localStorage.setItem("isAuthenticated", true);
      navigate("/dashboard");
    } else {
      alert("Invalid UserName and Password.");
    }
  };

  const changeHandler = (e) => {
    setLoginUserData({ ...loginUserData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          label="UserName"
          name="name"
          value={loginUserData.name}
          onChange={changeHandler}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value={loginUserData.password}
          onChange={changeHandler}
        />
        <button>Submit</button>
        <br />
        <Link to="/register"> New user Register? </Link>
        <Link to="/forgotPassword"> Forgot Password? </Link>
      </form>
    </div>
  );
};
export default Login;
