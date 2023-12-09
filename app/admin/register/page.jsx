import Form from "components/Form";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full mt-44">
      <p className="text-xl c font-bold text-center ">Register</p>
      <Form mode="register" />
      <p className="text-sm c  text-center">Already have admin account? <a href="/admin/login" className="underline">Login</a></p>

    </div>
  );
};

export default page;
