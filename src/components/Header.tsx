import {
  IconBrandGithub,
  IconMovie,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="w-full flex justify-between px-16 py-4 mx-auto ">
      <button className="px-3 py-2 text-md font-bold text-white uppercase bg-[#c44900] rounded">
        <a href="" className="flex flex-row items-center">
          <IconMovie size={27} />
          MovieApi
        </a>
      </button>

      <nav className="flex flex-wrap items-center gap-2 justify-end pl-6 ml-6 border-l text-white border-gray-200 ">
        <a
          href="#_"
          className="transition-transform duration-500 hover:scale-125 "
        >
          <IconBrandGithub size={30} />
        </a>
        <a
          href="#_"
          className="transition-transform duration-500 hover:scale-125 "
        >
          <IconBrandInstagram size={30} />
        </a>
        <a
          href="#_"
          className="transition-transform duration-500 hover:scale-125 "
        >
          <IconBrandLinkedin size={30} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
