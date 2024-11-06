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
} from "./pages/index";

export const routes = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/new-arrival", element: <NewArrival /> },
      { path: "/best-seller", element: <BestSeller /> },
      { path: "/cart", element: <Cart /> },
      { path: "/product/:name", element: <DetailProduct /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
