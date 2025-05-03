import { createContext, useState } from "react";

export const Context = createContext();

export const MyContextProvider = ({ children }) => {
      const [logined, setLogined] = useState(false)

      return (
            <Context.Provider value={{ logined, setLogined }}>
                  {children}
            </Context.Provider>
      );
};
