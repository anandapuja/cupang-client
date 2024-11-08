import { Link, redirect } from "react-router-dom";

const Login = () => {
  function loginHandler() {
    return redirect("/new-arrival");
  }
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

      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email/ Username
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
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
          />
        </div>

        <button
          onSubmit={loginHandler}
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
