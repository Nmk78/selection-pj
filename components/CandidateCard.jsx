import Link from "next/link";
import React from "react";

const CandidateCard = ({profilePic, name, KPTMYK, section}) => {
  return (
    <>
      {" "}
      <div
        id="candidate-card"
        key={KPTMYK}
        className="gap-6 w-86 mx-4 my-2 flex items-center justify-center"
      >
        <div className=" w-72 bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-3xl hover:w-86 hover:ring-2 hover:shadow-teal-300 ring-teal-500 group rounded-xl p-4 transition-all duration-500 transform">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
              className="w-28 h-28 group-hover:w-32 group-hover:h-32  object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            />
            <div className="w-full h-full flex flex-col justify-around hover:-mt-8 transition-all transform delay-500 duration-500">
              <h1 className="text-teal-600 text-md  font-bold">{name}</h1>
              <p className="text-sm text-teal-400">KPTMYK-{KPTMYK}</p>
              <p className="text-sm text-teal-400">Section - {section}</p>
            </div>
          </div>
          <div className="absolute group-hover:bottom-1 text-white font-semibold -bottom-16 transition-all delay-500 duration-500 bg-teal-600 px-2.5 py-2 mr-2 mb-2  right-1 rounded-lg">
            <Link href={`/profile/${KPTMYK}`}>Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateCard;
