import { useLocation, useNavigate } from "react-router-dom";
import {
  ADD_TO_CART,
  CART_API,
  CART_ID,
  CHECK_OUT,
  CUSTOMER_ID,
  STATE_TYPE_CHECKOUT,
} from "../utils/Constants";
import { checkOutCartFetcher, createCartFetcher } from "../utils/fetcher";
import { useContext } from "react";
import { AuthenticationContext } from "../state/context";

const Button = ({
  buttonText,
  buttonAction,
  quantity,
}: {
  buttonText: string;
  buttonAction: string;
  quantity?: number;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { appState, handleSetAppState } = useContext(AuthenticationContext);

  const actionHandler = async () => {
    if (buttonAction === CHECK_OUT) {
      await checkOutCartFetcher(
        `${CART_API}/check-out/${localStorage.getItem(CART_ID)}`
      );
      localStorage.removeItem(CART_ID);
      handleSetAppState(STATE_TYPE_CHECKOUT);
      navigate("/check-out", { state: { success: true } });
    }

    if (buttonAction === ADD_TO_CART) {
      if (appState.authStatus) {
        if (Number(quantity) >= 1) {
          const slug = location.pathname.split("/")[2];
          console.log(slug);
          const data = {
            slug: slug,
            quantity: Number(quantity),
            customerId: String(localStorage.getItem(CUSTOMER_ID)),
          };
          const cartResponse = await createCartFetcher(CART_API, data);
          localStorage.setItem(CART_ID, cartResponse.data.id);
        }
      } else {
        navigate("/login");
      }
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
