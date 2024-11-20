import { createContext } from "react";

export type AppContext = {
  isSignIn: boolean;
};

const AppContext = createContext({
  isSignIn: false,
});

export default AppContext;
