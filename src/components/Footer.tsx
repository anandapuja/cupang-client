import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-5/6 h-32 m-auto mt-32">
      <ul className="flex gap-5 justify-center mb-3 ">
        <li className="hover:text-red-900">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-red-900">
          <Link to={"/about"}>About Us</Link>
        </li>
        <li className="hover:text-red-900">
          <Link to={"/tos"}>Terms & Conditions</Link>
        </li>
        <li className="hover:text-red-900">
          <Link to={"/contact"}>Contact Us</Link>
        </li>
      </ul>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

      <p className="text-center">
        &copy; 2024 Cupang | Beta Fish Top Market | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
