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
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getOneCandidate } from "util/fetch";

const Profile = ({id}) => {

  console.log("id=", id);

  const { data, isLoading, isSuccess, isError } = useQuery({
    //refetchInterval: ms,
    queryKey: ["candidate", id],
    queryFn: getOneCandidate(id),
  });

  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [student, setStudent] = React.useState(false);

  const [voterCard, setVoteCard] = React.useState(false);

  // const handleVoteOpen = () => setVoteCard((cur) => !cur);

  const handleOpen = () => {
    console.log("clicked");
    setOpen(!open);
  };
  const handleVoteOpen = ({ mode }) => {
    switch (mode) {
      case "student":
        setVoteCard(!voterCard);
        setStudent(true);
        setOpen(!open);

        break;
      case "public":
        setVoteCard(!voterCard);
        setStudent(false);
        setOpen(!open);

        break;

      default:
        setVoteCard(!voterCard);
        break;
    }
  };

  return (
    <div id="Profile" className="w-full flex flex-col items-center pt-10 pb-20">
      <div id="profileDetails" className=" w-full flex flex-col items-center">
      <div id="profile-img" className=" ">
        <img
          className="w-32 h-32 rounded-full object-cover  ring-2 ring-teal-500"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="profile"
        />
      </div>
      <div id="profile-name" className=" font-bold text-xl my-5 c">
        John Ray
      </div>
      <div id="candidate-detail" className="flex flex-col text-center c">
        <div id="Section">Section - C </div>

        <div className="flex w-full ">
          <div id="Heigh"> Height - 150 | </div>
          <div id="Weigh"> Weight - 90</div>
        </div>
      </div>
      <div id="candidate-intro">
        <p className="font-md font text-sm rounded-md m-2 ring-1 p-3 ring-teal-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cumque
          facere, mollitia, facilis iure a consequuntur quam recusandae vel
          voluptate expedita perspiciatis dolore, fuga aspernatur molestiae
          officiis! Molestiae tempore impedit dolorum cumque perspiciatis,
          repudiandae quod ab nemo praesentium dicta inventore modi, nihil
          laboriosam eaque autem. Cupiditate molestias aspernatur magnam
        </p>
      </div>
      </div>
      <div id="carousel" className="w-full my-5 flex items-center">
        <div className="carousel rounded-box w-full mx-2">
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="c text-lg font-light animate-pulse">
        Drag slides to see more photos
      </div>

      <div id="buttons">
        <Button
          onClick={handleOpen}
          className="px-4 py-3 text-gray-100 bg-teal-500 rounded-lg text-center font-bold hover:bg-teal-600 focus:ring-1 focus:ring-teal-700"
          // variant="gradient"
        >
          👑 Vote
        </Button>

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
            {student ? (
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="name"
                  className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
            ) : (
              <></>
            )}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="decimal"
                name="KPTMYK"
                id="KPTMYK"
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
              />
              <label
                for="KPTMYK"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {student ? "KPTMYK" : "Secret"}
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="numeric"
                name="candidate"
                id="candidate"
                className="block py-2.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=" "
                required
              />
              <label
                for="candidate"
                className="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Candidate KPTMYK
              </label>
            </div>
            <CardFooter className="pt-0 flex justify-center">
              <Button
                variant="gradient"
                onClick={handleVoteOpen}
                color="teal"
                className="px-4 py-3 text-gray-100 bg-teal-500 rounded-lg text-center font-bold hover:bg-teal-600 focus:ring-1 focus:ring-teal-700"
              >
                👑 Vote
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </div>
    </div>
  );
};

export default Profile;
