import { useCallback, useEffect, useState } from "react";
import {
  Form,
  Link,
  Outlet,
  redirect,
  useActionData,
  useBeforeUnload,
  useFetcher,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import ScrollToBottom from "./ScrollToBottom";

const Home = () => {
  const [state, setState] = useState("Alpit");

  const data = useLoaderData();
  console.log(data);

  const actionData = useActionData();
  console.log(actionData);

  // const matches = useMatches();
  // console.log(matches);

  useBeforeUnload(
    useCallback(() => {
      localStorage.name = state;
    }, [state])
  );
  useEffect(() => {
    if (state === null && localStorage.stuff != null) {
      setState(localStorage.stuff);
    }
  }, [state]);

  const fetcher = useFetcher();
  console.log(fetcher.state);
  // const submit = useSubmit();
  // const match = useMatches();

  const navigation = useNavigation();
  console.log(navigation);

  // const revalidator = useRevalidator();
  // console.log(revalidator);

  return (
    <>
      <ScrollToBottom />
      <h1>Home</h1>

      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td style={{ textAlign: "center" }}>{index}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* <fetcher.Form onSubmit={() => submit(console.log("form submit"))}>
        <input type="text" name="name" />
        <button type="submit">
          {fetcher.state === "idle" ? "Submit" : fetcher.state}
        </button>
      </fetcher.Form> */}
      <SignUp />
      <Outlet />
    </>
  );
};

export function SignUp() {
  const errors = useActionData();

  return (
    <Form method="post">
      <p>
        <input type="text" name="email" />
        {errors?.email && <span>{errors.email}</span>}
      </p>

      <p>
        <input type="text" name="password" />
        {errors?.password && <span>{errors.password}</span>}
      </p>

      <p>
        <button type="submit">Sign up</button>
      </p>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const errors = {};
  console.log("action");
  // validate the fields
  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "That doesn't look like an email address";
  }

  if (typeof password !== "string" || password.length < 6) {
    errors.password = "Password must be > 6 characters";
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }

  // otherwise create the user and redirect
  // await createUser(email, password);
  return redirect("/about");
}
export default Home;
