import { createContext } from "react";

// export type DataAuthentication = {
//   authStatus: boolean;
//   customer:
//     | {
//         cartItem: number | undefined;
//         email: string | undefined;
//         id: string | undefined;
//         username: string | undefined;
//       }
//     | undefined;
// };

// export type AuthData = {
//   appState: {
//     authStatus: boolean;
//     customer: Customer | undefined;
//   };
//   handleSetAppState: (stateType?: string, data?: {}) => void;
// };

// const authData: AuthData = {
//   appState: {
//     authStatus: false,
//     customer: undefined,
//   },
//   handleSetAppState: (): void => {},
// };

export type Customer = {
  username?: string;
  id?: string;
  email?: string;
  cartItem?: number;
};

export type AppState = {
  authStatus: boolean;
  customer: Customer | undefined;
};

const appState: AppState = {
  authStatus: false,
  customer: undefined,
};

// export type HandleSetAppState = (stateType?: string, data?: {}) => void;
const handleSetAppState = (stateType: string, data: {}): void => {
  console.log(stateType, data);
};

export const AuthenticationContext = createContext({
  appState,
  handleSetAppState,
});

export type ErrorMessageType = string;
const errorMessage: ErrorMessageType = "";

// export type HandleSetErrorMessage = () => void;
const handleSetErrorMessage = (message: string): void => {
  console.log(message);
};

// const errorMessage = {
//   errorMessage: null,
//   handleSetErrorMessage: (): void => {},
// };
export const ErrorMessageContext = createContext({
  errorMessage,
  handleSetErrorMessage,
});
