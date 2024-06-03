import React from "react";
import Error from "./Error";

const Input = ({ label, errorMessage, value, ...rest }) => {
  return (
    <>
      {label && <label>{label + " : "}</label>}
      <input {...rest} value={value} style={{ margin: 5 }} />
      {errorMessage && <Error errorMessage={errorMessage} />}
      <br />
    </>
  );
};

export default Input;
