import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { dummyData } from "../constants/dummy";

const NewArrival = () => {
  const [data, setData] = useState<typeof dummyData>([]);

  useEffect(() => {
    setData(dummyData);
  }, []);
  return (
    <div className="sm:w-full lg:w-5/6 h-auto m-auto">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          New Arrival
        </h3>
      </div>
      <div className="w-full flex flex-wrap">
        <ProductCard datas={data} classValue={"w-1/3"} />
      </div>
    </div>
  );
};

export default NewArrival;
