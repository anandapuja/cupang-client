import useSWR from "swr";
import Button from "../components/Button";
import HomeSlideShow from "../components/HomeSlideShow";
import ProductCard from "../components/ProductCard";
import { LOAD_MORE, PRODUCTS_API } from "../utils/Constants";
import { fetcher } from "../utils/fetcher";

const Home = () => {
  const { data: newArrival = { data: [] } } = useSWR(
    `${PRODUCTS_API}/new-arrival`,
    fetcher
  );

  const { data: bestSeller = { data: [] } } = useSWR(
    `${PRODUCTS_API}/best-seller`,
    fetcher
  );

  // if (error) return <>Error ...</>;

  // if (isLoading) return <>Error ...</>;

  return (
    <div>
      <HomeSlideShow />
      <div className="sm:w-full lg:w-5/6 h-auto m-auto flex">
        <div className="w-2/3 flex flex-col items-center">
          <div className="sm:h-28 content-center">
            <h3 className="text-center text-cyan-700 sm:text-5xl font-bold">
              New Arrival
            </h3>
          </div>

          <div className="flex flex-wrap">
            <ProductCard datas={newArrival.data} classValue={"w-1/2"} />
          </div>

          <Button buttonText="Load more" buttonAction={LOAD_MORE} />
        </div>

        <div className="w-1/3 border-l-zinc-100 border-l-2">
          <div className="sm:h-28 content-center">
            <h3 className="text-center text-red-900 sm:text-5xl font-bold">
              Best Seller
            </h3>
          </div>
          <div className="flex flex-wrap">
            <ProductCard datas={bestSeller.data} classValue={"w-full"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
