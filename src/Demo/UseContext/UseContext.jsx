// import React, { createContext, useContext, useState } from "react";

import { createContext, useState } from "react";

// const stateDefaults = {};

// export const context = createContext(stateDefaults);
// const UseContext = ({ children }) => {
//   // console.log(children);
//   const [state, setState] = useState({ name: 13 });
//   return <context.Provider value={{ ...state }}>{children}</context.Provider>;
// };

// export default UseContext;

// export const useDemo = () => {
//   return useContext(context);
// };

const context = createContext();
console.log(context);
const ProviderContext = ({ children }) => {
  const [state, setState] = useState(123);
  const [state1, setState1] = useState(456);

  const value = {
    state,
    state1,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export { context, ProviderContext };
