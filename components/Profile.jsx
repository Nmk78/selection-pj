"use client";

import React from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
  Typography,
  Card,
  CardFooter,
} from "@material-tailwind/react";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Profile = ({
  name,
  KPTMYK,
  section,
  height,
  weight,
  intro,
  hobbies,
  imageUrls,
  profilePic,
}) => {
  // console.log(name, KPTMYK, section, height, weight, intro, hobbies, imageUrls);
  const [secret, setSecret] = React.useState("");
  const [voterName, setVoterName] = React.useState("");
  const [voterKPTMYK, setVoterKPTMYK] = React.useState("");

  const [votingMode, setVotingMode] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [student, setStudent] = React.useState(false); //if student was true student dialog will open

  const [voterCard, setVoteCard] = React.useState(false);

  const handleOpen = () => {
    // to open
    console.log("clicked");
    setOpen(!open);
  };

  const handleVoteOpen = ({ mode }) => {
    //to close
    switch (mode) {
      case "student":
        setVoteCard(!voterCard);
        setStudent(true);
        setOpen(!open);
        setVotingMode("student");

        break;
      case "public":
        setVoteCard(!voterCard);
        setStudent(false);
        setOpen(!open);
        setVotingMode("public");

        break;

      default:
        setVoteCard(!voterCard);
        break;
    }
  };

  // Handle Posts
  const handleVote = async () => {
    if (votingMode === "student") {
      //post to student
      try {
        const res = await axios.patch(
          `${process.env.NEXT_PUBLIC_API}/voter/vote`,
          {
            secret,
            name: voterName,
            KPTMYK: voterKPTMYK,
            candidateKPTMYK: KPTMYK,
          }
        );
        console.log(secret, voterKPTMYK, voterName, KPTMYK);
        console.log("res", res);
        if (res?.status == 200) {
          setMessage("Voted Successfully");
        } else {
          setMessage("Something went wrong");
        }
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.error);
        throw error;
      } finally {
        setTimeout(() => {
          setMessage("");
        }, 4000);
      }
    }
    if (votingMode === "public") {
      try {
        const res = await axios.patch(
          `${process.env.NEXT_PUBLIC_API}/voter/public/vote`,
          {
            secret,
            candidateKPTMYK: KPTMYK,
          }
        );
        console.log("Public Res",res);
        if (res?.status == 200) {
          setMessage("Voted Successfully");
        } else {
          setMessage("Something went wrong");
        }
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.error);
        throw error;
      } finally {
        setTimeout(() => {
          setMessage("");
        }, 4000);
      }
    }
    console.log(message);
  };

  return (
    <div id="Profile" className="w-full flex flex-col items-center pt-10 pb-20">
      <div id="back" className="w-15 ml-2 h-15 absolute top-24 left-0">
        <Link href="/">
          {" "}
          <FontAwesomeIcon
            icon={faArrowLeft}
            color=""
            size="2x"
            id="back"
            className="z-50 text-teal-400 mx-4"
          />
        </Link>
      </div>
      <div id="profileDetails" className=" w-full flex flex-col items-center">
        <div id="profile-img" className=" ">
          <img
            className="w-32 h-32 rounded-full object-cover  ring-2 ring-teal-500"
            src={profilePic}
            alt="profile"
          />
        </div>
        <div id="profile-name" className=" font-bold text-3xl my-5 c">
          {name}
        </div>
        <div id="candidate-detail" className="flex flex-col text-center c">
          <div id="Section">Section - {section} </div>

          <div className="flex w-full ">
            <div id="Heigh"> Height - {height} | </div>
            <div id="Weigh"> Weight - {weight}</div>
          </div>
        </div>
        <div className="text-center text-teal-500 font-bold mt-5 mb-1 text-xl">
          Who am I?
        </div>
        {/* <div
          id="hobbies"
          className="w-full m-2 justify-center flex flex-row items-center flex-wrap"
        >
          {hobbies.map(
            (hobby, index) =>
              hobby !== "" && (
                <div
                  key={index}
                  id="hobby"
                  className="px-3 py-1.5 m-1 ring-teal-400 ring-1 rounded-lg"
                >
                  {hobby}
                </div>
              )
          )}
        </div> */}
        <div id="candidate-intro" className="w-full h-full flex justify-center">
          <p className="font-md text-teal-700 font text-sm rounded-md m-3 ring-1 p-3 ring-teal-500">
            {/* <p className="w-full max-w-[380px] h-full whitespace-nowrap break-words text-teal-500 overflow-ellipsis font-md text-sm rounded-md m-2 ring-1 p-3 ring-teal-500"> */}
            {intro}
          </p>
        </div>
      </div>
      <div id="carousel" className="w-full my-5 flex items-center">
        <div className="carousel rounded-box w-full mx-2">
          {imageUrls.map(
            (imageUrl, index) =>
              imageUrl != "" && (
                <div key={index}  className="carousel-item w-1/2">
                  <img src={imageUrl} className="w-full" />
                </div>
              )
          )}
        </div>
      </div>
      <div className="c text-lg font-light animate-pulse">
        Drag slides to see more photos
      </div>
      <div id="buttons" className="w-full flex items-center justify-center">
        <Button
          onClick={handleOpen}
          className="px-4 py-3 text-gray-100 bg-teal-500 rounded-lg text-center font-bold hover:bg-teal-600 focus:ring-1 focus:ring-teal-700"
          // variant="gradient"
        >
          👑 Vote
        </Button>
      </div>
      {/* Fitst Dialog */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>You are ____ voter. </DialogHeader>
        {/* <DialogBody>
          
        </DialogBody> */}
        <DialogFooter>
          <Button
            variant="Stued"
            color="blue"
            // onClick={handleVoteOpen}
            onClick={() => {
              handleVoteOpen({ mode: "public" });
            }}
            className="mr-1"
          >
            <span>Public</span>
          </Button>
          <Button
            variant="gradient"
            color="teal"
            onClick={() => {
              handleVoteOpen({ mode: "student" });
            }}
          >
            <span>Student</span>
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Second Dialog */}
      <Dialog
        size="xs"
        open={voterCard}
        handler={handleVoteOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] p-8">
          <Typography variant="h4" color="teal" className="mb-4">
            Vote
          </Typography>{" "}
          {/* {console.log(student)} */}
          <div className=" text-2xl text-teal-500 text-center my-4">
            {message}
          </div>
          {student ? (
            <div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                  placeholder=" "
                  onChange={(e) => setVoterName(e.target.value)}
                  required
                />
                <label
                  for="name"
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
                  className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                  placeholder=" "
                  onChange={(e) => setVoterKPTMYK(e.target.value)}
                  required
                />
                <label
                  for="KPTMYK"
                  className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  KPTMYK
                </label>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="decimal"
              name="secret"
              id="secret"
              className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              onChange={(e) => setSecret(e.target.value)}
              required
            />
            <label
              for="secret"
              className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Secret
            </label>
          </div>
          <CardFooter className="pt-0 flex justify-center">
            <Button
              variant="gradient"
              onClick={handleVote}
              color="teal"
              className="px-4 py-3 text-gray-100 bg-teal-500 rounded-lg text-center font-bold hover:bg-teal-600 focus:ring-1 focus:ring-teal-700"
            >
              👑 Vote
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
};

export default Profile;
