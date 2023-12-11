import axios from "axios";
require("dotenv").config();

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

export const getOneCandidate = async ({ id }) => {
  try {
    console.log(id);
    if (!id) {
      console.log("No ID");
      return;
    }

    console.log("Fetching Profile Data");
    console.log(`${process.env.NEXT_PUBLIC_API}/xandidates/${id}`);

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

export const loginAsAdmin = async ({ KPTMYK, password }) => {
  try {
    console.log(
      "NEXT_PUBLIC_API-",
      process.env.NEXT_PUBLIC_API + "/admin/login"
    );

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/admin/login`,
      { KPTMYK, password },
      {
        Authorization: `Bearer ${user.accessToken}`,
      } // Include any necessary data for login in this object
    );

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error logging in as admin:", error.message);
    throw error;
  }
};

export const registerAsAdmin = async ({name, KPTMYK, password, refferalCode }) => {
  try {
    console.log(
      "NEXT_PUBLIC_API-",
      process.env.NEXT_PUBLIC_API + "/admin/login"
    );

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/admin/login`,
      {name, KPTMYK, password ,refferalCode}
    );

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error logging in as admin:", error.message);
    throw error;
  }
};
