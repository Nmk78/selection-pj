import Footer from "components/Footer";
import Home from "components/Home";
import React from "react";

const page = () => {
  return (
    <>
      <section className="w-screen select-none">
        <Home />
        <Footer />
      </section>
    </>
  );
};

export default page;
