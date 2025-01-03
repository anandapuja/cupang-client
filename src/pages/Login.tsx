import { FormEvent, useContext, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN,
  CART_ID,
  CUSTOMER_API,
  CUSTOMER_ID,
  STATE_TYPE_LOGIN,
  STATUS_200,
} from "../utils/Constants";
import { AuthenticationContext } from "../state/context";
import useAuth from "../utils/auth";

export const loaderLogin = async () => {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    const response = await useAuth();
    if (response.status === 200) {
      return redirect("/");
    }
  }
  return null;
};

const Login = () => {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { handleSetAppState } = useContext(AuthenticationContext);

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const login = await fetch(`${CUSTOMER_API}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const { data } = await login.json();

      if (login.status === STATUS_200) {
        localStorage.setItem(CUSTOMER_ID, data.customer.id);
        localStorage.setItem(ACCESS_TOKEN, data.token);
        localStorage.setItem(CART_ID, data.customer.cartId);

        const customerData = {
          authStatus: true,
          customer: {
            username: data.customer.username,
            email: data.customer.email,
            id: data.customer.id,
            cartItem: data.customer.cartItem?.length,
            cartItemDetail: data.customer.cartItem,
          },
        };
        handleSetAppState(STATE_TYPE_LOGIN, customerData);
        navigate("/");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-5/6 h-auto m-auto mt-32">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">Login</h3>
      </div>

      <p className="text-center mb-16">
        Not have an account? Please{" "}
        <Link to={"/register"}>
          <span className="text-red-400 hover:text-red-700 transition-all">
            Register
          </span>
        </Link>
      </p>

      <form className="max-w-sm mx-auto" onSubmit={loginHandler}>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email/ Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="yourname@youremail.com"
            required
            onChange={(e) => setUserName(e.target.value)}
            value={username}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
