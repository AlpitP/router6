import React from "react";
import Form, {
  initialState1,
  initialState2,
  loginState,
} from "./FormGenerator";
import formFields, { Login, formFields1 } from "./formFields";
import customValidation from "./FormValidation";
// const Form = () => {
//   const [data, setData] = React.useState(initialState);
//   const submitHandler = (e) => {
//     e.preventDefault();
//     setData(initialState);
//     const postData = async () => {
//       const response = await axios.post(
//         "https://jsonplaceholder.typicode.com/users",
//         data
//       );
//       console.log(response);
//     };
//     postData();
//   };

//   const changeHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
//   return (
//     <>
//       <form onSubmit={submitHandler}>
//         <h1>Form</h1>
//         {formFields.map((item, index) => {
//           switch (item.type) {
//             default:
//               return (
//                 <Input
//                   key={index}
//                   type={item.type}
//                   name={item.name}
//                   onChange={changeHandler}
//                   placeholder={item.name}
//                   value={data[item.name]}
//                   inValid={data[item.name] === ""}
//                   errorMessage={item.errorMessage}
//                 />
//               );
//           }
//         })}
//         {/* <Input
//           type="text"
//           name="name"
//           onChange={changeHandler}
//           placeholder="Name"
//           value={data.name}
//           inValid={data.name === ""}
//           errorMessage="Please Enter Name"
//         />
//         <Input
//           type="email"
//           name="email"
//           onChange={changeHandler}
//           placeholder="Email"
//           value={data.email}
//           inValid={data.email === ""}
//           errorMessage="Please Enter Email"
//         /> */}
//         <button>Submit</button>
//       </form>
//     </>
//   );
// };

const FormContainer = () => {
  const submitHandler = ({
    e,
    setData,
    data,
    initialState,
    setIsValid,
    formField,
    setError,
  }) => {
    e.preventDefault();
    const error = customValidation({ data, formField, setError });
    if (!Object.values(error).length) {
      setIsValid(false);
      console.log("form submit");
      console.log(data);
      setData(initialState);
    } else {
      alert("Please fill the form");
    }
  };
  return (
    <>
      <Form
        formField={formFields}
        onSubmit={submitHandler}
        initialState={initialState1}
        heading="Form1"
      />
      <Form
        formField={formFields1}
        onSubmit={submitHandler}
        initialState={initialState2}
        heading="Form2"
      />
      <Form
        formField={Login}
        onSubmit={submitHandler}
        initialState={loginState}
        heading="Form3"
      />
    </>
  );
  // return <Form />;
};

export default FormContainer;
