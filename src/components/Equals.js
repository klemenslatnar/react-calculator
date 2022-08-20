import React from "react";
import classes from "./Equals.module.css";

function Equals({ children, onEqual }) {
  return (
    <button onClick={onEqual} className={classes.equals}>
      {children}
    </button>
  );
}

export default Equals;
