'use client'
import { useQuery } from "@tanstack/react-query";
import AdminProfile from "components/AdminProfile";
import React from "react";
import { getPreResult } from "util/fetch";

const page = () => {

  return (
    <>
      <AdminProfile />
    </>
  );
};

export default page;
