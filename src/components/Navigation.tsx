import {
  faFire,
  faMagnifyingGlass,
  faRightToBracket,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";
import { AuthenticationContext } from "../state/context";
import { STATE_TYPE_LOGOUT } from "../utils/Constants";

const Navigation = () => {
  const { appState, handleSetAppState } = useContext(AuthenticationContext);
  const [searchStatus, setSearchStatus] = useState(false);

  function searchStatusHandler() {
    setSearchStatus(!searchStatus);
  }

  function signOutHandler() {
    const authData = {
      authStatus: false,
      customer: undefined,
    };
    handleSetAppState(STATE_TYPE_LOGOUT, authData);
    localStorage.clear();
  }

  return (
    <>
      <div className="sm:w-full flex justify-between sm:bg-sky-800 sm:text-white">
        <div>
          <ul className="flex gap-4 m-auto justify-center items-center sm:h-10 pl-6">
            <li className="hover:text-yellow-500 transition-all font-bold">
              <NavLink
                to={"/new-arrival"}
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "text-yellow-500" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                <FontAwesomeIcon icon={faFire} className="mr-3" />
                New Arrival
              </NavLink>
            </li>
            <li className="hover:text-yellow-500 mr-12 transition-all font-bold">
              <NavLink
                to={"/best-seller"}
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "text-yellow-500" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                <FontAwesomeIcon icon={faThumbsUp} className="mr-3" />
                Best Seller
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex gap-4 m-auto justify-center items-center sm:h-10 pr-6">
            <li className="hover:text-yellow-500 font-bold transition-all cursor-pointer">
              {!appState.authStatus ? (
                <Link to={"/login"}>
                  <FontAwesomeIcon icon={faRightToBracket} /> Sign In
                </Link>
              ) : (
                <div onClick={signOutHandler}>
                  <FontAwesomeIcon icon={faRightToBracket} /> Sign Out
                </div>
              )}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={searchStatusHandler}
                className="hover:text-yellow-500 transition-all cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </div>

      {searchStatus && <SearchForm />}
    </>
  );
};

export default Navigation;
