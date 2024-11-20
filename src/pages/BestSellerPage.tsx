import useSWR from "swr";
import ProductCard from "../components/ProductCard";
import { PRODUCTS_API } from "../utils/Constants";
import { fetcher } from "../utils/fetcher";

const BestSeller = () => {
  const { data: bestSeller = { data: [] } } = useSWR(
    `${PRODUCTS_API}/best-seller`,
    fetcher
  );

  return (
    <div className="sm:w-full lg:w-5/6 h-auto m-auto">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          Best Seller
        </h3>
      </div>
      <div className="w-full flex flex-wrap">
        <ProductCard datas={bestSeller.data} classValue={"w-1/3"} />
      </div>
    </div>
  );
};

export default BestSeller;
