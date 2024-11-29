import useSWR from "swr";
import CartCard from "../components/CartCard";
import { ACCESS_TOKEN, CART_API, CHECK_OUT } from "../utils/Constants";
import { fetcherGetCart } from "../utils/fetcher";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { Link, redirect } from "react-router-dom";
import useAuth from "../utils/auth";

export const cartLoader = async () => {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    const response = await useAuth();
    if (response.status !== 200) {
      return redirect("/login");
    }
  } else {
    return redirect("/login");
  }
  return null;
};

const Cart = () => {
  const { data, isLoading, error } = useSWR(CART_API, fetcherGetCart);

  if (error) {
    return <>Error ...</>;
  }

  if (isLoading) {
    return <>Is Loading ...</>;
  }

  return (
    <div className="w-5/6 h-auto m-auto">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          {data.data.length >= 1 ? "Cart" : "Cart Empty"}
        </h3>
      </div>

      {data.data.length === 0 && (
        <p className="text-center underline">
          <FontAwesomeIcon icon={faBackspace} className="mr-3" />
          <Link to="/new-arrival">Back to Shop</Link>
        </p>
      )}

      {data.data.length >= 1 && (
        <>
          <div className="w-full border-t-2 border-gray-400 p-4">
            <CartCard datas={data.data} />
          </div>
          <div className="flex justify-between items-center">
            <h4 className="mt-7 text-2xl">
              Total :{" "}
              <span className="font-bold text-cyan-700">
                {data.data.length >= 1 &&
                  data?.totalPrice.toLocaleString("id-ID")}
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
