import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  function searchHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const queryEncode = encodeURI(searchQuery);
    navigate(`/search?name=${queryEncode}`, { state: { title: searchQuery } });
    setSearchQuery("");
  }

  return (
    <div className="w-full p-3">
      <form className="flex gap-3" onSubmit={searchHandler}>
        <input
          type="text"
          className="rounded-lg p-2 w-4/5 text-gray-500 text-xs"
          placeholder="What do you looking for"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="w-1/5 bg-gray-300 hover:bg-gray-400 transition-all rounded-lg text-xs"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
