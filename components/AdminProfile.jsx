import Link from "next/link";
import React from "react";

const AdminProfile = () => {
  let id = 1
  return (
    <div id="Admin Profile" className="w-full flex flex-col items-center">
      <div
        id="AdminDetails"
        className="rounded-lg ring-teal-500 ring-2 p-5 m-5 mt-16"
      >
        <div className="w-full mx-5 my-1.5 font-medium text-teal-500 text-xl  ">
          Admin - Nay Myo Khant
        </div>
        <div className="w-full mx-5 my-1.5 font-medium text-teal-500 text-xl  ">
          KPTMYK - 001365
        </div>
        <div className="w-full mx-5 my-1.5 font-medium text-teal-500 text-xl  ">
          Refferal Code - 21356
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center ">
        <Link href={`/admin/${id}/create`}>
          <p className=" text-white font-semibold bg-teal-500 px-2.5 py-2 mr-4 mb-2  rounded-lg">
            Add Candidate
          </p>
        </Link>        <Link href={`/admin/${id}/create`}>
          <p className=" text-white font-semibold bg-teal-500 px-2.5 py-2 mr-4 mb-2  rounded-lg">
            Add stuednt Voter
          </p>
        </Link>        <Link href={`/admin/${id}/create`}>
          <p className=" text-white font-semibold bg-teal-500 px-2.5 py-2 mr-4 mb-2  rounded-lg">
            Add public Voter
          </p>
        </Link>        <Link href={`/admin/${id}/create`}>
          <p className=" text-white font-semibold bg-teal-500 px-2.5 py-2 mr-4 mb-2  rounded-lg">
            Add Metadata
          </p>
        </Link>
        
        <button className=" text-white font-semibold bg-teal-500 px-2.5 py-2 mr-4 mb-2  rounded-lg">
          Allow Vote
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
