import { useNavigate } from "react-router-dom";
import { CART_API, CHECK_OUT } from "../utils/Constants";
import { checkOutCartFetcher } from "../utils/fetcher";

const Button = ({
  buttonText,
  buttonAction,
}: {
  buttonText: string;
  buttonAction: string;
}) => {
  const navigate = useNavigate();
  const actionHandler = async () => {
    if (buttonAction === CHECK_OUT) {
      const response = await checkOutCartFetcher(
        `${CART_API}/check-out/${localStorage.getItem("cartId")}`
      );
      localStorage.removeItem("cartId");
      navigate("/check-out", { state: { success: true } });
    }
  };

  return (
    <button
      onClick={actionHandler}
      type="submit"
      className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-blue-800 mt-6"
    >
      {buttonText}
    </button>
  );
};

export default Button;
