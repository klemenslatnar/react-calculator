import React from "react";

import classes from "./ZeroButton.module.css";

function ZeroButton({ onClick, children }) {
  return (
    <button onClick={() => onClick(children)} className={classes.zero}>
      {children}
    </button>
  );
}

export default ZeroButton;
