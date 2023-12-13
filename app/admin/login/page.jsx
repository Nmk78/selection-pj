"use client"
import Form from "components/Form";
import React from "react";
import { loginAsAdmin } from "util/fetch";

const page = () => {


  return (
    <div className="h-full w-full mt-44">
      <p className="text-xl c font-bold text-center ">Login</p>
      <Form mode="login" handler={loginAsAdmin} />
      <div className="text-sm c  text-center">Doesn't has admin account? <a href="/admin/register" className="underline">Register</a></div>

    </div>
  );
};

export default page;
