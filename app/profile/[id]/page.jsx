"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getOneCandidate } from "util/fetch";
import Profile from "components/Profile";
import { useParams } from "next/navigation";

const CandidatePage = () => {
  const id = useParams();
  // console.log(id);

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["candidate", id],
    queryFn: () => getOneCandidate(id),
  });

  console.log("Data-", data?.data);

  if (isLoading) {
    return <div className="text-red-700">Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-700">Error loading candidate details.</div>;
  }
  if (isSuccess) {
    console.log("Success and rendering");
    const { name, KPTMYK, section, height, weight, intro, hobbies, imageUrls } = data?.data[0];
    console.log(name, KPTMYK, section, height, weight, intro, hobbies, imageUrls);
    return <Profile key={KPTMYK} name={name} KPTMYK={KPTMYK} section={section} height={height} weight={weight} intro={intro} hobbies={hobbies} imageUrls={imageUrls} />;
  }
};

export default CandidatePage;
