import { IconSearch } from "@tabler/icons-react";
import { MovieAPI, clientAxios } from "../api/axios";
import { Dispatch, SetStateAction, useState } from "react";

interface SearchProps {
  setmovies: Dispatch<SetStateAction<MovieAPI[]>>;
}

const Search = ({ setmovies }: SearchProps) => {
  const [search, setsearch] = useState<string>("");

  const fetchMoviesSearch = async (search: string) => {
    try {
      const response = await clientAxios.get("/search/movie", {
        params: {
          query: search,
        },
      });
      console.log(response.data.results);
      setmovies(response.data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSearch = async (event: any) => {
    event.preventDefault();
    try {
      const data = await fetchMoviesSearch(search);
      console.log(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <section className="flex flex-col font-sans items-center mx-16 mt-10 md:mt-20">
      <h1 className="text-white text-center text-5xl sm:text-6xl font-bold">
        Explore the different movies...
      </h1>
      <div className="flex w-full sm:w-2/3 mt-12 text-white bg-black rounded-2xl border-2 border-slate-700">
        <IconSearch stroke={2} size={30} className="ml-2 my-auto" />
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="w-full text-lg py-2 px-2  focus:outline-none bg-black"
        />

        <button
          type="submit"
          onClick={handleSearch}
          className="bg-[#63e] hover:bg-violet-500 duration-300 px-2 sm:px-6 rounded-xl m-0.5"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
