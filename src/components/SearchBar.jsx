import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="relative w-full rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#3f5678]/50">
      <CiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-lg text-mainText/90" />

      <input
        className="px-12 w-full py-3 rounded-[20px] outline-0 placeholder:text-base text-base text-mainText/80"
        type="text"
        placeholder="Search"
      />

      <BsThreeDotsVertical className="absolute top-1/2 -translate-y-1/2 right-4 text-base text-mainText/90 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
