import {
  IconBrandGithub,
  IconMovie,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="w-full flex justify-between px-16 py-4 mx-auto ">
      <button className="h-12 px-3 py-2 text-md font-bold text-white uppercase bg-[#63e] rounded">
        <p className="flex flex-row items-center">
          <IconMovie size={27} />
          MovieApi
        </p>
      </button>

      <nav className="flex flex-wrap items-center gap-2 justify-end pl-6 ml-6 border-l text-white border-gray-200 ">
        <a href="www.norly96.com">
          <img
            src="/src/assets/blanco.png"
            alt=""
            className="w-6 transition-transform duration-500 hover:scale-125 "
          />
        </a>
        <a
          href="https://github.com/norly96"
          className="transition-transform duration-500 hover:scale-125 "
        >
          <IconBrandGithub size={30} />
        </a>

        <a
          href="https://www.linkedin.com/in/norly96/"
          className="transition-transform duration-500 hover:scale-125 "
        >
          <IconBrandLinkedin size={30} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
