"use client";

import Form from "components/Form";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getOneCandidate } from "util/fetch";
import { useRouter } from "next/navigation";
import Profile from "components/Profile";
const page = () => {
  const id = window.location.pathname.split("/").pop();

  // const router = useRouter();

  // console.log("ID = ", router.query);
  // const {id} = router.query

  const { data, isLoading, isSuccess, isError } = useQuery({
    //refetchInterval: ms,
    queryKey: ["candidate", id],
    queryFn: getOneCandidate(id),
  });
  return (
    <div>
      <Profile />
      <div>{JSON.stringify(data)}</div>
      {/* <div>{data.title}</div> */}
      {/* <Form mode="studentVote" /> */}
    </div>
  );
};

export default page;
