import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import FormContainer from "./axios/Form";
import Home from "./newFeaturev6/Home";
import About from "./newFeaturev6/About";

// const Home = lazy(() => import("./pages/Home"));
// const Posts = lazy(() => import("./pages/Posts"));
// const About = lazy(() => import("./pages/About"));
// const Login = lazy(() => import("./pages/Login"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));
// const PrivateRoutes = lazy(() => import("./pages/PrivateRoutes"));
// const LazyComponent = lazy(() => import("./LazyComponent"));

// const Root = () => {
//   return (
//     <>
//       <Link to="/home" style={{ textDecoration: "none", margin: 10 }}>
//         Home
//       </Link>
//       <Link to="/posts" style={{ textDecoration: "none", margin: 10 }}>
//         Posts
//       </Link>
//       <Link to="/about" style={{ textDecoration: "none", margin: 10 }}>
//         About
//       </Link>
//       <Outlet />
//     </>
//   );
// };

// const Post = () => {
//   const param = useParams();
//   console.log(param);
//   const [count, setCount] = useOutletContext();
//   const clickHandler = () => {
//     setCount(count + 1);
//   };
//   return (
//     <>
//       <h2>Counter : {count}</h2>
//       <button onClick={clickHandler}>Increment</button>
//     </>
//   );
// };
// const Message = () => {
//   const context = useOutletContext();
//   console.log(context);
//   return <h2>Message</h2>;
// };
// const NoMatch = () => {
//   return <h2>Page not Found.</h2>;
// };

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Root />,
//       errorElement: <NoMatch />,
//       children: [
//         { path: "/home", element: <Home /> },
//         { path: "/posts", element: <Posts /> },
//         { path: "/about", element: <About /> },
//       ],
//     },
//   ],
//   { basename: "/app" }
// );
// function App() {
//   const [searchParam, setSearchParam] = useSearchParams();
//   // const element = useRoutes([
//   //   {
//   //     path: "/",
//   //     element: <Home />,
//   //   },
//   //   {
//   //     path: "posts",
//   //     element: <Posts />,
//   //     children: [
//   //       {
//   //         path: ":post",
//   //         element: <Post />,
//   //       },
//   //       {
//   //         path: "message",
//   //         element: <Message />,
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     path: "about",
//   //     element: <About />,
//   //   },
//   //   {
//   //     path: "*",
//   //     element: <NoMatch />,
//   //   },
//   // ]);
//   const navigate = useNavigate();

//   const updateSearchParamHandler = () => {
//     searchParam.set("lang", "en");
//     setSearchParam({ lang: "en" });
//     navigate(`/?lang=${searchParam.get("lang")}`);
//   };

//   return (
//     <>
//       {/* <RouterProvider router={router} /> */}
//       <nav style={{ margin: 10 }}>
//         <NavLink
//           to="/"
//           style={{ padding: 5 }}
//           className={({ isActive }) => (isActive ? "active-link" : "")}
//           state="a"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/posts"
//           style={{ padding: 5 }}
//           className={({ isActive }) => (isActive ? "active-link" : "")}
//         >
//           Post
//         </NavLink>
//         <NavLink
//           to="/about"
//           style={{ padding: 5 }}
//           className={({ isActive }) => (isActive ? "active-link" : "")}
//           state="a"
//         >
//           About
//         </NavLink>
//       </nav>
//       <Suspense fallback={<Loading />}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="posts" element={<Posts />}>
//             <Route index element={<Login />} />
//             <Route path=":postId" element={<Post />} />
//             <Route path="message" element={<Message />} />
//           </Route>
//           <Route path="about" element={<About />} />
//           <Route path="*" element={<NoMatch />} />
//           <Route element={<PrivateRoutes />}>
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Route>
//           <Route path="/login" element={<Login />} />
//         </Routes>
//         {/* {element} */}
//         {/* <button onClick={updateSearchParamHandler}>Update Search</button> */}
//         <LazyComponent />
//       </Suspense>
//       <ErrorBoundary>
//         <ShowData />
//       </ErrorBoundary>
//       <FetchWithAxios />
//     </>
//   );
// }
// const Loading = () => {
//   console.log("Loader show");
//   return <div style={{ backgroundColor: "red" }}>Loading..</div>;
// };

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <h1>Home</h1>
//         <Link to="about">About</Link>
//         <Link to="contact">Contact</Link>
//       </>
//     ),
//   },
//   {
//     path: "about",
//     element: <h1>About</h1>,
//   },
//   {
//     path: "contact",
//     element: <h1>Contact</h1>,
//   },
// ]);

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Public />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Private />} />
        </Route>
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassWord />} />
        </Route>
      </Routes> */}
      {/* <RouterProvider router={routes} /> */}
      <Routes>
        <Route
          element={
            <div>
              <h1>Layout</h1>
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      {/* <GetRequest /> */}
      {/* <PostRequest /> */}
      {/* <GetRequestWithAxios /> */}
      {/* <FormContainer /> */}
    </>
  );
};

export default App;
