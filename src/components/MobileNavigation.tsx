import {
  faCartShopping,
  faMagnifyingGlass,
  faRightToBracket,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function RightNavigation() {
  return (
    <div className="sm:w-full flex justify-between sm:bg-sky-800 sm:text-white">
      <div>
        <ul className="flex gap-4 m-auto justify-center items-center sm:h-10 pl-6">
          <li className="hover:text-red-500">
            <Link to={"/new-arrival"}>New Arrival</Link>
          </li>
          <li className="hover:text-red-500 mr-12">
            <Link to={"/best-seller"}>Best Seller</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex gap-4 m-auto justify-center items-center sm:h-10 pr-6">
          <li className="hover:text-red-500 transition-all">
            <Link to={"/register"}>
              <FontAwesomeIcon icon={faRightToBracket} />
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li className="hover:text-red-500 transition-all cursor-pointer">
            <FontAwesomeIcon
              icon={
                localStorage.getItem("mode") === "dark"
                  ? faToggleOn
                  : faToggleOff
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
