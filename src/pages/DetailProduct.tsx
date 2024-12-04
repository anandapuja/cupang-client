import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { useLocation } from "react-router-dom";
import { PRODUCTS_API } from "../utils/Constants";
import { priceParser } from "../utils/priceParser";
import { ADD_TO_CART } from "../utils/Constants";

const DetailProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const { pathname } = useLocation();
  const productName = pathname.split("/");

  const {
    data: product = { data: {} },
    error,
    isLoading,
  } = useSWR(`${PRODUCTS_API}/${productName[2]}`, fetcher);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minQuantity = () => {
    if (quantity - 1 !== -1) setQuantity(quantity - 1);
  };

  if (isLoading) return <>loading ...</>;

  if (error) return <>error ...</>;

  let images: JSX.Element[] = [];

  if (product.data) {
    if (product.data.images.length >= 1) {
      product.data.images.forEach((image: { imageUrl: string }) => {
        const imageUrl: JSX.Element = (
          <img
            className="sm:rounded-lg sm:w-full sm:h-full hover:grayscale transition-all"
            src={image.imageUrl}
            role="presentation"
          />
        );
        images.push(imageUrl);
      });
    } else {
      images.push(
        <img
          className="sm:rounded-lg sm:w-full sm:h-full hover:grayscale transition-all"
          src="https://www.shutterstock.com/shutterstock/photos/2152785549/display_1500/stock-vector-colorful-betta-fish-vector-illustration-siam-fighting-fish-betta-splendens-half-moon-betta-fish-2152785549.jpg"
        />
      );
    }
  }

  return (
    <div className="w-5/6 h-auto m-auto mt-32">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          {product && product.data.name}
        </h3>
      </div>

      <div className="sm:flex-none lg:flex">
        <div className="lg:w-2/5 sm:w-full lg:p-5">
          <AliceCarousel
            mouseTracking={true}
            items={images}
            autoPlay={true}
            animationDuration={1000}
            autoPlayInterval={3000}
            disableButtonsControls={true}
          />
        </div>

        <div className="lg:w-3/5 sm:w-full lg:p-3">
          <p className="text-lime-700">Best price</p>
          <h4 className="text-3xl mb-6">
            IDR {product && priceParser(product.data.price)}
          </h4>
          <span className="text-fuchsia-800 underline">
            {product.data.stock === 0
              ? "out of stock"
              : `in stock : ${product && product.data.stock} fish`}
          </span>
          <div className="mb-5 mt-5">
            <p>{product && product.data.description}</p>
          </div>
          {product.data.stock !== 0 && (
            <>
              <div className={`flex mb-5 gap-2 items-center`}>
                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={minQuantity}
                  className="cursor-pointer"
                />
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="border-2 w-20 p-2 text-center rounded-lg"
                  value={quantity}
                  min={1}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={addQuantity}
                  className="cursor-pointer"
                />
              </div>
              <Button
                buttonText={"Add To Cart"}
                buttonAction={ADD_TO_CART}
                quantity={quantity}
              ></Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
