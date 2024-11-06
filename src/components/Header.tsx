import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faRightToBracket,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  function darkMode() {
    localStorage.getItem("mode") === "dark"
      ? localStorage.setItem("mode", "light")
      : localStorage.setItem("mode", "dark");
  }

  return (
    <div className="w-full h-14 bg-slate-200">
      <div className="w-5/6 h-14 m-auto flex justify-between content-center p-4">
        <div>
          <Link to={"/"}>LOGO</Link>
        </div>
        <ul className="flex gap-4">
          <li className="hover:text-red-500">
            <Link to={"/new-arrival"}>New Arrival</Link>
          </li>
          <li className="hover:text-red-500 mr-12">
            <Link to={"/best-seller"}>Best Seller</Link>
          </li>
          <li className="hover:text-red-500 transition-all">
            <Link to={"/cart"}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </li>
          <li className="hover:text-red-500 transition-all">
            <Link to={"/register"}>
              <FontAwesomeIcon icon={faRightToBracket} />
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li
            onClick={darkMode}
            className="hover:text-red-500 transition-all cursor-pointer"
          >
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
};

export default Header;
