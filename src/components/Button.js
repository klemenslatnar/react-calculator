import React from "react";

import classes from "./Button.module.css";

function Button({ onClick, children }) {
  return (
    <button onClick={() => onClick(children)} className={classes.btn}>
      {children}
    </button>
  );
}

export default Button;
