import React, { createContext, useState } from "react";

export const couterContext = createContext();
const CouterContext = ({ children }) => {
  const [count, setCount] = useState(5);

  function incr() {
    setCount(count + 1);
  }

  function decr() {
    setCount(count - 1);
  }
  return (
    <couterContext.Provider value={{ count, incr, decr }}>
      {children}
    </couterContext.Provider>
  );
};

export default CouterContext;
