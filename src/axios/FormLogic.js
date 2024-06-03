import React from "react";
import FormFieldsGenerator from "./FormFieldsGenerator";
import formFields from "./formFields";
import FormGenerator from "./FormGenerator";
import formValidation from "./FormValidation";

const initialState = formFields.reduce((acc, ele) => {
  if (ele.type === "checkbox") {
    acc[ele.name] = [];
  } else if (ele.type !== "button") {
    acc[ele.name] = "";
  }
  return acc;
}, {});

const Form = () => {
  const [data, setData] = React.useState(initialState);
  const [isError, setIsError] = React.useState(false);
  const submitHandler = (e) => {
    // formValidation();
    e.preventDefault();
    if (!isError) {
      alert("Please fill the form");
    } else {
      console.log("form submit");
      console.log(data);
      setData(initialState);
    }
  };
  const changeHandler = (e) => {
    const { type, checked, name, value } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setData((prevData) => ({
          ...prevData,
          [name]: [...data[name], value],
        }));
      } else {
        const index = data[name].findIndex((ele) => ele === value);
        data[name].splice(index, 1);
        setData((prevData) => ({
          ...prevData,
          [name]: data[name],
        }));
      }
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {/* <FormGenerator formFields={formFields} /> */}
      <FormFieldsGenerator
        formField={formFields}
        onChange={(e) => changeHandler(e)}
        data={data}
      />
    </form>
  );
};

export default Form;
