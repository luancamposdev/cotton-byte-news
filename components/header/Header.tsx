import React from "react";
import { SearchInput } from "@/components/header/search-input";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <nav className="bg-background/80 supports-[backdrop-filter]:bg-background/60 fixed top-0 right-0 left-0 z-50 flex items-center justify-between p-6 shadow-lg backdrop-blur lg:px-20">
      {" "}
      <span className="logo text-2xl font-bold">
        Cotton<span className="text-green-500">Byte</span>News
      </span>
      <SearchInput />
      <a
        href="https://github.com/luancamposdev"
        target={`_blank`}
        className="text-mm hidden items-center gap-2 font-bold text-gray-100 xl:flex"
      >
        <FaGithub />
        Luan Campos
      </a>
    </nav>
  );
};
