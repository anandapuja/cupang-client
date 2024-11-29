import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthenticationContext } from "../state/context";

const Protected = () => {
  //   const token = localStorage.getItem("access-token");

  const Auth = useContext(AuthenticationContext);

  //   console.log(Auth.authStatus);

  return Auth ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
