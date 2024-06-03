import { createBrowserRouter, useRouteLoaderData } from "react-router-dom";
import About, { Error, ErrorAbout } from "./About";
import AwaitComponent from "./Await";
import Home from "./Home";

const dataLoader = async ({ request }) => {
  // const url = new URL(request.url);
  // let searchTerm = url.searchParams.get("name");
  // console.log(searchTerm);
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const Abc = () => {
  const data = useRouteLoaderData("root");
  console.log(data);
  return <h1>Abc</h1>;
};
const Abc1 = () => {
  return <h1>Abc1</h1>;
};

const routes = createBrowserRouter([
  {
    errorElement: <Error />,
    path: "/",
    loader: dataLoader,
    element: <Home />,
    id: "root",
    // action: async ({ request }) => {
    //   console.log(request);
    //   console.log("action run");
    //   let formData = await request.formData();
    //   let name = formData.get("email");
    //   return name;
    // },
    // action: action,
    children: [
      {
        path: "abc",
        element: <Abc />,
      },
      {
        path: "abc1",
        element: <Abc1 />,
      },
    ],
  },

  {
    errorElement: <ErrorAbout />,
    path: "/about",
    element: <About />,
  },

  {
    path: "/await",
    element: <AwaitComponent />,
    loader: dataLoader,
  },
]);
export default routes;
