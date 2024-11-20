import App from "./App";
import { createBrowserRouter } from "react-router-dom";

import {
  Home,
  About,
  Contact,
  NewArrival,
  BestSeller,
  Cart,
  DetailProduct,
  Login,
  Register,
  CheckOut,
  ErrorPage,
  Search,
} from "./pages/index";

export const routes = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />, errorElement: <ErrorPage /> },
      { path: "/about", element: <About />, errorElement: <ErrorPage /> },
      { path: "/contact", element: <Contact />, errorElement: <ErrorPage /> },
      {
        path: "/new-arrival",
        element: <NewArrival />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/best-seller",
        element: <BestSeller />,
        errorElement: <ErrorPage />,
      },
      { path: "/cart", element: <Cart />, errorElement: <ErrorPage /> },
      {
        path: "/product/:name",
        element: <DetailProduct />,
        errorElement: <ErrorPage />,
      },
      { path: "/register", element: <Register />, errorElement: <ErrorPage /> },
      { path: "/login", element: <Login />, errorElement: <ErrorPage /> },
      { path: "/search", element: <Search />, errorElement: <ErrorPage /> },
      {
        path: "/check-out",
        element: <CheckOut />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
