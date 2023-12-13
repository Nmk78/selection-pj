"use client";

import React, { useState } from "react";
import Form from "./Form";
import { check } from "util/fetch";

// import dynamic from 'next/dynamic'
// const Form = dynamic(() => import('../components/no-ssr'), { ssr: false })

const User = () => {

  // const [name, setName] = useState("")
  // const [KPTMYK, setKPTMYK] = useState("")
  // const [secret, setSecret] = useState("")

  let valid = false;
  const condition = valid
    ? "ring-teal-500 text-teal-500"
    : "ring-red-500 text-red-500";

  return (
    <div>
      <div
        id="result"
        className="mx-auto mt-12 mb-5 w-60 h-40 "
      >

      </div>
      {/* <form
        // onSubmit={formHandler}
        className="max-w-md w-5/6 mx-auto px-6 py-6 bg-gray-200"
        method="post"
      >
          {" "}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="decimal"
              name="KPTMYK"
              id="KPTMYK"
              onChange={(e) => {
                setKPTMYK(e.target.value);
              }}
              className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              required
              value={KPTMYK}
            />
            <label
              htmlFor="KPTMYK"
              className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              KPTMYK
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="decimal"
              name="secret"
              id="secret"
              value={secret}
              onChange={(e) => {
                setSecret(e.target.value);
              }}
              className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="secret"
              className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Secret
            </label>
          </div>
        <button
          type="submit"
          className="text-white bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form> */}
      <Form mode="check" handler={check} suppressHydrationWarning="true" />
    </div>
  );
};

export default User;
