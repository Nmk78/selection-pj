"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import {
  getOneAdmin,
  loadInitialData,
  toggleResult,
  toggleVote,
  restart,
} from "util/fetch";


const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("adminId");
  localStorage.removeItem("adminName");

  window.location.href = "/admin/login";
};
const AdminProfile = () => {


  const token =
    typeof window !== "undefined" ? window.localStorage.getItem("token") : null;
  const id =
    typeof window !== "undefined" ? window.localStorage.getItem("adminId") : "";
  if (!token) {
    window.location.href = "/admin/login";
  }
  const { data, isLoading, isSuccess, error, isError } = useQuery({
    queryKey: ["admin", id],
    queryFn: () => getOneAdmin(id, token),
  });

  console.log("Admin Data-", data);

  if (isLoading) {
    return <div className="text-red-700">Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-700">Error loading Admin details.</div>;
  }
  if (isSuccess) {
    const { name, KPTMYK, refferalCode } = data.data;
    return (
      <div id="Admin Profile" className="w-full flex flex-col items-center">
        <div
          id="AdminDetails"
          className="rounded-lg ring-teal-500 ring-2 p-5 m-5 mt-16"
        >
          <div className="w-full mx-5 my-1.5 font-medium text-teal-500 text-xl  ">
            Admin - {name}
          </div>
          <div className="w-full mx-5 my-1.5 font-medium text-teal-500 text-xl  ">
            KPTMYK - {KPTMYK}
          </div>
          <div className="w-full mx-5 my-1.5 font-medium text-teal-500 text-xl  ">
            Refferal Code - {refferalCode}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center ">
          <Link href={`/admin/${id}/create`}>
            <p className=" text-white font-semibold bg-blue-500 px-2.5 py-2  m-2  rounded-lg">
              Add New
            </p>
          </Link>
          <button
            className=" text-white font-semibold bg-purple-500 px-2.5 py-2  m-2  rounded-lg"
            onClick={() => loadInitialData(token)}
          >
            Load Initialdata
          </button>
          <button
            className=" text-white font-semibold bg-green-500 px-2.5 py-2  m-2  rounded-lg"
            onClick={() => toggleVote(token)}
          >
            Open Voting
          </button>
          <button
            className=" text-white font-semibold bg-teal-500 px-2.5 py-2  m-2  rounded-lg"
            onClick={() => toggleResult(token)}
          >
            Open Result
          </button>
          <button
            onClick={() => {
              let response = confirm(
                "Are you sure to restart application? This will be delete all data."
              );
              if(response){
                console.log(token);
                restart(token)
              }
            }}
            className=" text-white font-semibold bg-red-500 px-2.5 py-2  m-2  rounded-lg"
          >
            Restart
          </button>
          <button
            onClick={logout}
            className=" text-white font-semibold bg-orange-500 px-2.5 py-2  m-2  rounded-lg"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }
};

export default AdminProfile;
