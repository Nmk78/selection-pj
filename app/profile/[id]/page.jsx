"use client";

import Form from "components/Form";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getOneCandidate } from "util/fetch";
import { useRouter } from "next/navigation";
import Profile from "components/Profile";
const page = () => {
  const id = window.location.pathname.split("/").pop();
console.log(id);
  // const router = useRouter();

  // console.log("ID = ", router.query);
  // const {id} = router.query


  return (
    <div>
      <Profile id={id} />
    </div>
  );
};

export default page;
