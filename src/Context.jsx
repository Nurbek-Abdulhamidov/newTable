import React, { createContext, useState } from "react";
import { data } from "./data";

export const ContextInfo = createContext();

const Context = ({ children }) => {
  const [mock, setMock] = useState(data);
  return (
    <ContextInfo.Provider value={[mock, setMock]}>
      {children}
    </ContextInfo.Provider>
  );
};

export default Context;
