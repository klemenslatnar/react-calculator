import React from "react";
import classes from "./ClearBtn.module.css";

function ClearBtn({ onClick, children }) {
  return <button onClick={onClick} className={classes.clear}>{children}</button>;
}

export default ClearBtn;
