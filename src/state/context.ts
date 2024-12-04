import { createContext } from "react";

export type Customer =
  | {
      username?: string;
      id?: string;
      email?: string;
      cartItem: number;
      cartItemDetail?: { productId: string }[] | [];
    }
  | undefined;

export type AppState = {
  authStatus: boolean;
  customer: Customer;
};

export type HandleSetAppState = (
  stateType: string,
  data?: AppState,
  productId?: string
) => void;

export type AuthenticationContext = {
  appState: AppState;
  handleSetAppState: HandleSetAppState;
};

const appState: AppState = {
  authStatus: false,
  customer: undefined,
};

const handleSetAppState: HandleSetAppState = () => {};

// CREATE CONTEXT
export const AuthenticationContext = createContext<AuthenticationContext>({
  appState,
  handleSetAppState,
});

export type ErrorMessageType = string;
const errorMessage: ErrorMessageType = "";

const handleSetErrorMessage = (message: string): void => {
  console.log(message);
};

// CREATE CONTEXT
export const ErrorMessageContext = createContext({
  errorMessage,
  handleSetErrorMessage,
});
