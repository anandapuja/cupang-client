import ProductCard from "../components/ProductCard";
import { dummyData } from "../data/dummy";

const BestSeller = () => {
  return (
    <div className="w-5/6 h-auto m-auto">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          Best Seller
        </h3>
      </div>
      <div className="w-full flex flex-wrap">
        <ProductCard datas={dummyData} classValue={"w-1/3"} />
      </div>
    </div>
  );
};

export default BestSeller;
