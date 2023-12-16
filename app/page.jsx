import Footer from "components/Footer";
import Home from "components/Home";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
    <Head>
        <meta property="og:title" content="Home | Online Selection Voting System." />
        <meta property="og:description" content="Online Voting System for UCS(Myeik)" />
        <meta property="og:image" content="https://i.imgur.com/nyLPgse.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <section className="w-screen select-none">
        <Home />
        <Footer />
      </section>
    </>
  );
};

export default page;
