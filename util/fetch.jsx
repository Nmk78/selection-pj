import axios from "axios";
require("dotenv").config();
import { Router } from "next/router";

//
export const getAllCandidates = async () => {
  try {
    console.log(process.env.NEXT_PUBLIC_API);
    const res = await axios.get(process.env.NEXT_PUBLIC_API + "/candidates");
    // console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error fetching candidates:", error.message);
    throw error;
  }
};

//
export const getOneCandidate = async ({ id }) => {
  try {
    console.log(id);
    if (!id) {
      console.log("No ID");
      return;
    }

    console.log("Fetching Profile Data");
    console.log(`${process.env.NEXT_PUBLIC_API}/candidates/${id}`);

    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/candidates/${id}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching candidate:", error.message);
    throw error;
  }
};

//
export const getOneAdmin = async (id, token) => {
  try {
    console.log("Getting Admin data via ID");
    if (!id) {
      console.log("No ID");
      return;
    }
    if (!token) {
      console.log("No token");
      return;
    }

    console.log("Fetching Profile Data");
    console.log(`${process.env.NEXT_PUBLIC_API}/admin/${id}`);

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/admin/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching admin data:", error.message);
    throw error;
  }
};

//
export const loginAsAdmin = async ({ KPTMYK, password }) => {
  try {
    console.log(
      "NEXT_PUBLIC_API-",
      process.env.NEXT_PUBLIC_API + "/admin/login"
    );

    const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/admin/login`, {
      KPTMYK,
      password,
    });

    console.log(res.data);
    if (res.status == 200) {
      const { name, KPTMYK, token } = res.data;
      localStorage.setItem("adminId", KPTMYK);
      localStorage.setItem("adminName", name);
      localStorage.setItem("token", token);


      window.location.href = `/admin/${KPTMYK}`;
      return res;
    }
  } catch (error) {
    console.error("Error logging in as admin:", error.message);
    throw error;
  }
  console.log(res.data);
};

//
export const registerAsAdmin = async ({
  name,
  KPTMYK,
  password,
  refferalCode,
}) => {
  try {
    // const router = Router()
    console.log(
      "NEXT_PUBLIC_API-",
      process.env.NEXT_PUBLIC_API + "/admin/register"
    );

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/admin/register`,
      { name, KPTMYK, password, refferalCode }
    );
    console.log(res);
    console.log(res.data);
    if (res.status == 200) {
      const { KPTMYK, name, token } = res.data;

      // Store data in local storage
      localStorage.setItem("adminId", KPTMYK);
      localStorage.setItem("adminName", name);
      localStorage.setItem("token", token);

      window.location.href = `/admin/${KPTMYK}`;
      return res.data;
    }
    return res.data;
  } catch (error) {
    console.error("Error in registering:", error.message);
    throw error;
  }
};

export const toggleVote = async (token) => {
  try {
    console.log("Toggle Vote fn run", token);

    if (token) {
    
    console.log("token",token);

    console.log("Toggling Profile Data");
    console.log(process.env.NEXT_PUBLIC_API + "/admin/toggle-vote-feature");

    const res = await axios.patch(process.env.NEXT_PUBLIC_API + "/admin/toggle-vote-feature",{}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    return res.data;
  }
    console.log("No token");
    return;
  
  } catch (error) {
    console.error("Error fetching admin data:", error.message);
    throw error;
  }
};

export const toggleResult = async (token) => {
  try {
    console.log("Toggle result fn run", token);

    if (token) {
    
    console.log("token",token);

    console.log("Toggling Profile Data");
    console.log(process.env.NEXT_PUBLIC_API + "/admin/toggle-result-feature");

    const res = await axios.patch(process.env.NEXT_PUBLIC_API + "/admin/toggle-result-feature",{}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    return res.data;
  }
    console.log("No token");
    return;
  
  } catch (error) {
    console.error("Error fetching admin data:", error.message);
    throw error;
  }
};
