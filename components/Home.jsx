"use client";

import React, { useState } from "react";
import Form from "./Form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getAllCandidates } from "util/fetch";
import Link from "next/link";
import { MTCarousel } from "./Carousel";
import CandidateCard from "./CandidateCard";

import localFont from "next/font/local";

const beautifulFont = localFont({ src: "../font/quindelia.regular.ttf" });

const Home = () => {
  const [resultOpen, setResultOpen] = useState(true);
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["candidate"],
    queryFn: getAllCandidates,
  });

  console.log("Candidate Data - ", data);

  return isLoading ? (
    <>
      <div className="text-red-700">Loading</div>
    </>
  ) : isSuccess ? (
    <div id="Home" className="w-full max-w-full pt-5  h-full bg-slate-300">
      <div id="carousel" className="w-full p-2 ">
        <MTCarousel />
      </div>

      <div id="Disclaimer">
        <p
          style={beautifulFont.style}
          className="font-bold text-4xl text-center c m-3 mb-1"
        >
          Disclaimer
        </p>
        <p className="font-md text-teal-700 font text-sm rounded-md m-3 ring-1 p-3 ring-teal-500">
          According to the program's guidelines, it's important to note that
          once your vote is cast, modifications are not allowed. Ensuring the
          accuracy of your choice before finalizing your vote is crucial. Your
          cooperation in adhering to these regulations is greatly valued. Thank
          you for your understanding and commitment to the voting process.{" "}
        </p>
      </div>

      {resultOpen && (
        <div id="result" className="w-full m-5">
          <div
            style={beautifulFont.style}
            className=" font-bold text-2xl c text-center animate-ping"
          >
            <Link href="/results">Check Results</Link>
          </div>
          <div
            style={beautifulFont.style}
            className=" font-bold text-2xl c text-center -m-6 mb-5"
          >
            <Link href="/results">Check Results</Link>
          </div>
        </div>
      )}

      <div id="profiles">
        <div
          style={beautifulFont.style}
          className="text-2xl font-bold text-center c my-5"
        >
          Choose your King and Queen
        </div>

        {data &&
          data.map((c) => (
            <CandidateCard
              key={c.KPTMYK}
              profilePic=""
              name={c.name}
              KPTMYK={c.KPTMYK}
              section={c.section}
            />
          ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Home;
