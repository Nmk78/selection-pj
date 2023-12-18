"use client";
import localFont from "next/font/local";
import React, { useEffect, useState } from "react";
import { MTCarousel } from "./Carousel";
import { getResult } from "util/fetch";
import { useQuery } from "@tanstack/react-query";
import { isError } from "react-query";
import Loading from "./Loading";

const beautifulFont = localFont({ src: "../font/quindelia.regular.ttf" });

const Results = () => {
  const [king, setKing] = useState({});
  const [queen, setQueen] = useState({});
  const [prince, setPrince] = useState({});
  const [princess, setPrincess] = useState({});

  const { data, isLoading, isSuccess, error } = useQuery({
    refetchInterval: 50000,
    queryKey: ["result"],
    queryFn: getResult,
  });

  // console.log(data?.data?.maleResults[1]?.totalVotes);
  useEffect(() => {
    const setter = () => {
      // Male results
      if (
        data?.data?.maleResults[0]?.totalVotes >
        data?.data?.maleResults[1]?.totalVotes
      ) {
        setKing(data.data.maleResults[0]);
        setPrince(data.data.maleResults[1]);
      } else {
        setKing(data.data.maleResults[1]);
        setPrince(data.data.maleResults[0]);
      }

      // Female results
      if (
        data?.data?.femaleResults[0]?.totalVotes >
        data?.data?.femaleResults[1]?.totalVotes
      ) {
        setQueen(data.data.femaleResults[0]);
        setPrincess(data.data.femaleResults[1]);
      } else {
        setQueen(data.data.femaleResults[1]);
        setPrincess(data.data.femaleResults[0]);
      }

      console.log(
        "King",
        king,
        "queen",
        queen,
        "prince",
        prince,
        "princess",
        princess
      );
    };
    if (data) {
      setter();
    }
  }, [data]);

  console.log(
    "King",
    king,
    "queen",
    queen,
    "prince",
    prince,
    "princess",
    princess
  );

  const kingToggler = () => document.getElementById("kingModal").showModal();
  const queenToggler = () => document.getElementById("queenModal").showModal();
  const princeToggler = () =>
    document.getElementById("princeModal").showModal();
  const princessToggler = () =>
    document.getElementById("princessModal").showModal();
  return isLoading ? (
    <>
      {/* <div className="text-red-700">Loading</div> */}
      <Loading size="4x" />
    </>
  ) : isSuccess ? (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* <div style={beautifulFont.style} className="text-2xl c font-bold text-center my-5 mt-10">Result is ready to see.</div>
      <div style={beautifulFont.style} className="text-2xl c font-bold text-center my-4">Check one by one.</div> */}
      <div id="KingAndQueen" className="w-full my-4">
        <div
          style={beautifulFont.style}
          className="text-2xl c font-bold text-center my-5 md:text-5xl md:my-10"
        >
          <span className=" text-teal-500">King</span> &{" "}
          <span className="text-pink-500">Queen</span>
        </div>

        <div id="buttons" className="w-full flex items-center justify-around">
          <button
            className="btn w-1/3 bg-teal-500 text-white ring-0 border-0 hover:bg-teal-400 md:h-40"
            onClick={kingToggler}
          >
            King
          </button>
          <button
            className="btn w-1/3 bg-pink-500 text-white ring-0 border-0 hover:bg-pink-400 md:h-40"
            onClick={queenToggler}
          >
            Queen
          </button>
        </div>
      </div>{" "}
      <div id="PrinceAndPrincess" className="w-full">
        <div
          style={beautifulFont.style}
          className="text-2xl c font-bold text-center my-5 md:text-5xl md:my-10"
        >
          <span className=" text-teal-400">Prince</span> &{" "}
          <span className="text-pink-400">Princess</span>
        </div>

        <div id="buttons" className="w-full flex items-center justify-around">
          <button
            className="btn w-1/3 bg-teal-400 text-white ring-0 border-0 hover:bg-teal-300 md:h-40"
            onClick={princeToggler}
          >
            Prince
          </button>
          <button
            className="btn w-1/3 bg-pink-400 text-white ring-0 border-0 hover:bg-pink-300 md:h-40"
            onClick={princessToggler}
          >
            Princess
          </button>
        </div>
      </div>
      {/* ///////////////////////////////// */}
      <dialog id="kingModal" className="modal p-4">
        <div className="modal-box w-full  bg-gray-200">
          <div
            id="profileDetails"
            className=" w-full flex flex-col items-center"
          >
            <div
              id="profile-img"
              className="w-full flex flex-col items-center "
            >
              <div id="crown" className="kingCrown w-full h-28 -mb-8"></div>
              <img
                className="w-32 h-32 rounded-full object-cover  ring-2 ring-teal-500"
                src={king.profilePic}
                alt="profile"
              />
            </div>
            <div id="profile-name" className=" font-bold text-xl my-3 c">
              {king.name}
            </div>
            <div id="candidate-detail" className="flex flex-col text-center c">
              <div id="Section">Section - {king.section} </div>

              <div className="flex w-full ">
                <div id="Heigh"> Height - {king.height} </div>|
                <div id="Weigh"> Weight - {king.weight}</div>
              </div>
            </div>
            {/* <div id="candidate-intro" className="-mx-5">
              <p className="font-md font text-sm rounded-md m-2 ring-1 p-3 ring-teal-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                cumque facere, mollitia, facilis iure a consequuntur quam
                recusandae vel voluptate expedita perspiciatis dolore, fuga
                aspernatur molestiae officiis! Molestiae tempore impedit dolorum
                cumque perspiciatis, repudiandae quod ab nemo praesentium dicta
                inventore modi, nihil laboriosam eaque autem. Cupiditate
                molestias aspernatur magnam
              </p>
            </div> */}
          </div>
          <div id="carousel" className="my-3">
            <MTCarousel />
          </div>
        </div>
        <form
          method="dialog"
          id="thisIsResponsibleForCloseWhenOutside"
          className="modal-backdrop "
        >
          <button>close</button>
        </form>
      </dialog>{" "}
      <dialog id="queenModal" className="modal p-4">
        <div className="modal-box w-full  bg-gray-200">
          <div
            id="profileDetails"
            className=" w-full flex flex-col items-center"
          >
            <div
              id="profile-img"
              className="w-full flex flex-col items-center "
            >
              <div id="crown" className="queenCrown w-full h-28 -mb-6"></div>
              <img
                className="w-32 h-32 rounded-full object-cover  ring-2 ring-teal-500"
                src={queen.profilePic}
                alt="profile"
              />
            </div>
            <div id="profile-name" className=" font-bold text-xl my-3 c">
              {queen.name}
            </div>
            <div id="candidate-detail" className="flex flex-col text-center c">
              <div id="Section">Section - {queen.section} </div>

              <div className="flex w-full ">
                <div id="Heigh"> Height - {queen.height} </div>|
                <div id="Weigh"> Weight - {queen.weight}</div>
              </div>
            </div>
            {/* <div id="candidate-intro" className="-mx-5">
              <p className="font-md font text-sm rounded-md m-2 ring-1 p-3 ring-teal-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                cumque facere, mollitia, facilis iure a consequuntur quam
                recusandae vel voluptate expedita perspiciatis dolore, fuga
                aspernatur molestiae officiis! Molestiae tempore impedit dolorum
                cumque perspiciatis, repudiandae quod ab nemo praesentium dicta
                inventore modi, nihil laboriosam eaque autem. Cupiditate
                molestias aspernatur magnam
              </p>
            </div> */}
          </div>
          <div id="carousel" className="my-3">
            <MTCarousel />
          </div>
        </div>
        <form
          method="dialog"
          id="thisIsResponsibleForCloseWhenOutside"
          className="modal-backdrop "
        >
          <button>close</button>
        </form>
      </dialog>{" "}
      <dialog id="princeModal" className="modal p-4">
        <div className="modal-box w-full  bg-gray-200">
          <div
            id="profileDetails"
            className=" w-full flex flex-col items-center"
          >
            <div
              id="profile-img"
              className="w-full flex flex-col items-center "
            >
              <div id="crown" className="princeCrown w-full h-28 -mb-8"></div>
              <img
                className="w-32 h-32 rounded-full object-cover  ring-2 ring-teal-500"
                src={prince.profilePic}
                alt="profile"
              />
            </div>
            <div id="profile-name" className=" font-bold text-xl my-3 c">
              {prince.name}
            </div>
            <div id="candidate-detail" className="flex flex-col text-center c">
              <div id="Section">Section - {prince.section} </div>

              <div className="flex w-full ">
                <div id="Heigh"> Height - {prince.height} | </div>
                <div id="Weigh"> Weight - {prince.weight}</div>
              </div>
            </div>
            {/* <div id="candidate-intro" className="-mx-5">
              <p className="font-md font text-sm rounded-md m-2 ring-1 p-3 ring-teal-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                cumque facere, mollitia, facilis iure a consequuntur quam
                recusandae vel voluptate expedita perspiciatis dolore, fuga
                aspernatur molestiae officiis! Molestiae tempore impedit dolorum
                cumque perspiciatis, repudiandae quod ab nemo praesentium dicta
                inventore modi, nihil laboriosam eaque autem. Cupiditate
                molestias aspernatur magnam
              </p>
            </div> */}
          </div>
          <div id="carousel" className="my-3">
            <MTCarousel />
          </div>
        </div>
        <form
          method="dialog"
          id="thisIsResponsibleForCloseWhenOutside"
          className="modal-backdrop "
        >
          <button>close</button>
        </form>
      </dialog>{" "}

      <dialog id="princessModal" className="modal p-4">
        <div className="modal-box w-full  bg-gray-200">
          <div
            id="profileDetails"
            className=" w-full flex flex-col items-center"
          >
            <div
              id="profile-img"
              className="w-full flex flex-col items-center "
            >
              <div
                id="crown"
                className="princessCrown w-full h-[149px] -mb-[44px] "
              ></div>
              <img
                className="w-32 h-32 rounded-full object-cover  ring-2 ring-teal-500"
                src={princess.profilePic}
                alt="profile"
              />
            </div>
            <div id="profile-name" className=" font-bold text-xl my-3 c">
              {princess.name}
            </div>
            <div id="candidate-detail" className="flex flex-col text-center c">
              <div id="Section">Section - {princess.section} </div>

              <div className="flex w-full ">
                <div id="Heigh"> Height - {princess.height} | </div>
                <div id="Weigh"> Weight - {prince.weight}</div>
              </div>
            </div>
            {/* <div id="candidate-intro" className="-mx-5">
              <p className="font-md font text-sm rounded-md m-2 ring-1 p-3 ring-teal-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                cumque facere, mollitia, facilis iure a consequuntur quam
                recusandae vel voluptate expedita perspiciatis dolore, fuga
                aspernatur molestiae officiis! Molestiae tempore impedit dolorum
                cumque perspiciatis, repudiandae quod ab nemo praesentium dicta
                inventore modi, nihil laboriosam eaque autem. Cupiditate
                molestias aspernatur magnam
              </p>
            </div> */}
          </div>
          <div id="carousel" className="my-3">
            <MTCarousel />
          </div>
        </div>
        <form
          method="dialog"
          id="thisIsResponsibleForCloseWhenOutside"
          className="modal-backdrop "
        >
          <button>close</button>
        </form>
      </dialog>
    </div>
  ) : (
    <>
      {" "}
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-red-500 text-3xl">No result found</div>
      </div>
    </>
  );
};

export default Results;
