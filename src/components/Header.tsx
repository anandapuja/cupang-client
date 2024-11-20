import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="w-full bg-slate-200 ">
      <div className="h-20 m-auto flex justify-between content-center items-center">
        <div className="flex ml-6 items-center">
          <Link to={"/"}>
            <img
              src="../../public/logo-cupang.png"
              className="w-14 h-14 sm:mr-2 hover:grayscale transition-all"
            />
          </Link>
          <Link to={"/"}>
            <span className="sm:text-3xl font-bold text-sky-800">Cupang </span>
            <span className="text-red-900">| Beta Fish Top Market</span>
          </Link>
        </div>

        <div className="mr-6">
          <Link to={"/cart"}>
            <span>0</span>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="sm:mr-3 hover:text-sky-800 transition-all"
            />
          </Link>
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
