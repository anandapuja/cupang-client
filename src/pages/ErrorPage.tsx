import { Link } from "react-router-dom";
import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <div className="w-5/6 h-auto m-auto">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">Error</h3>
      </div>
      <div className="flex content-center">
        <Link to="/">
          <Button buttonText={"Back to Home"} buttonAction={""} />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
