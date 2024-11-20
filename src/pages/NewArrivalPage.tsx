import useSWR from "swr";
import ProductCard from "../components/ProductCard";
import { PRODUCTS_API } from "../utils/Constants";
import { fetcher } from "../utils/fetcher";

const NewArrival = () => {
  const { data: newArrival = { data: [] } } = useSWR(
    `${PRODUCTS_API}/new-arrival`,
    fetcher
  );

  return (
    <div className="sm:w-full lg:w-5/6 h-auto m-auto">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          New Arrival
        </h3>
      </div>
      <div className="w-full flex flex-wrap">
        <ProductCard datas={newArrival.data} classValue={"w-1/3"} />
      </div>
    </div>
  );
};

export default NewArrival;
