import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CartCard } from "../utils/Type";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { fetchDeleteCartItem } from "../utils/fetcher";
import {
  CART_API,
  CART_ID,
  STATE_TYPE_DELETE_CART_ITEM,
} from "../utils/Constants";
import { useSWRConfig } from "swr/_internal";
import { useContext } from "react";
import { AuthenticationContext } from "../state/context";

const CartCard = ({ datas }: { datas: CartCard }) => {
  const { mutate } = useSWRConfig();
  const { handleSetAppState } = useContext(AuthenticationContext);

  const handleDeleteCartItem = async (id: string) => {
    await fetchDeleteCartItem(
      `${CART_API}/${localStorage.getItem(CART_ID)}`,
      id
    );
    handleSetAppState(STATE_TYPE_DELETE_CART_ITEM, {});
    mutate(CART_API);
  };

  return datas.map((data, index: number) => (
    <div
      className="sm:flex w-full items-center p-4 border-b border-neutral-400"
      key={index}
    >
      <div className="w-1/5">
        <img src={data.image} className="w-1/2 m-auto rounded-lg" />
      </div>
      <div className="w-4/5 sm:flex">
        <div className="w-2/5">
          <h3 className="sm:text-xl font-bold text-sky-600 transition">
            {data.name}
          </h3>
        </div>
        <div className="w-1/5">{data.quantity}</div>
        <div className="w-1/5">{data.price.toLocaleString("id-ID")}</div>
        <div className="w-1/5">{data.total.toLocaleString("id-ID")}</div>
        <div className="" onClick={() => handleDeleteCartItem(data.id)}>
          <FontAwesomeIcon
            icon={faTrash}
            className="hover:text-orange-800 hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  ));
};

export default CartCard;
