"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCandidates } from "util/fetch";
import Link from "next/link";
import { MTCarousel } from "./Carousel";
import CandidateCard from "./CandidateCard";

import localFont from "next/font/local";
import Loading from "./Loading";

const beautifulFont = localFont({ src: "../font/quindelia.regular.ttf" });

const Home = () => {
  const { data, isLoading, isSuccess, error } = useQuery({
    refetchInterval: 60 * 1000 * 30,
    queryKey: ["candidate"],
    queryFn: getAllCandidates,
  });

//   //////////

//   const [supportsPWA, setSupportsPWA] = useState(false);
//   const [promptInstall, setPromptInstall] = useState(null);

//   useEffect(() => {
//     const handler = (e) => {
//       e.preventDefault();
//       setSupportsPWA(true);
//       setPromptInstall(e);
//     };
//     window.addEventListener("beforeinstallprompt", handler);
//   });

//   const onInstallClick = () => {
//     if (!supportsPWA) {
//         alert(
//             'Either you have already installed the app or your browser does not support PWA :('
//         );
//         return;
//     }
//     promptInstall.prompt();
// };

// const renderInstallOption = () => {
//     if (window.matchMedia('(display-mode: standalone)').matches) {
//         return;
//     } else {
//         return (
//             <div id="custom-install-prompt">
//                 <img src="https://example.com/pwa-icon.png" alt="PWA Icon"/>
//                 <h2>Install MyApp</h2>
//                 <p>Get instant access to MyApp from your home screen.</p>
//                 <button onClick={onInstallClick} id="install-btn">Install</button>
//                 <button id="dismiss-btn">Dismiss</button>
//             </div>
//         );
//     }
// };

//   /////////////

  const [images, setImages] = useState([]);

  console.log("Candidate Data - ", data?.data?.candidates);

  useEffect(() => {
    let imgArr = [];
    {
      data &&
        data?.data?.candidates?.forEach((candidate) =>
          candidate.imageUrls.forEach((url) => url !== "" && imgArr.push(url))
        );
    }
    setImages(imgArr);

    console.log("images", images);
  }, [data]);

  return isLoading ? (
    <>
      {/* <div className="text-red-700">Loading</div> */}
      <Loading size="4x" />
    </>
  ) : isSuccess ? (
    <div id="Home" className="w-full max-w-full pt-5  h-full bg-slate-300">
      <Link href="/policy" className="absolute z-50 bottom-14 right-6">
        <p className="w-24 px-2 py-1.5 text-xl text-center rounded-lg font-bold text-teal-700 bg-teal-200 hover:text-white  hover:bg-teal-500">
          Policy
        </p>
      </Link>
      <div id="carousel" className="w-full p-2 ">
        <MTCarousel images={images} />
      </div>
      <div id="Disclaimer">
        <p
          style={beautifulFont.style}
          className="font-bold text-4xl text-center c m-3 mb-1"
        >
          Disclaimer
        </p>
        <p className="font-md text-teal-700 font text-sm rounded-md m-3 ring-1 p-3 ring-teal-500">
          According to the program<span>&apos;</span>s guidelines, it
          <span>&apos;</span>s important to note that once your vote is cast,
          modifications are not allowed. Ensuring the accuracy of your choice
          before finalizing your vote is crucial. Your cooperation in adhering
          to these regulations is greatly valued. Thank you for your
          understanding and commitment to the voting process.{" "}
        </p>
      </div>
      {data?.data?.result && (
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
      )}{" "}
      {data?.data?.vote && (
        <div id="result" className="w-full m-5">
          <div
            style={beautifulFont.style}
            className=" font-bold text-3xl text-green-500 text-center animate-ping"
          >
            Voting is open
          </div>
          <div
            style={beautifulFont.style}
            className=" font-bold text-3xl text-green-600 text-center -m-6 mb-5"
          >
            Voting is open
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
          data?.data?.candidates?.map((c) => (
            <CandidateCard
              key={c.KPTMYK}
              name={c.name}
              KPTMYK={c.KPTMYK}
              section={c.section}
              profilePic={c.profilePic}
            />
          ))}
      </div>
      <hr className="h-0.5 my-20 bg-teal-500" />
      <div id="ThanksAndMention" className=" w-full pb-10  mb-[-160px]">
        <p
          style={beautifulFont.style}
          className="font-bold text-4xl text-center c  m-3 mb-1"
        >
          Thanks
        </p>
        <p className="font-md  font text-sm rounded-md m-3 ring-1 p-3 text-teal-500 ring-teal-500">
          I want to express my sincere gratitude to the dedicated team of data
          entry specialists and testers who played a crucial role in making in
          this event happen. Additionally, a special thanks to our senior who
          negotiated for requirements and simpilfying easy access of data.
        </p>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Home;
