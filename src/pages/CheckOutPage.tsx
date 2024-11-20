import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-5/6 h-auto m-auto">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          Thank you for Your Purchase
        </h3>
      </div>

      <p className="text-center underline">
        <FontAwesomeIcon icon={faBackspace} className="mr-3" />
        <Link to="/new-arrival">Let's pick up new Cupang</Link>
      </p>
    </div>
  );
};

export default CheckOut;
