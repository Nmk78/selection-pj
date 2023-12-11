"use client"
import Form from "components/Form";
import React from "react";
import { useQuery } from "react-query";
const page = () => {

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["adminLogin"],
    queryFn: ()=>loginAsAdmin(KPTMYK, Password),
  });

  return (
    <div className="h-full w-full mt-44">
      <p className="text-xl c font-bold text-center ">Login</p>
      <Form mode="login" />
      <p className="text-sm c  text-center">Doesn't has admin account? <a href="/admin/register" className="underline">Register</a></p>

    </div>
  );
};

export default page;
