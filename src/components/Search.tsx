import { IconSearch } from "@tabler/icons-react";

const Search = () => {
  return (
    <section className="flex flex-col font-sans items-center mx-16 mt-10 md:mt-20">
      <h1 className="text-white text-center text-5xl sm:text-6xl font-bold">
        Explore the different movies...
      </h1>
      <div className="flex w-full sm:w-2/3 mt-12 text-white bg-black rounded-2xl border-2 border-slate-700">
        <IconSearch stroke={2} size={30} className="ml-2 my-auto" />
        <input
          type="text"
          className="w-full text-lg py-2 px-2  focus:outline-none bg-black"
        />

        <button className=" bg-[#63e] hover:bg-violet-500 duration-300 px-2 sm:px-6 rounded-xl m-0.5">
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
