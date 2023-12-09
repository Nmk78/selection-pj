"use client";

import React from "react";
import Form from "./Form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getAllCandidates } from "util/fetch";
import Link from "next/link";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Home = () => {
  // console.log(process.env.API);
  // const { data, isLoading, isSuccess, error } = useQuery({
  //   //refetchInterval: ms,
  //   queryKey: ["candidate"],
  //   queryFn: getAllCandidates,
  //   // queryFn: async () => {
  //   //   // await wait(1000);
  //   //   const data = await axios.get(
  //   //     process.env.API || "https://jsonplaceholder.typicode.com/todos/"
  //   //   );
  //   //   console.log(data);
  //   //   return data;
  //   // },
  // });

  // return isLoading ? (
  //   <p>Loading...</p>
  // ) : !isSuccess ? (
  //   <p>error</p>
  // ) : (

  return(
    <div id="Home" className="w-full max-w-full pt-5  h-full bg-slate-300">

<div id="candidate-card" class="gap-6 mx-4 my-2 flex items-center justify-center">
        <div class="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-3xl hover:ring-2 hover:shadow-teal-300 ring-teal-500 group rounded-xl p-4 transition-all duration-500 transform">
          <div class="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
              class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            />
            <div class="w-fit transition-all transform duration-500">
              <h1 class="text-teal-600 text-lg  font-bold">Nay Myo Khant</h1>
              <p class="text-teal-400">KPTMYK-001568</p>
              <p class="text-xs text-teal-500  group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                Section - C
              </p>
            </div>
          </div>
          <div class="absolute group-hover:bottom-1 text-white font-semibold -bottom-16 transition-all delay-500 duration-500 bg-teal-600 px-2.5 py-2 mr-4 mb-2  right-1 rounded-lg">
        <Link href='/profile/1'>Details</Link>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////////// */}

      <div id="candidate-card" class="gap-6 mx-4 my-2 flex items-center justify-center">
        <div class="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-3xl hover:ring-2 hover:shadow-teal-300 ring-teal-500 group rounded-xl p-4 transition-all duration-500 transform">
          <div class="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
              class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            />
            <div class="w-fit transition-all transform duration-500">
              <h1 class="text-teal-600 text-lg  font-bold">Nay Myo Khant</h1>
              <p class="text-teal-400">KPTMYK-001568</p>
              <p class="text-xs text-teal-500  group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                Section - C
              </p>
            </div>
          </div>
          <div class="absolute group-hover:bottom-1 text-white font-semibold -bottom-16 transition-all delay-500 duration-500 bg-teal-600 px-2.5 py-2 mr-4 mb-2  right-1 rounded-lg">
        <Link href='/profile/1'>Details</Link>
          </div>
        </div>
      </div><div id="candidate-card" class="gap-6 mx-4 my-2 flex items-center justify-center">
        <div class="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-3xl hover:ring-2 hover:shadow-teal-300 ring-teal-500 group rounded-xl p-4 transition-all duration-500 transform">
          <div class="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
              class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            />
            <div class="w-fit transition-all transform duration-500">
              <h1 class="text-teal-600 text-lg  font-bold">Nay Myo Khant</h1>
              <p class="text-teal-400">KPTMYK-001568</p>
              <p class="text-xs text-teal-500  group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                Section - C
              </p>
            </div>
          </div>
          <div class="absolute group-hover:bottom-1 text-white font-semibold -bottom-16 transition-all delay-500 duration-500 bg-teal-600 px-2.5 py-2 mr-4 mb-2  right-1 rounded-lg">
        <Link href='/profile/1'>Details</Link>
          </div>
        </div>
      </div><div id="candidate-card" class="gap-6 mx-4 my-2 flex items-center justify-center">
        <div class="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-3xl hover:ring-2 hover:shadow-teal-300 ring-teal-500 group rounded-xl p-4 transition-all duration-500 transform">
          <div class="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
              class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            />
            <div class="w-fit transition-all transform duration-500">
              <h1 class="text-teal-600 text-lg  font-bold">Nay Myo Khant</h1>
              <p class="text-teal-400">KPTMYK-001568</p>
              <p class="text-xs text-teal-500  group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                Section - C
              </p>
            </div>
          </div>
          <div class="absolute group-hover:bottom-1 text-white font-semibold -bottom-16 transition-all delay-500 duration-500 bg-teal-600 px-2.5 py-2 mr-4 mb-2  right-1 rounded-lg">
        <Link href='/profile/1'>Details</Link>
          </div>
        </div>
      </div>

      <div id="candidate-card" class="gap-6 mx-4 my-2 flex items-center justify-center">
        <div class="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-3xl hover:ring-2 hover:shadow-teal-300 ring-teal-500 group rounded-xl p-4 transition-all duration-500 transform">
          <div class="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
              class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            />
            <div class="w-fit transition-all transform duration-500">
              <h1 class="text-teal-600 text-lg  font-bold">Nay Myo Khant</h1>
              <p class="text-teal-400">KPTMYK-001568</p>
              <p class="text-xs text-teal-500  group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                Section - C
              </p>
            </div>
          </div>
          <div class="absolute group-hover:bottom-1 text-white font-semibold -bottom-16 transition-all delay-500 duration-500 bg-teal-600 px-2.5 py-2 mr-4 mb-2  right-1 rounded-lg">
        <Link href='/profile/1'>Details</Link>
          </div>
        </div>
      </div>

      <div id="candidate-card" class="gap-6 mx-4 my-2 flex items-center justify-center">
        <div class="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-3xl hover:ring-2 hover:shadow-teal-300 ring-teal-500 group rounded-xl p-4 transition-all duration-500 transform">
          <div class="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
              class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            />
            <div class="w-fit transition-all transform duration-500">
              <h1 class="text-teal-600 text-lg  font-bold">Nay Myo Khant</h1>
              <p class="text-teal-400">KPTMYK-001568</p>
              <p class="text-xs text-teal-500  group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                Section - C
              </p>
            </div>
          </div>
          <div class="absolute group-hover:bottom-1 text-white font-semibold -bottom-16 transition-all delay-500 duration-500 bg-teal-600 px-2.5 py-2 mr-4 mb-2  right-1 rounded-lg">
        <Link href='/profile/1'>Details</Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home;
