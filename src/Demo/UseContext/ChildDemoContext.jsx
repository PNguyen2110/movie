import React, { useContext } from "react";
import { context, useDemo } from "./UseContext";

export const ChildDemoContext = () => {
  // const state = useContext(context);
  // console.log("state", state);
  const state = useContext(context);
  console.log("state1", state.state1);
  return <div>ChildDemoContext</div>;
};
