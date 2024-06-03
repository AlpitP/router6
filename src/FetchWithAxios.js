import React, { useEffect, useState } from "react";
import axios from "axios";

// async function fetch() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   console.log(res.data);
// }
// fetch();
const FetchWithAxios = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);
  const addUser = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: "Alpit",
        username: "alpit",
      })
      .then((res) => {
        setUsers([...users, res.data]);
        console.log(res);
      });
  };
  console.log(users);
  return (
    <div>
      {users &&
        users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default FetchWithAxios;
