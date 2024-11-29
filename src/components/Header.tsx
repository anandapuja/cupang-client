import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthenticationContext } from "../state/context";

const Header = () => {
  const { appState } = useContext(AuthenticationContext);

  return (
    <div className="w-full bg-slate-200 ">
      <div className="h-20 m-auto flex justify-between content-center items-center">
        <div className="flex ml-6 items-center">
          <Link to={"/"}>
            <img
              src="https://res.cloudinary.com/dl2ibyua4/image/upload/fl_preserve_transparency/v1732921515/logo-cupang_d4yhc2.jpg"
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
            <span>{appState.customer?.cartItem}</span>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="sm:mr-3 hover:text-sky-800 transition-all"
            />
          </Link>
          <FontAwesomeIcon icon={faLightbulb} />
          <span>
            {appState.customer?.username &&
              `Hallo ${appState.customer?.username}`}
          </span>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
