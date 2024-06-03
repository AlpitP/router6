import React from "react";
import Input from "./Input";
import RadioButton from "./RadioButton";
import Checkbox from "./Checkbox";
import Select from "./Select";

const FormFieldsGenerator = ({ formField, changeHandler, data }) => {
  return (
    <>
      {formField.map((item, index) => {
        const { name, label, errorMessage, data: fieldData, isRequired } = item;
        switch (item.type) {
          case "radio":
            return (
              <RadioButton
                label={label}
                name={name}
                value={data[name]}
                onChange={(e) => changeHandler(e)}
                list={fieldData}
                errorMessage={errorMessage}
                key={index}
              />
            );

          case "checkbox":
            return (
              <Checkbox
                label={label}
                name={name}
                onChange={(e) => changeHandler(e)}
                value={data[name]}
                list={fieldData}
                errorMessage={errorMessage}
                key={index}
              />
            );

          case "select":
            return (
              <Select
                label={label}
                name={name}
                onChange={(e) => changeHandler(e)}
                value={data[name]}
                list={fieldData}
                errorMessage={errorMessage}
                key={index}
              />
            );

          case "button": {
            return <button key={index}>{item.buttonText}</button>;
          }

          default:
            return (
              <Input
                type={item.type}
                name={name}
                label={label}
                onChange={(e) => changeHandler(e)}
                placeholder={name}
                value={data[name]}
                errorMessage={errorMessage}
                key={index}
                required={isRequired}
              />
            );
        }
      })}
    </>
  );
};

export default FormFieldsGenerator;
