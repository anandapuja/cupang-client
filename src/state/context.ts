import { createContext } from "react";

export type Customer = {
  username?: string;
  id?: string;
  email?: string;
  cartItem?: number;
};

export type AuthData = {
  appState: {
    authStatus: boolean;
    customer?: Customer | undefined;
  };
  handleSetAppState: (stateType?: string, data?: {}) => void;
};

const authData: AuthData = {
  appState: {
    authStatus: false,
    customer: undefined,
  },
  handleSetAppState: (): void => {},
};

type errorMessage = {
  errorMessage: string | null;
  handleSetErrorMessage: (message: string) => void;
};
const errorMessage = {
  errorMessage: null,
  handleSetErrorMessage: (message: string): void => {},
};

export const AuthenticationContext = createContext(authData);
export const ErrorMessageContext = createContext(errorMessage);
