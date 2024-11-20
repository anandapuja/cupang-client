import {
  faFire,
  faMagnifyingGlass,
  faRightToBracket,
  faThumbsUp,
  // faToggleOff,
  // faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";

const Navigation = () => {
  const [searchStatus, setSearchStatus] = useState(false);
  // const [isSignIn, setIsSignIn] = useState(false);

  // const navigate = useNavigate();

  function searchStatusHandler() {
    setSearchStatus(!searchStatus);
  }

  // function signInsignOutHandler() {
  //   if (localStorage.getItem("customerId")) {
  //     localStorage.removeItem("customerId");
  //     setIsSignIn(!isSignIn);
  //   } else {
  //     // setIsSignIn(!isSignIn);
  //     navigate("/login");
  //   }
  // }

  return (
    <>
      <div className="sm:w-full flex justify-between sm:bg-sky-800 sm:text-white">
        <div>
          <ul className="flex gap-4 m-auto justify-center items-center sm:h-10 pl-6">
            <li className="hover:text-red-500 transition-all">
              <Link to={"/new-arrival"}>
                <FontAwesomeIcon icon={faFire} className="mr-3" />
                New Arrival
              </Link>
            </li>
            <li className="hover:text-red-500 mr-12 transition-all">
              <Link to={"/best-seller"}>
                <FontAwesomeIcon icon={faThumbsUp} className="mr-3" />
                Best Seller
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex gap-4 m-auto justify-center items-center sm:h-10 pr-6">
            <li
              className="hover:text-red-500 transition-all cursor-pointer"
              // onClick={signInsignOutHandler}
            >
              <Link to={"/login"}>
                <FontAwesomeIcon icon={faRightToBracket} /> Sign In
                {/* {"Sign in"} */}
                {/* {isSignIn ? "Sign Out" : "Sign In"} */}
              </Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={searchStatusHandler}
                className="hover:text-red-500 transition-all cursor-pointer"
              />
            </li>
            {/* <li className="hover:text-red-500 transition-all cursor-pointer">
              <FontAwesomeIcon
                icon={
                  localStorage.getItem("customerId") === "dark"
                    ? faToggleOn
                    : faToggleOff
                }
              />
            </li> */}
          </ul>
        </div>
      </div>

      {searchStatus && <SearchForm />}
    </>
  );
};

export default Navigation;
