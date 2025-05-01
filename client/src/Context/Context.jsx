import { createContext } from "react";

export const Context = createContext();

export const MyContextProvider = ({ children }) => {


      return (
            <Context.Provider value={{}}>
                  {children}
            </Context.Provider>
      );
};
