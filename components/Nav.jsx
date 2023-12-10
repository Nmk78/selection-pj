import Link from "next/link";
import React from "react";

const Nav = () => {
  

  return (
    <div
      id="Nav"
      className="bg-gray-100 w-full h-20 shadow-lg shadow-teal-300 flex flex-row p-2 justify-between sticky top-0 z-50 "
    >
      <Link href="/">
        {" "}
        <div id="logo" className="w-16 h-16 rounded-full bg-teal-500"></div>
      </Link>
      <div className="h-full flex items-center ">
        <Link href="/">
          {" "}
          <p className="px-2 py-1.5 text-xl text-center font-bold c hover:border-b-2 hover:border-teal-500">
            Home
          </p>
        </Link>
        <Link href="/user">
          <p className="px-2 py-1.5 text-xl text-center font-bold c hover:border-b-2 hover:border-teal-500">
            Check
          </p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
