import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProductCard = ({
  datas,
  classValue,
}: {
  datas: [
    {
      title: string;
      price: number;
      stock: number;
      productImage: string;
    }
  ];
  classValue: string;
}) => {
  return (
    <>
      {datas.map((fish, i) => (
        <div
          className={`${classValue} p-12 hover:shadow-2xl transition-all rounded-xl`}
          key={i}
        >
          <Link to={"/product/12"}>
            <img
              src={fish.productImage}
              className="mb-7 w-full grayscale hover:grayscale-0 transition-all cursor-pointer rounded-lg"
            />
          </Link>
          <div className="flex justify-between">
            <div>
              <h3 className="text-3xl font-bold text-sky-600 hover:text-red-400 transition">
                <Link to={"/product/12"}>{fish.title}</Link>
              </h3>
              <p>{fish.price}</p>
              <span
                className={fish.stock > 0 ? `text-cyan-600` : `text-rose-600`}
              >
                {fish.stock > 0 ? `Ready Stock` : `Out of Stock`}
              </span>
            </div>
            <div>
              {fish.stock > 0 && (
                <FontAwesomeIcon
                  className="hover:text-red-500 cursor-pointer"
                  icon={faCartShopping}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
