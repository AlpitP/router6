import React, { useEffect, useState } from "react";
import axios from "axios";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 404) {
      console.log("error");
    }
  }
);

// set default config
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const GetRequestWithAxios = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      //   try {
      //     const data = await axios.get(
      //       "https://jsonplaceholder.typicode.com/users"
      //     );
      //     console.log(data);
      //   } catch (error) {
      //     console.log(error.message);
      //   }
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/10",
          {
            validateStatus: (status) => {
              return (status >= 200 && status < 300) || status === 404;
            },
          }
        );
        setData(data.data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const patchRequestHandler = () => {
    const postData = async () => {
      const response = await axios.patch("posts/1", {
        title: "Hello World",
      });
      console.log(response.data);
      setData(response.data);
    };
    postData();
  };

  const putRequestHandler = () => {
    const postData = async () => {
      try {
        const response = await axios.put(
          "https://jsonplaceholder.typicode.com/posts/1",
          {
            title: "Hello World",
          },
          {
            validateStatus: (status) => {
              return (status >= 200 && status < 300) || status === 404;
            },
          }
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    postData();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    const formDataSend = async () => {
      try {
        const { data } = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          document.querySelector("#my-form"),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.log(err);
        console.log(err.message);
      }
    };
    formDataSend();
  };

  // const editHandler = () => {
  //   const editData = async () => {
  //     const response = await instance.put(
  //       "users/1",
  //       { name: "Alpit" },
  //       {
  //         header: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response);
  //   };
  //   editData();
  // };

  const deleteHandler = () => {
    const deleteData = async () => {
      const response = await instance.delete("users/1");
      console.log(response);
    };
    deleteData();
  };
  return (
    <>
      <h1>Axios</h1>
      <button onClick={putRequestHandler}>Put Request</button>
      <button onClick={patchRequestHandler}>Patch Request</button>
      <form id="my-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
        <button type="delete" onClick={deleteHandler}>
          Delete
        </button>
      </form>
      <h3>Posts</h3>
      <p>Title: {data && data.title}</p>
      <p>Body: {data && data.body}</p>
    </>
  );
};

export default GetRequestWithAxios;
