import React from "react";
import { SearchIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex h-20 items-center justify-between px-12 shadow-md">
      <h1 className="text-center text-xl font-bold">
        Cotton <span className="text-green-500">Byte</span> News
      </h1>
      <div className="flex w-md space-x-3 rounded bg-slate-900/30 p-2 px-3">
        <SearchIcon className="text-gray-300/75" width={18} />
        <input
          placeholder="Search..."
          className="text-gra/75 hidden text-sm md:flex md:w-full"
        />
      </div>
      <div></div>
    </div>
  );
};
