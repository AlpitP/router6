import { useNavigate } from "react-router-dom";

const Private = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.setItem("isAuthenticated", false);
    navigate("/login");
  };

  return (
    <>
      <h1>Private Page</h1>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};
export default Private;
