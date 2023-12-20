import localFont from "next/font/local";
import React from "react";

const beautifulFont = localFont({ src: "../font/quindelia.regular.ttf" });

const Policy = () => {
  return (
    <div className="mt-16 w-full">
      <div
        style={beautifulFont.style}
        className="text-center text-5xl font-bold text-teal-500 "
      >
        Policy
      </div>
      <div className="h-0.5 w-44 mx-auto bg-teal-500"></div>
      <div className="w-full h-full px-3 py-10 text-center">
        <p className="font-semibold text-xl italic c text-center mt-4 mb-2">
          Introduction
        </p>
        <p className="c text-center">
          The voting policy was made by the organizers and senior students. The
          objective is to ensure a fair, transparent, and inclusive voting
          experience, promoting student engagement and representation.
        </p>

        <p className="font-semibold text-xl italic c text-center mt-4 mb-2">
          Voting Eligibility
        </p>
        <p className="c text-center">
          All currently enrolled students at the University of Computer Studies
          (Myeik) are eligible to vote with pre-distributed secret keys.{" "}
          <span className="text-red-500 text-center">
            One secret key will only be eligible for one male candidate and one
            female candidate in each round (It was total 2 rounds).
          </span>
        </p>

        <p className="c text-center">
          For public voters, we provide a place to obtain a secret key. One
          person can only get one secret key.(Public voter can only vote in
          first round.)
        </p>

        <p className="font-semibold text-xl italic c text-center mt-4 mb-2">
          Vote Count and Result Conclusion
        </p>
        <p className="c text-center">
          We will count votes from students and public voters in the first
          round. After the first round, the top 5 male and female candidates
          will participate in a questions and answers section. Following that,
          Second round will open and student and teacher can vote for second
          round and some teachers and trainers will cast their votes. For
          casters, Each caster will rate the candidates from 1 to 5 each rate
          equavilent to 1 vote. The candidate with the highest votes will be
          crowned as the King, and the second-highest voted candidate will be
          the Prince. Similarly, for female candidates, the one with the highest
          votes will become the Queen, and the second-highest voted candidate
          will be the Princess.
        </p>

        <p className="font-semibold text-xl italic c text-center mt-4 mb-2">
          Results Announcement
        </p>
        <p className="c text-center">
          Results will be live after the presenter announces them on the
          stage. You can return to the home page to view the results.
        </p>
      </div>
    </div>
  );
};

export default Policy;
