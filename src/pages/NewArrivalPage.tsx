import useSWR from "swr";
import ProductCard from "../components/ProductCard";
import { GET_NEW_ARRIVAL_PRODUCTS } from "../utils/Constants";
import { fetcher } from "../utils/fetcher";

const NewArrival = () => {
  const { data, error, isLoading } = useSWR(GET_NEW_ARRIVAL_PRODUCTS, fetcher);

  if (isLoading) {
    return <>Is Loading ...</>;
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <div className="sm:w-full lg:w-5/6 h-auto m-auto mt-32">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          New Arrival
        </h3>
      </div>
      <div className="w-full flex flex-wrap">
        <ProductCard datas={data.data} classValue={"w-1/3"} />
      </div>
    </div>
  );
};

export default NewArrival;
