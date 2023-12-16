"use client"

import Link from "next/link";
import React from "react";

const Nav = () => {
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : null;
  const id = typeof window !== "undefined" ? window.localStorage.getItem("adminId") : null;

  return (
    <div
      id="Nav"
      className="bg-gray-100 w-full h-20 shadow-lg shadow-teal-300 flex flex-row p-2 justify-between sticky top-0 z-50 "
    >
      <Link href="/">
        {" "}
        <div id="logo" className="w-16 h-16 rounded-full">
          <img src="https://www.ucsmyeik.edu.mm/storage/2018/10/cu-logo-e1540871541143.png" alt="Logo" />
        </div>
      </Link>
      <div className="h-full flex items-center ">
        <Link href="/">
          {" "}
          <p className="px-2 py-1.5 text-xl text-center font-bold c hover:border-b-2 hover:border-teal-500">
            Home
          </p>
        </Link>

        {token ? (
          <Link href={`/admin/${id}`}>
            <p className="px-2 py-1.5 text-xl text-center font-bold c hover:border-b-2 hover:border-teal-500">
              Admin
            </p>{" "}
          </Link>
        ) : (
          <Link href="/user">
            <p className="px-2 py-1.5 text-xl text-center font-bold c hover:border-b-2 hover:border-teal-500">
              Check
            </p>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
