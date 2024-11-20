import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Fish, NewArrival } from "../utils/Type";
import { priceParser } from "../utils/priceParser";
import { createCartFetcher } from "../utils/fetcher";
import { CART_API } from "../utils/Constants";

const ProductCard = ({
  datas,
  classValue,
}: {
  datas: NewArrival;
  classValue: string;
}) => {
  async function addToCartHandler(slug: string): Promise<void> {
    const data = {
      slug: slug,
      quantity: 1,
      customerId: localStorage.getItem("customerId") || "",
    };
    const cartResponse = await createCartFetcher(CART_API, data);
    localStorage.setItem("cartId", cartResponse.data.id);
  }

  return (
    <>
      {datas.map((fish: Fish) => (
        <div
          className={`${classValue} sm:p-4 hover:shadow-xl transition-all sm:rounded-xl`}
          key={fish.id}
        >
          <Link to={`/product/${fish.slug}`}>
            <img
              src={fish.image}
              className="sm:mb-7 w-full grayscale hover:grayscale-0 transition-all cursor-pointer sm:rounded-xl"
            />
          </Link>
          <div className="flex justify-between">
            <div>
              <h3 className="sm:text-xl font-bold text-sky-600 hover:text-red-400 transition">
                <Link to={`/product/${fish.slug}`}>{fish.name}</Link>
              </h3>
              <p>IDR {priceParser(fish.price)}</p>
              <span
                className={
                  fish.stock > 0
                    ? `text-cyan-600 sm:text-xs`
                    : `text-rose-600 sm:text-xs`
                }
              >
                {fish.stock > 0 ? `Ready Stock` : `Out of Stock`}
              </span>
            </div>
            {/* <div> */}
            {fish.stock > 0 && (
              <div
                onClick={() => addToCartHandler(fish.slug)}
                className="flex flex-col hover:text-cyan-800 cursor-pointer transition-all justify-center hover:bg-slate-200 p-2 rounded"
              >
                <span className="text-xs mb-2">Add To Cart</span>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            )}
            {/* </div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
