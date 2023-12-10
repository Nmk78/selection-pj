import Link from "next/link";
import React from "react";

const CandidateCard = () => {
  return (
    <>
      {" "}
      <div
        id="candidate-card"
        className="gap-6 mx-4 my-2 flex items-center justify-center"
      >
        <div className="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-3xl hover:ring-2 hover:shadow-teal-300 ring-teal-500 group rounded-xl p-4 transition-all duration-500 transform">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
              className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            />
            <div className="w-fit transition-all transform duration-500">
              <h1 className="text-teal-600 text-lg  font-bold">Dallar Street</h1>
              <p className="text-teal-400">KPTMYK-001568</p>
              <p className="text-xs text-teal-500  group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                Section - C
              </p>
            </div>
          </div>
          <div className="absolute group-hover:bottom-1 text-white font-semibold -bottom-16 transition-all delay-500 duration-500 bg-teal-600 px-2.5 py-2 mr-4 mb-2  right-1 rounded-lg">
            <Link href="/profile/1">Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateCard;
