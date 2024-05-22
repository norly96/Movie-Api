import { IconSearch } from "@tabler/icons-react";

const Search = () => {
  return (
    <section className="flex flex-col font-sans items-center mx-16 mt-10 md:mt-20">
      <h1 className="text-white text-center text-5xl sm:text-6xl font-bold">
        Explore the different movies...
      </h1>
      <div className="flex w-full sm:w-2/3 mt-12 text-white bg-[#232342] rounded-2xl border-2 border-slate-500">
        <IconSearch stroke={2} size={30} className="ml-2 my-auto" />
        <input
          type="text"
          className="w-full text-lg py-2 px-2  focus:outline-none bg-[#232342]"
        />

        <button className=" bg-[#c44900] px-2 sm:px-6 rounded-xl m-0.5">
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
