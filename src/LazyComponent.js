import React, { useEffect, useState } from "react";

const LazyComponent = () => {
  const [data, setData] = useState();
  useEffect(() => {
    let promise = new Promise(function (resolve) {
      setTimeout(() => resolve("done"), 2000);
    });
    promise.then((result) => setData(result));
  }, []);
  return (
    <>
      <div>{data}</div>
    </>
  );
};

export default LazyComponent;
