import Link from "next/link";
import React from "react";

const CandidateCard = ({ profilePic, name, KPTMYK, section }) => {
  return (
    <>
      {" "}
      <div
        id="candidate-card"
        key={KPTMYK}
        className="gap-6 w-86 mx-4 my-2 flex items-center justify-center"
      >
        <div className=" w-72 bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-3xl hover:w-86 hover:ring-2 hover:shadow-teal-300 ring-teal-500 group rounded-xl p-4 transition-all duration-500 transform">
          <div className="w-full h-full flex items-center ">
            <div id="profile_pic" className="w-28 h-28 mr-2">
              <img
                className="w-28 min-w-[112px] h-28 max-h-28 group-hover:w-32 group-hover:h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                src={profilePic}
              />
            </div>

            <div className="w-full h-full flex flex-col justify-center hover:-mt-8 transition-all transform delay-500 duration-500">
                <h1 className="text-teal-600 text-md  font-bold">{name}</h1>
                <p className="text-sm text-teal-400">{KPTMYK}</p>
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
