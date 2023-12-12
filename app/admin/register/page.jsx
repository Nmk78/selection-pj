'use client'
import Form from "components/Form";
import { useParams } from "next/navigation";
import React from "react";
import { configureAuth } from "react-query-auth";
import { registerAsAdmin } from "util/fetch";

const page = () => {
  // const id = useParams().id;

  // const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  //   // userFn: () => api.get(`/profile/${id}`),
  //   // loginFn: (credentials) => api.post('/login', credentials),
  //   registerFn: () =>registerAsAdmin(name, KPTMYK, password, refferalCode),
  //   // logoutFn: () => api.post('/logout'),
  // });

  
  return (
    <div className="h-full w-full mt-44">
      <p className="text-xl c font-bold text-center ">Register</p>
      <Form mode="register" handler={registerAsAdmin} />
      <p className="text-sm c  text-center">Already have admin account? <a href="/admin/login" className="underline">Login</a></p>

    </div>
  );
};

export default page;
