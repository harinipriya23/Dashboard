import React from "react";
import { useState, useEffect } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  function handleSwitchTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <header
      className=" fixed top-0 left-0 z-10 flex w-full items-center justify-evenly sm:justify-between h-12 px-4 py-2
    bg-gray-200 border-gray-400 text-gray-900 dark:bg-themeDark-senary dark:text-themeDark-primary border-b-2 dark:border-themeDark-quaternary
     "
    >
      <div className="flex items-center gap-4">
        <span
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-themeLight-tertiary p-0.5 rounded-md cursor-pointer
          dark:bg-themeDark-quinary bg-gray-300"
        >
          {isMenuOpen ? (
            <MdKeyboardDoubleArrowLeft size={20} />
          ) : (
            <MdKeyboardDoubleArrowRight size={20} />
          )}
        </span>
        <p className="text-[20px] font-semibold mr-3">HealthCare</p>

        <span className="relative">
          <span className="left-2 top-2 absolute ">
            <IoSearch size={15} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className=" dark:bg-themeDark-senary pl-7 text-[14px] rounded-md py-1 outline-none shadow-md"
          />
        </span>
      </div>
      <div>
        <div onClick={handleSwitchTheme} className="cursor-pointer ">
          {theme === "dark" ? (
            <MdLightMode size={20} />
          ) : (
            <MdDarkMode size={20} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
