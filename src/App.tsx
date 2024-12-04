import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { AuthenticationContext, ErrorMessageContext } from "./state/context";
import {
  ACCESS_TOKEN,
  CART_API,
  STATE_TYPE_ADD_CART_ITEM,
  STATE_TYPE_CHECKOUT,
  STATE_TYPE_DELETE_CART_ITEM,
  STATE_TYPE_LOGIN,
  STATE_TYPE_LOGOUT,
  STATE_TYPE_REGISTER,
} from "./utils/Constants";
import useAuth from "./utils/auth";
import ErrorElement from "./components/ErrorElement";
import type {
  AppState,
  Customer,
  ErrorMessageType,
  HandleSetAppState,
} from "./state/context";
import { mutate } from "swr";

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

function App() {
  const data: any = useLoaderData();

  const [appState, setAppState] = useState<AppState>({
    authStatus: false,
    customer: undefined,
  });

  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>("");

  const handleSetAppState: HandleSetAppState = (
    stateType: string,
    data?: AppState,
    productId?: string
  ): void => {
    if (stateType === STATE_TYPE_LOGIN) {
      if (data) {
        setAppState(data);
      }
    }

    if (stateType === STATE_TYPE_LOGOUT) {
      setAppState({
        authStatus: false,
        customer: undefined,
      });
    }

    if (stateType === STATE_TYPE_REGISTER) {
      if (data) {
        setAppState(data);
      }
    }

    if (stateType === STATE_TYPE_CHECKOUT) {
      setAppState({
        ...appState,
        customer: {
          ...appState.customer,
          cartItem: 0,
          cartItemDetail: [],
        },
      });
    }

    if (stateType === STATE_TYPE_ADD_CART_ITEM) {
      if (productId && appState.customer) {
        // const addCartItemDetail = [
        //   ...appState.customer.cartItemDetail,
        //   { productId },
        // ];

        // const addCartItemDetail : {}[] = appState.customer.cartItemDetail;
        // addCartItemDetail?.push({ productId });

        const customer: Customer = {
          ...appState.customer,
          cartItem: appState.customer.cartItem + 1,
          // cartItemDetail: addCartItemDetail,
        };

        mutate(CART_API);

        setAppState({
          ...appState,
          customer: customer,
        });
      }
    }

    if (stateType === STATE_TYPE_DELETE_CART_ITEM) {
      if (appState.customer) {
        const removeCartItemDetail = appState.customer.cartItemDetail?.filter(
          (cartItem) => {
            return cartItem.productId !== productId;
          }
        );

        console.log("new item", removeCartItemDetail);
        console.log("productId", productId);

        const customer: Customer = {
          ...appState.customer,
          cartItem: appState.customer?.cartItem - 1,
          cartItemDetail: removeCartItemDetail,
        };

        setAppState({
          ...appState,
          customer,
        });
      }
    }
  };

  const handleSetErrorMessage = (message: string) => {
    setErrorMessage(message);
  };

  useEffect(() => {
    if (data) {
      const customer = {
        username: data.username,
        id: data.id,
        email: data.email,
        cartItem: data.cartItem?.length || 0,
        cartItemDetail: data.cartItem,
      };

      setAppState({
        ...appState,
        authStatus: !appState.authStatus,
        customer: customer,
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
