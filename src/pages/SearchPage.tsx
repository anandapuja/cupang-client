// import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { SEARCH_API } from "../utils/Constants";
import { fetcher } from "../utils/fetcher";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { data: searchProducts = { data: [] } } = useSWR(
    `${SEARCH_API}${location.search}`,
    fetcher
  );

  if (!location.search) {
    navigate("/");
  }

  return (
    <div className="w-5/6 h-auto m-auto mt-32">
      <div className="h-28 content-center text-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          Search for :
        </h3>
      </div>

      <p className="text-gray-500 text-center text-2xl">
        {location.state !== null && location.state.title}
        {location.state == null &&
          location.search.slice(6).split("%20").join(" ")}
      </p>

      <div className="w-full flex flex-wrap">
        <ProductCard datas={searchProducts.data} classValue={"w-1/3"} />
      </div>
    </div>
  );
};

export default Search;
