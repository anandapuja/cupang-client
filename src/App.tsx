import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { AuthenticationContext, ErrorMessageContext } from "./state/context";
import {
  ACCESS_TOKEN,
  STATE_TYPE_ADD_CART_ITEM,
  STATE_TYPE_CHECKOUT,
  STATE_TYPE_DELETE_CART_ITEM,
  STATE_TYPE_LOGIN,
  STATE_TYPE_LOGOUT,
  STATE_TYPE_REGISTER,
} from "./utils/Constants";
import useAuth from "./utils/auth";
import ErrorElement from "./components/ErrorElement";

export const loaderApp = async () => {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    const response = await useAuth();
    const customer = await response.json();
    if (response.status === 200) {
      return customer.data;
    }
  }
  return null;
};

type DataAuthentication = {
  authStatus: boolean;
  customer: {
    cartItem: number;
    email: string;
    id: string;
    username: string;
  };
};

type DataCustomer = {
  cartItem: number;
  email: string;
  id: string;
  username: string;
};

function App() {
  const data: any = useLoaderData();
  const [appState, setAppState] = useState({
    authStatus: false,
    customer: undefined,
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSetAppState = (type: string, data: DataAuthentication) => {
    if (type === STATE_TYPE_LOGIN) {
      setAppState({
        ...appState,
        authStatus: data.authStatus,
        customer: data.customer,
      });
    }

    if (type === STATE_TYPE_LOGOUT) {
      setAppState({
        ...appState,
        authStatus: false,
        customer: undefined,
      });
    }

    if (type === STATE_TYPE_REGISTER) {
      setAppState({
        ...appState,
        authStatus: data.authStatus,
        customer: data.customer,
      });
    }

    if (type === STATE_TYPE_CHECKOUT) {
      setAppState({
        ...appState,
        authStatus: data.authStatus,
        customer: {
          ...appState.customer,
          cartItem: 0,
        },
      });
    }

    if (type === STATE_TYPE_ADD_CART_ITEM) {
      const customer: DataCustomer = {
        cartItem: appState.customer?.cartItem + 1,
        email: appState.customer?.email,
        id: appState.customer?.id,
        username: appState.customer?.username,
      };
      setAppState({
        ...appState,
        customer,
      });
    }

    if (type === STATE_TYPE_DELETE_CART_ITEM) {
      const customer: DataCustomer = {
        cartItem: appState.customer?.cartItem - 1,
        email: appState.customer?.email,
        id: appState.customer?.id,
        username: appState.customer?.username,
      };
      setAppState({
        ...appState,
        customer,
      });
    }
  };

  const handleSetErrorMessage = (message: string) => {
    setErrorMessage(message);
  };

  useEffect(() => {
    if (data) {
      setAppState({
        ...appState,
        authStatus: !appState.authStatus,
        customer: data,
      });
    }
  }, []);

  return (
    <AuthenticationContext.Provider value={{ appState, handleSetAppState }}>
      <Header />
      <ErrorMessageContext.Provider
        value={{ errorMessage, handleSetErrorMessage }}
      >
        <ErrorElement />
      </ErrorMessageContext.Provider>
      <Outlet />
      <Footer />
    </AuthenticationContext.Provider>
  );
}

export default App;
