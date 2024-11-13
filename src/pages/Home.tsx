import HomeSlideShow from "../components/HomeSlideShow";
import ProductCard from "../components/ProductCard";
import { dummyData } from "../constants/dummy";

const Home = () => {
  return (
    <div>
      <HomeSlideShow />
      <div className="sm:w-full lg:w-5/6 h-auto m-auto flex">
        <div className="w-2/3 flex flex-col items-center">
          <div className="sm:h-20 content-center">
            <h3 className="text-center text-cyan-700 sm:text-2xl font-bold">
              New Arrival
            </h3>
          </div>

          <div className="flex flex-wrap">
            <ProductCard datas={dummyData} classValue={"w-1/2"} />
          </div>

          <button
            type="submit"
            className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-blue-800"
          >
            Load More ...
          </button>
        </div>

        <div className="w-1/3 border-l-zinc-100 border-l-2">
          <div className="sm:h-20 content-center">
            <h3 className="text-center text-red-900 sm:text-2xl font-bold">
              Best Seller
            </h3>
          </div>
          <div className="flex flex-wrap">
            <ProductCard datas={dummyData} classValue={"w-full"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
