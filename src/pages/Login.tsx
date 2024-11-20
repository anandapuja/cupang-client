import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CUSTOMER_API, STATUS_200 } from "../utils/Constants";

const Login = () => {
  // const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("customerId")) {
      navigate("/");
    }
  }, []);

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

      const response = await login.json();

      if (login.status === STATUS_200) {
        localStorage.setItem("customerId", response.data.customer.id);
        if (response.data.customer.cart.length >= 1) {
          localStorage.setItem("cartId", response.data.customer.cart[0].id);
        }
        navigate("/");
      } else {
        console.log(response);
      }
    } catch (error) {}
  };

  return (
    <div className="w-5/6 h-auto m-auto">
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
            placeholder="name@flowbite.com"
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
