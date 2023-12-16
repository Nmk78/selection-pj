// "use client";
import React, { useState } from "react";
import { addCandidate } from "util/fetch";
import { addCandidate, addPublicVoter, addStudentVoter } from "util/fetch";

const Form = ({ mode, handler }) => {
  const [name, setName] = useState(""); //
  const [KPTMYK, setKPTMYK] = useState(""); //
  const [candidateKPTMYK, setCandidateKPTMYK] = useState(""); //
  const [password, setPassword] = useState(""); //
  const [section, setSection] = useState(""); //
  const [gender, setGender] = useState(""); //
  const [intro, setIntro] = useState(""); //
  const [height, setHeight] = useState(""); //
  const [weight, setWeight] = useState(""); //
  const [refferalCode, setRefferalCode] = useState(""); //
  const [secret, setSecret] = useState(""); //
  const [hobbies, setHobbies] = useState([]); //
  const [profilePic, setProfilePic] = useState(""); //
  const [imageUrls, setImageUrls] = useState([]); //

  const [error, setError] = useState(false); //
  const [loading, setLoading] = useState(false); //
  const [message, setMessage] = useState(""); //

  let res;
  const token = localStorage.getItem("token") || undefined;

  // console.log(handler);

  const formHandler = async (e) => {
    setError(false);
    setLoading(true);
    e.preventDefault();

    console.log("token", token);

    if (mode == "addCandidate") {
      console.log("Creating Candidates");
      try {
        res = await addCandidate(token, {
          name,
          KPTMYK,
          password,
          section,
          gender,
          intro,
          height,
          weight,
          refferalCode,
          hobbies,
          profilePic,
          imageUrls,
        });
        console.log("status = ", res?.status);

        console.log(res);

        // if (res.status !== 200) {
        //   setError(true);
        // }
        if (res?.status === 200) {
          setMessage("Success");
          setError(false);
          setLoading(false);

          setName("");
          setKPTMYK("");
          setPassword("");
          setSection("");
          setGender("");
          setIntro("");
          setHeight("");
          setWeight("");
          setRefferalCode("");
          setSecret("");
          setHobbies([]);
          setProfilePic("");
          setImageUrls("");
        }
      } catch (error) {
        console.error("Error:", error.message);
        console.log("Error in form handler");
        setError(true);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setMessage("")
        }, 4000);
      }
    } else if (mode == "addPublicVoter") {
      console.log("Creating Public Voter");

      try {
        res = await addPublicVoter(token, {
          secret,
        });
        console.log("status = ", res?.status);

        console.log(res);

        // if (res.status !== 200) {
        //   setError(true);
        // }
        if (res?.status === 200) {
          setMessage("Success");
          setError(false);
          setLoading(false);

          setName("");
          setKPTMYK("");
          setPassword("");
          setSection("");
          setGender("");
          setIntro("");
          setHeight("");
          setWeight("");
          setRefferalCode("");
          setSecret("");
          setHobbies([]);
          setProfilePic("");
          setImageUrls("");
        }
      } catch (error) {
        console.error("Error:", error.message);
        console.log("Error in form handler");
        setError(true);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setMessage("")
        }, 4000);
      }
    } else if (mode == "addStudentVoter") {
      console.log("Creating Student Voter");

      try {
        res = await addStudentVoter(token, {
          name,
          KPTMYK,
          password,
          section,
          secret,
        });
        console.log("status = ", res?.status);

        console.log(res);

        // if (res.status !== 200) {
        //   setError(true);
        // }
        if (res?.status === 200) {
          setMessage("Success");
          setError(false);
          setLoading(false);

          setName("");
          setKPTMYK("");
          setPassword("");
          setSection("");
          setGender("");
          setIntro("");
          setHeight("");
          setWeight("");
          setRefferalCode("");
          setSecret("");
          setHobbies([]);
          setProfilePic("");
          setImageUrls([]);
        }
      } catch (error) {
        console.error("Error:", error.message);
        console.log("Error in form handler");
        setError(true);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setMessage("")
        }, 4000);
      }
    } else {
      console.log("Creating Other");
      try {
        res = await handler(token, {
          name,
          KPTMYK,
          password,
          section,
          gender,
          intro,
          height,
          weight,
          refferalCode,
          secret,
          hobbies,
          profilePic,
          imageUrls,
        });
        console.log("status = ", res?.status);

        console.log(res);

        // if (res.status !== 200) {
        //   setError(true);
        // }
        if (res?.status === 200) {
          setMessage("Success");
          setError(false);
          setLoading(false);

          setName("");
          setKPTMYK("");
          setPassword("");
          setSection("");
          setGender("");
          setIntro("");
          setHeight("");
          setWeight("");
          setRefferalCode("");
          setSecret("");
          setHobbies([]);
          setProfilePic("");
          setImageUrls([]);
        }
      } catch (error) {
        console.error("Error:", error.message);
        console.log("Error in form handler");
        setError(true);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setMessage("")
        }, 4000);
      }
    }
  };

  // const formHandler = async (e) => {
  //   setError(false);
  //   setLoading(true);
  //   e.preventDefault();

  //   const token = localStorage.getItem("token") || undefined;

  //   try {
  //     // Use handler as a function directly
  //     const res = await handler(token, {
  //       name,
  //       KPTMYK,
  //       password,
  //       section,
  //       gender,
  //       intro,
  //       height,
  //       weight,
  //       refferalCode,
  //       secret,
  //       hobbies,
  //       profilePic,
  //       imageUrls,
  //     });

  //     console.log("status = ", res?.status);

  //     // ... other code ...
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //     console.log("Error in form handler");
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <>
      <div>{res?.status}</div>
      {/* <p className="m-10"> Mode: {mode}</p> */}
      {loading && (
        <div className="text-2xl font-bold text-center text-teal-500">
          Loading...
        </div>
      )}{" "}
      {error && (
        <div className="text-2xl my-4 font-bold text-center text-red-500">
          Something went wrong.
        </div>
      )}{" "}
      {message && (
        <div className="text-2xl  mt-8 font-bold text-center text-green-500">
          {/* {mode == "check" ? "Your Information are valid!" :"" } */}
          {mode == "check" ? "Your Information are valid!" : mode == "addStudentVoter" ? "Student Added":mode == "addPublicVoter" ? "Public Voter Added" :mode == "addCandidate" ? "Candidate Added" :""}
        </div>
      )}
      <form
        onSubmit={formHandler}
        className="max-w-md w-5/6 mx-auto px-6 py-6 bg-gray-200"
        method="post"
      >
        {mode === "publicVote" ? (
          <>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="secret"
                id="secret"
                value={secret}
                onChange={(e) => {
                  setSecret(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="secret"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Secret
              </label>
            </div>
            {/* <div className="relative z-0 w-full mb-5 group">
              <input
                type="numeric"
                name="candidate"
                id="candidate"
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="candidate"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Candidate KPTMYK
              </label>
            </div> */}
          </>
        ) : mode === "check" ? (
          <>
            {" "}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="KPTMYK"
                id="KPTMYK"
                onChange={(e) => {
                  setKPTMYK(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
                value={KPTMYK}
              />
              <label
                htmlFor="KPTMYK"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                KPTMYK
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="secret"
                id="secret"
                value={secret}
                onChange={(e) => {
                  setSecret(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="secret"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Secret
              </label>
            </div>
          </>
        ) : mode === "studentVote" ? (
          <>
            {" "}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
                value={name}
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="secret"
                id="secret"
                value={secret}
                onChange={(e) => {
                  setSecret(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="secret"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Secret
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="KPTMYK"
                id="KPTMYK"
                onChange={(e) => {
                  setKPTMYK(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="KPTMYK"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                KPTMYK
              </label>
            </div>
            {/* <div className="relative z-0 w-full mb-5 group">
              <input
                type="numeric"
                name="candidate"
                id="candidate"
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                onChange={(e) => {
                  setCandidateKPTMYK(e.target.value);
                }}
                value={candidateKPTMYK}
                required
              />
              <label
                htmlFor="candidate"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Candidate KPTMYK
              </label>
            </div> */}
          </>
        ) : mode === "login" ? (
          <>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="KPTMYK"
                id="KPTMYK"
                onChange={(e) => {
                  setKPTMYK(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={KPTMYK}
                required
              />
              <label
                htmlFor="KPTMYK"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                KPTMYK
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={password}
                required
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
          </>
        ) : mode === "register" ? (
          <>
            {" "}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={name}
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="KPTMYK"
                id="KPTMYK"
                onChange={(e) => {
                  setKPTMYK(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={KPTMYK}
                required
              />
              <label
                htmlFor="KPTMYK"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                KPTMYK
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={password}
                required
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="numeric"
                name="referralCode"
                id="referralCode"
                onChange={(e) => {
                  setRefferalCode(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={refferalCode}
                required
              />
              <label
                htmlFor="referralCode"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                referralCode
              </label>
            </div>
          </>
        ) : mode === "addStudentVoter" ? (
          <>
            {" "}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={name}
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="secret"
                id="secret"
                value={secret}
                onChange={(e) => {
                  setSecret(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="secret"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Secret
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="KPTMYK"
                id="KPTMYK"
                onChange={(e) => {
                  setKPTMYK(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={KPTMYK}
                required
              />
              <label
                htmlFor="KPTMYK"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                KPTMYK
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="section"
                id="floating_section"
                onChange={(e) => {
                  setSection(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={section}
                required
              />
              <label
                htmlFor="floating_section"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Year | Section
              </label>
            </div>
          </>
        ) : mode === "addPublicVoter" ? (
          <>
            {" "}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="secret"
                id="secret"
                onChange={(e) => {
                  setSecret(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={secret}
                required
              />
              <label
                htmlFor="secret"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Secret
              </label>
            </div>
          </>
        ) : mode == "addCandidate" ? (
          <>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={name}
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="KPTMYK"
                id="KPTMYK"
                onChange={(e) => {
                  setKPTMYK(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={KPTMYK}
                required
              />
              <label
                htmlFor="KPTMYK"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                KPTMYK
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="section"
                id="floating_section"
                onChange={(e) => {
                  setSection(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={section}
                required
              />
              <label
                htmlFor="floating_section"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Year | Section
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="numeric"
                name="height"
                id="height"
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={height}
                required
              />
              <label
                htmlFor="height"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Height (Cm)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="numeric"
                name="weight"
                id="weight"
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={weight}
                required
              />
              <label
                htmlFor="weight"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Weight (Kg)
              </label>
            </div>{" "}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="hobbies"
                id="hobbies"
                onChange={(e) => {
                  setHobbies(e.target.value.split("#"));
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                value={hobbies.join("#")}
                required
              />
              <label
                htmlFor="hobbies"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Hobbies
              </label>
            </div>{" "}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="link"
                id="link"
                onChange={(e) => {
                  setImageUrls(e.target.value.split("#"));
                }}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                // value={imageUrls}
                // value={imageUrls.join("#")}
                required
              />
              <label
                htmlFor="hobbies"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Image links (Eg. #abc #efg)
              </label>
            </div>{" "}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="profilePic"
                id="profilePic"
                onChange={(e) => {
                  setProfilePic(e.target.value);
                }}
                value={profilePic}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="profilePic"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Profile Picture (Link)
              </label>
            </div>{" "}

            {/* <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="link"
                id="link"
                onChange={(e) => {
                  e.preventDefault();
                  setImageUrls(e.target.value.split("#"));
                }}
                value={imageUrls}
                // value={imageUrls.join("#")}
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="link"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Image Links (eg: #abc.com #efg.com)
              </label>
            </div> */}
            <ul id="gender" className="flex justify-around mb-5">
              <li>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="male"
                  onClick={() => {
                    setGender("male");
                  }}
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-teal-500 peer-checked:border-teal-600 peer-checked:text-teal-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Male</div>
                  </div>
                </label>
              </li>{" "}
              <li>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="female"
                  onClick={() => {
                    setGender("female");
                  }}
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-teal-500 peer-checked:border-teal-600 peer-checked:text-teal-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Female</div>
                  </div>
                </label>
              </li>{" "}
            </ul>
            <textarea
              id="intro"
              rows="4"
              onChange={(e) => {
                setIntro(e.target.value);
              }}
              placeholder="Intro ....."
              value={intro}
              required
              className="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-teal-300 focus:ring-teal-500 focus:border-teal-500"
            ></textarea>
          </>
        ) : (
          <></>
        )}

        <button
          type="submit"
          className="text-white bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
