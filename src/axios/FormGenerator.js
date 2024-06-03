import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import RadioButton from "./RadioButton";
import Select from "./Select";
import formFields, { Login, formFields1 } from "./formFields";
import customValidation from "./FormValidation";

const initialState = (form) => {
  let acc = {};
  for (let i = 0; i < form.length; i++) {
    if (form[i].type === "checkbox") {
      acc[form[i].name] = form[i].data.length > 1 ? [] : false;
    } else if (form[i].type !== "button") {
      acc[form[i].name] = "";
    }
  }
  return acc;
  // const state = form.reduce((acc, ele) => {
  //   const { type, name, data } = ele;
  //   if (type === "checkbox") {
  //     acc[name] = data.length > 1 ? [] : false;
  //   } else if (type !== "button") {
  //     acc[name] = "";
  //   }
  //   return acc;
  // }, {});
  // return state;
};
let cloneFormData;

export const initialState1 = initialState(formFields);
export const initialState2 = initialState(formFields1);
export const loginState = initialState(Login);

const Form = ({ formField, onSubmit, initialState, heading }) => {
  const [data, setData] = React.useState(initialState);
  const [error, setError] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  React.useEffect(() => {
    if (isValid) {
      customValidation({ data, formField, setError });
    }
  }, [data, formField, isValid]);

  const changeHandler = (e) => {
    const { type, checked, name, value } = e.target;
    setIsValid(true);
    if (type === "checkbox") {
      const isCheckBoxArray = Array.isArray(data[name]);

      if (checked) {
        setData((prevData) => ({
          ...prevData,
          [name]: isCheckBoxArray ? [...data[name], value] : true,
        }));
      } else {
        // FIX THIS
        if (isCheckBoxArray) {
          const index = data[name].findIndex((ele) => ele === value);
          cloneFormData = { ...data };
          cloneFormData[name].splice(index, 1);
        }
        setData((prevData) => ({
          ...prevData,
          [name]: isCheckBoxArray ? cloneFormData[name] : false,
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
    <form
      onSubmit={(e) =>
        onSubmit({
          e,
          error,
          data,
          setData,
          initialState,
          setIsValid,
          formField,
          setError,
        })
      }
    >
      <h2>{heading}</h2>
      {formField.map((item, index) => {
        const { name, label, data: fieldData } = item;
        switch (item.type) {
          case "radio":
            return (
              <RadioButton
                label={label}
                name={name}
                value={data[name]}
                onChange={changeHandler}
                list={fieldData}
                errorMessage={error[name]}
                key={index}
              />
            );

          case "checkbox":
            return (
              <Checkbox
                label={label}
                name={name}
                onChange={changeHandler}
                value={data[name]}
                list={fieldData}
                errorMessage={error[name]}
                key={index}
              />
            );

          case "select":
            return (
              <Select
                label={label}
                name={name}
                onChange={changeHandler}
                value={data[name]}
                list={fieldData}
                errorMessage={error[name]}
                key={index}
              />
            );

          case "button": {
            return <button key={index}>{item.buttonText}</button>;
          }
          case "heading": {
            return <h2 key={index}>{item.fromHeading}</h2>;
          }

          default:
            return (
              <Input
                type={item.type}
                name={name}
                label={label}
                onChange={changeHandler}
                placeholder={name}
                value={data[name]}
                errorMessage={error[name]}
                key={index}
              />
            );
        }
      })}
    </form>
  );
};

export default Form;
