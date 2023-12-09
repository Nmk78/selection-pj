"use client";
import { useQuery } from "@tanstack/react-query";
import Form from "components/Form";
import User from "components/User";
import React from "react";
// import { useQuery } from 'react-query';
import { getOneUser } from "util/fetch";

const page = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    //refetchInterval: ms,
    queryKey: ["user"],
    queryFn: getOneUser,
  });
  return (
    <>
      <User />
    </>
  );
};

export default page;
