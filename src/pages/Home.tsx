import HomeSlideShow from "../components/HomeSlideShow";
import ProductCard from "../components/ProductCard";
import { dummyData } from "../data/dummy";

const Home = () => {
  return (
    <div>
      <HomeSlideShow />
      <div className="w-5/6 h-auto m-auto flex">
        <div className="w-2/3 flex flex-col items-center">
          <div className="h-28 content-center">
            <h3 className="text-center text-cyan-700 text-4xl font-bold">
              New Arrival
            </h3>
          </div>

          <div className="flex flex-wrap">
            <ProductCard datas={dummyData} classValue={"w-1/2"} />
          </div>

          <button className="p-2 w-64 rounded-lg bg-teal-400 hover:bg-teal-500 transition-all mt-12">
            Load More ...
          </button>
        </div>

        <div className="w-1/3 border-l-zinc-100 border-l-2">
          <div className="h-28 content-center">
            <h3 className="text-center text-red-900 text-4xl font-bold">
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
