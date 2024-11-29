import { useContext } from "react";
import { ErrorMessageContext } from "../state/context";

const ErrorElement = () => {
  const { errorMessage } = useContext(ErrorMessageContext);
  return (
    <div className="w-5/6 h-auto m-auto">
      {/* <div className="h-28 content-center"> */}
      <p>{errorMessage}</p>
      {/* </div> */}
    </div>
  );
};

export default ErrorElement;
