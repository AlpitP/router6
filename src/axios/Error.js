import React from "react";

const Error = (props) => {
  return (
    <span
      style={{
        margin: 0,
        padding: 0,
        color: "red",
        fontSize: 14,
        marginLeft: 5,
      }}
    >
      {props.errorMessage}
    </span>
  );
};

export default Error;
