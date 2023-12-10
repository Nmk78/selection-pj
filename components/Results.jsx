"use client";
import localFont from "next/font/local";
import React from "react";
import { MTCarousel } from "./Carousel";

const beautifulFont = localFont({ src: "../font/quindelia.regular.ttf" });

const Results = () => {
  const toggler = () => document.getElementById("my_modal_2").showModal();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* <div style={beautifulFont.style} className="text-2xl c font-bold text-center my-5 mt-10">Result is ready to see.</div>
      <div style={beautifulFont.style} className="text-2xl c font-bold text-center my-4">Check one by one.</div> */}
      <div id="KingAndQueen" className="w-full my-4">
        <div
          style={beautifulFont.style}
          className="text-2xl c font-bold text-center my-5"
        >
          <span className=" text-teal-500">King</span> &{" "}
          <span className="text-pink-500">Queen</span>
        </div>

        <div id="buttons" className="w-full flex items-center justify-around">
          <button
            className="btn w-1/3 bg-teal-500 text-white ring-0 border-0"
            onClick={toggler}
          >
            King
          </button>
          <button
            className="btn w-1/3 bg-pink-500 text-white ring-0 border-0"
            onClick={toggler}
          >
            Queen
          </button>
        </div>
      </div>{" "}
      <div id="PrinceAndPrincess" className="w-full">
        <div
          style={beautifulFont.style}
          className="text-2xl c font-bold text-center my-5"
        >
          <span className=" text-teal-400">Prince</span> &{" "}
          <span className="text-pink-400">Princess</span>
        </div>

        <div id="buttons" className="w-full flex items-center justify-around">
          <button
            className="btn w-1/3 bg-teal-400 text-white ring-0 border-0"
            onClick={toggler}
          >
            King
          </button>
          <button
            className="btn w-1/3 bg-pink-400 text-white ring-0 border-0"
            onClick={toggler}
          >
            Queen
          </button>
        </div>
      </div>
      {/* ///////////////////////////////// */}
      <dialog id="my_modal_2" className="modal p-4">
        <div className="modal-box w-full  bg-gray-200">
          <div
            id="profileDetails"
            className=" w-full flex flex-col items-center"
          >
            <div id="profile-img" className="w-full flex flex-col items-center ">
              <div id="crown" className="queenCrown w-full h-28 -mb-6"></div>
              <img
                className="w-32 h-32 rounded-full object-cover  ring-2 ring-teal-500"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="profile"
              />
            </div>
            <div id="profile-name" className=" font-bold text-xl my-3 c">
              John Ray
            </div>
            <div id="candidate-detail" className="flex flex-col text-center c">
              <div id="Section">Section - C </div>

              <div className="flex w-full ">
                <div id="Heigh"> Height - 150 | </div>
                <div id="Weigh"> Weight - 90</div>
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
  );
};

export default Results;
