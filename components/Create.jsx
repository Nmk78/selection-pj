"use client"
import Form from "components/Form";
import React, { useState } from "react";

const Create = () => {
  const [mode, setMode] = useState("addStudentVoter");

  return (
    <div className="my-20">
      <div className="text-2xl text-center font-bold mb-5">Create</div>
      <ul className="w-full flex items-center justify-center">
        <li>
          <input
            type="radio"
            id="student"
            name="mode"
            value="student"
            className="hidden peer"
            required
          />
          <label
            htmlFor="student"
            onClick={() => {
              setMode("addStudentVoter");
            }}
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-teal-500 peer-checked:border-teal-600 peer-checked:text-teal-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">Student</div>
            </div>
          </label>
        </li>{" "}
        <li className="mx-3">
          <input
            type="radio"
            id="public"
            name="mode"
            value="public"
            className="hidden peer"
            required
          />
          <label
            htmlFor="public"
            onClick={() => {
              setMode("addPublicVoter");
            }}
            className=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-teal-600 peer-checked:text-teal-600 hover:text-gray-600 hover:bg-gray-100 "
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">Public</div>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="candidate"
            name="mode"
            value="candidate"
            className="hidden peer"
          />
          <label
            htmlFor="candidate"
            onClick={() => {
              setMode("addCandidate");
            }}
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-teal-500 peer-checked:border-teal-600 peer-checked:text-teal-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">Candidate</div>
            </div>
          </label>
        </li>
      </ul>
      <Form mode={mode} handler="allCreateWillBeHandleFromForm" />
    </div>
  );
}

export default Create