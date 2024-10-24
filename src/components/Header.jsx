import { useState } from "react";
import TeamLogo from "../assets/IMG_5988-removebg.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="sticky top-0 flex shadow-md py-2 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[60px] tracking-wide z-50">
      <div className="flex flex-wrap items-center w-full gap-5">
        <a href="javascript:void(0)">
          <img src={TeamLogo} alt="logo" className="w-20 max-lg:mr-5" />
        </a>

        <div
          id="collapseMenu"
          className={`lg:!flex lg:ml-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <button
            id="toggleClose"
            onClick={handleClick}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex gap-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="hidden mb-6 max-lg:block">
              <a href="javascript:void(0)">
                <img src={TeamLogo} alt="logo" className="w-24" />
              </a>
            </li>
            <li className="px-3 max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="px-3 max-lg:border-b max-lg:py-3">
              <a
                href="#schedule"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
                onClick={handleClick}
              >
                Schedule
              </a>
            </li>
            <li className="px-3 max-lg:border-b max-lg:py-3">
              <a
                href="#roster"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
                onClick={handleClick}
              >
                Roster
              </a>
            </li>
            <li className="px-3 max-lg:border-b max-lg:py-3">
              <a
                href="mailto:rockgoldwalker@gmail.com"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
                onClick={handleClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-6 max-lg:ml-auto">
          <button id="toggleOpen" onClick={handleClick} className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#333"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
