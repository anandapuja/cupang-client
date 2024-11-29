import useSWR from "swr";
import ProductCard from "../components/ProductCard";
import { GET_BEST_SELLER_PRODUCTS } from "../utils/Constants";
import { fetcher } from "../utils/fetcher";

const BestSellerPage = () => {
  const { data, error, isLoading } = useSWR(GET_BEST_SELLER_PRODUCTS, fetcher);

  if (error) {
    return <>Error</>;
  }

  if (isLoading) {
    return <>Is Loading ...</>;
  }

  return (
    <div className="sm:w-full lg:w-5/6 h-auto m-auto">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          Best Seller
        </h3>
      </div>
      <div className="w-full flex flex-wrap">
        <ProductCard datas={data.data} classValue={"w-1/3"} />
      </div>
    </div>
  );
};

export default BestSellerPage;
