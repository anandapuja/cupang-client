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
    <div className="w-full h-20 bg-slate-200">
      <div className="w-5/6 h-20 m-auto flex justify-between content-center items-center">
        <div className="flex gap-4">
          <Link to={"/"}>
            <img
              src="../../public/logo-cupang.png"
              className="w-14 h-14 mr-3 hover:grayscale transition-all"
            />
          </Link>
          <Link to={"/"}>
            <span className="text-5xl font-bold text-sky-800">Cupang </span>
            <span className="text-red-900">| Beta Fish Top Market</span>
          </Link>
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
