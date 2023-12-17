import React from "react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="w-full h-84 p-4 bg-black text-white flex flex-col">
      <div className="text-md pb-2 border-b-2 border-white w-full text-center my-3">
        Objective
      </div>
      <div id="Aim" className="text-sm font-extralight text-center">
        This website has been developed as a personal project with the
        primary objective of serving as an online voting system within the
        University of Computer Studies, Myeik (UCS Myeik).The main purpose is to
        simplify and enhance the voting process, providing a user-friendly
        platform for the UCS Myeik community to engage in online voting
        seamlessly.{" "}
      </div>
      <div id="Logo" className=" w-full h-10 my-2 p-1 flex items-center justify-center bg-gray-200">
        <a href="https://github.com/Nmk78" target="_blank"><div className=" w-10 githubIcon mx-2">&nbsp;</div></a>
        <a href="mailto:naymyokhant78@gmail.com" target="_blank"><div className=" w-10 gmailIcon mx-2">&nbsp;</div></a>
      </div>
      <div id="copy-right" className="text-sm font-thin text-center">
        ©{year}
        <a href="https://naymyokhant.me" target="_blank" className="text-blue-500">
          Nay Myo Khant.
        </a>
        All rights reserved
      </div>
    </div>
  );
};

export default Footer;
