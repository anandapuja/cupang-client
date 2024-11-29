import App, { loaderApp } from "./App";
import { createBrowserRouter } from "react-router-dom";

import {
  Home,
  AboutPage,
  Contact,
  NewArrival,
  BestSellerPage,
  CartPage,
  DetailProduct,
  Login,
  Register,
  CheckOut,
  ErrorPage,
  Search,
  UploadProductPage,
} from "./pages/index";
import { cartLoader } from "./pages/CartPage";
import { loaderLogin } from "./pages/Login";
import { loaderRegister } from "./pages/RegisterPage";

export const routes = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: App,
    loader: loaderApp,
    children: [
      { path: "/", Component: Home, errorElement: <ErrorPage /> },
      { path: "/about", Component: AboutPage, errorElement: <ErrorPage /> },
      { path: "/contact", Component: Contact, errorElement: <ErrorPage /> },
      {
        path: "/new-arrival",
        Component: NewArrival,
      },
      {
        path: "/best-seller",
        Component: BestSellerPage,
      },
      {
        path: "/cart",
        element: <CartPage />,
        loader: cartLoader,
      },
      {
        path: "/product/upload",
        Component: UploadProductPage,
      },
      {
        path: "/product/:name",
        Component: DetailProduct,
      },
      {
        path: "/register",
        Component: Register,
        errorElement: <ErrorPage />,
        loader: loaderRegister,
      },
      {
        path: "/login",
        Component: Login,
        errorElement: <ErrorPage />,
        loader: loaderLogin,
      },
      {
        path: "/search",
        Component: Search,
        errorElement: <ErrorPage />,
      },
      {
        path: "/check-out",
        Component: CheckOut,
      },
    ],
  },
]);
