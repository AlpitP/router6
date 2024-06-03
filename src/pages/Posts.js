import { useState } from "react";
import { NavLink, Outlet, useMatch } from "react-router-dom";

const Posts = () => {
  const match = useMatch("/posts");
  console.log(match);

  // const outlet = useOutlet();
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Blogs</h2>
      <NavLink
        to="postId"
        style={{ padding: 5 }}
        className={({ isActive }) => (isActive ? "active-link" : "")}
        end
      >
        Post
      </NavLink>
      <NavLink
        to="message"
        style={{ padding: 5 }}
        className={({ isActive }) => (isActive ? "active-link" : "")}
        end
      >
        Message
      </NavLink>
      <Outlet context={[count, setCount]} />
      {/* {outlet} */}
    </>
  );
};
export default Posts;
