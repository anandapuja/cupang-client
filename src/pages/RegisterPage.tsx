import { FormEvent, useContext, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN,
  CUSTOMER_API,
  CUSTOMER_ID,
  STATE_TYPE_REGISTER,
  STATUS_201,
} from "../utils/Constants";
import useAuth from "../utils/auth";
import { AuthenticationContext } from "../state/context";

export const loaderRegister = async () => {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    const response = await useAuth();
    if (response.status === 200) {
      return redirect("/");
    }
  }
  return null;
};

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { handleSetAppState } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const registerHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const login = await fetch(`${CUSTOMER_API}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const { data } = await login.json();

      if (login.status === STATUS_201) {
        localStorage.setItem(ACCESS_TOKEN, data.token);
        localStorage.setItem(CUSTOMER_ID, data.customer.id);

        const customerData = {
          authStatus: true,
          customer: {
            username: data.customer.username,
            email: data.customer.email,
            id: data.customer.id,
            cartItem: data.customer.cart?.length,
            cartItemDetail: data.customer.cart,
          },
        };

        handleSetAppState(STATE_TYPE_REGISTER, customerData);
        navigate("/");
      } else {
        console.log(data);
      }
    } catch (error) {}
  };
  return (
    <div className="w-5/6 h-auto m-auto mt-32">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          Register
        </h3>
      </div>

      <p className="text-center mb-16">
        Already Registered? Please{" "}
        <Link to={"/login"}>
          <span className="text-red-400 hover:text-red-700 transition-all">
            Login!
          </span>
        </Link>
      </p>

      <form className="max-w-sm mx-auto" onSubmit={registerHandler}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="name@youremail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="yourusername"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
