import React, { useEffect, useState } from "react";

const GetRequest = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData("https://jsonplaceholder.typicode.com/users");
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ol>
        {data &&
          data.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </ol>
    </div>
  );
};

export default GetRequest;
