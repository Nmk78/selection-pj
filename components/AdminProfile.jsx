"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import {
  getOneAdmin,
  loadInitialData,
  toggleResult,
  toggleVote,
  restart,
  getPreResult,
  startSecondRound,
} from "util/fetch";
import Loading from "./Loading";

const logout = () => {
  const localStorage = typeof window !== "undefined" ? window.localStorage : null;
  if(!localStorage) {
    return;
  }
  localStorage.removeItem("token");
  localStorage.removeItem("adminId");
  localStorage.removeItem("adminName");

  window.location.href = "/admin/login";
};

const AdminProfile = () => {
  const param = useParams();
  const [preResults, setPreResults] = useState([]);

  const handlePreResults = async (preResults) => {
    try {
      let results = await getPreResult();
      setPreResults(results.data);
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching preResult:", error.message);
    }
    console.log(preResults);
  };

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


  if (isLoading) {
    return <Loading size="4x" />;
  }

  if (isError) {
    return <div className="text-red-700">Error loading Admin details.</div>;
  }
  if (isSuccess) {
    // handlePreResults()
    const { name, KPTMYK, refferalCode } = data.data.adminData;
    const { voteAllow, resultOpen, secondRound } = data.data.data;
    console.log("preResults", preResults);
    return (
      <div id="Admin Profile" className="w-full flex flex-col items-center">
        <div
          id="AdminDetails"
          className="rounded-lg ring-teal-500 ring-2 p-5 m-5 mt-7"
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
        <div
          id="status"
          className="c  px-5 mx-2 text-xs h-20 flex items-center justify-around  ring-2 rounded-lg ring-teal-400"
        >
          {!voteAllow ? (
            <div id="vote" className="text-red-500 ">
              Voting is Closed
            </div>
          ) : (
            <div id="vote" className="text-green-500 ">
              Voting is Open
            </div>
          )}
          <div className="mx-1">|</div>
          {!resultOpen ? (
            <div id="result" className="text-red-500 ">
              Result is Closed
            </div>
          ) : (
            <div id="result" className="text-green-500 ">
              Result is Open
            </div>
          )}{" "}
          <div className="mx-1">|</div>
          {!secondRound ? (
            <div id="result" className="text-red-500 ">
              Second Round is Closed
            </div>
          ) : (
            <div id="result" className="text-green-500 ">
              SecondRound is Open
            </div>
          )}
        </div>

        <div
          id="buttons"
          className="flex flex-wrap items-center justify-center "
        >
          <Link href={`/admin/${id}/create`}>
            <p className=" text-white font-semibold bg-blue-500 px-2.5 py-2  m-2  rounded-lg">
              Add New
            </p>
          </Link>
          <button
            className=" text-white font-semibold bg-cyan-500 px-2.5 py-2  m-2  rounded-lg"
            onClick={() => loadInitialData(token)}
          >
            Load Initialdata
          </button>
          <button
            className=" text-white font-semibold bg-purple-500 px-2.5 py-2  m-2  rounded-lg"
            onClick={() => handlePreResults()}
          >
            Get Pre Results
          </button>{" "}
          <button
            className=" text-white font-semibold bg-purple-500 px-2.5 py-2  m-2  rounded-lg"
            onClick={() => startSecondRound(token)}
          >
            {secondRound ? "Close Second Round" : "Open Second Round"}
          </button>
          <button
            className=" text-white font-semibold bg-green-500 px-2.5 py-2  m-2  rounded-lg"
            onClick={() => {
              toggleVote(token);
            }}
          >
            {voteAllow ? "Close Voting" : "Open Voting"}
          </button>
          <button
            className=" text-white font-semibold bg-teal-500 px-2.5 py-2  m-2  rounded-lg"
            onClick={() => {
              toggleResult(token);
            }}
          >
            {resultOpen ? "Close Result" : "Open Result"}
          </button>{" "}
          <button
            onClick={() => {
              let response = confirm(
                "Are you sure to restart application? This will be delete all data."
              );
              if (response) {
                restart(token);
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
        <div
          id="results"
          className="w-full min-w-[350px] min-h-[380px] h-full flex flex-row"
        >
          <div className="w-full bg-teal-200 py-5">
            {preResults &&
              preResults.maleResults &&
              preResults.maleResults.length > 0 &&
              preResults.maleResults.map((male) => (
                <div
                  key={male.KPTMYK}
                  className="text-white flex items-center p-3 font-semibold mx-2 my-1 rounded-md bg-teal-300"
                >
                  <p className="w-full ml-0 mr-2">{male.name}</p>
                  <p className=" w-10 mr-0">{male.totalVotes}</p>
                </div>
              ))}
          </div>{" "}
          <div className="w-full bg-pink-200 py-5">
            {preResults &&
              preResults.femaleResults &&
              preResults.femaleResults.length > 0 &&
              preResults.femaleResults.map((female) => (
                <div
                  key={female.KPTMYK}
                  className="text-white flex items-center p-3 font-semibold mx-2 my-1 rounded-md bg-pink-400"
                >
                  <p className="w-full ml-0">{female.name}</p>
                  <p className=" w-12 mr-0">{female.totalVotes}</p>
                </div>
              ))}
          </div>{" "}
        </div>
      </div>
    );
  }
};

export default AdminProfile;
