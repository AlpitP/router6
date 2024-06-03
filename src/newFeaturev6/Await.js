import React from "react";
import {
  Await,
  useAsyncError,
  useAsyncValue,
  useLoaderData,
} from "react-router-dom";

const Users = () => {
  const users = useAsyncValue();
  const error = useAsyncError();
  console.log(users);
  console.log(error);
  return <h1>Users</h1>;
};
const AwaitComponent = () => {
  const data = useLoaderData();
  return (
    <React.Suspense fallback={<h2>Loading..</h2>}>
      <Await resolve={data} errorElement={<div>Page not found.</div>}>
        <Users />
      </Await>
    </React.Suspense>
  );
};

export default AwaitComponent;
