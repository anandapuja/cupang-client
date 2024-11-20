import useSWR from "swr";
import CartCard from "../components/CartCard";
import { CART_API, CHECK_OUT } from "../utils/Constants";
import { fetcher } from "../utils/fetcher";
import { priceParser } from "../utils/priceParser";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    data: CartItem = { data: [] },
    error,
    isLoading,
  } = useSWR(`${CART_API}/${localStorage.getItem("customerId")}`, fetcher);

  if (error) return <>Error ...</>;

  if (isLoading) return <>Loading ...</>;

  return (
    <div className="w-5/6 h-auto m-auto">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          {CartItem.data.length >= 1 ? "Cart" : "Cart Empty"}
        </h3>
      </div>

      {CartItem.data.length === 0 && (
        <p className="text-center underline">
          <FontAwesomeIcon icon={faBackspace} className="mr-3" />
          <Link to="/new-arrival">Back to Shop</Link>
        </p>
      )}

      {CartItem.data.length >= 1 && (
        <>
          <div className="w-full border-2 border-gray-800 rounded-lg p-4">
            <CartCard datas={CartItem.data} />
          </div>
          <div className="flex justify-between items-center">
            <h4 className="mt-7 text-2xl">
              Total :{" "}
              <span className="font-bold text-cyan-700">
                {CartItem.data.length >= 1 && priceParser(CartItem?.totalPrice)}
              </span>
            </h4>

            <Button buttonText={"Check Out"} buttonAction={CHECK_OUT} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
