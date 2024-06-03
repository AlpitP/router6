import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (props) => {
  const notify = () => toast("Added to Cart");
  return (
    <div
      style={{
        border: "1px solid black",
        height: 300,
        width: 200,
        overflow: "hidden",
        margin: 10,
        textAlign: "center",
      }}
    >
      <img
        src={props.imageUrl}
        alt="Product"
        height={180}
        width={180}
        style={{ marginBlock: 15 }}
      />
      <p style={{ margin: 0, padding: 0 }}>Category: {props.category}</p>
      <h3 style={{ marginBlock: 5, padding: 0 }}>Rate: {props.price} $</h3>
      <button onClick={notify}>Add to Cart</button>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Card;
