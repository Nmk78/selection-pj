'use client'
 
import React from "react";
import Form from "./Form";
import { check } from "util/fetch";

// import dynamic from 'next/dynamic'
// const Form = dynamic(() => import('../components/no-ssr'), { ssr: false })

const User = () => {
  let valid = false;
  const condition = valid
    ? "ring-teal-500 text-teal-500"
    : "ring-red-500 text-red-500";

  return (
    <div>
      <div
        id="result"
        className={`ring-1  mt-12 mb-5 w-60 h-40 flex items-center justify-center rounded-lg mx-auto ${condition}`}
      >
        <div className="text-xl">
          {valid ? "Your Key was valid" : "Your Key was unvalid"}
        </div>
      </div>
      <Form mode="check" handler={check} suppressHydrationWarning="true" />
    </div>
  );
};

export default User;
