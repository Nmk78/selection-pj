import axios from "axios";
require("dotenv").config();

//
export const getAllCandidates = async () => {
  try {
    console.log(process.env.NEXT_PUBLIC_API, "/candidates");
    const res = await axios.get(process.env.NEXT_PUBLIC_API + "/candidates");
    // console.log(res);
    return res;
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
    return res;
  } catch (error) {
    console.error("Error fetching candidate:", error.message);
    throw error;
  }
};
export const getResult = async () => {
  try {
    console.log("Fetching Result");
    console.log(process.env.NEXT_PUBLIC_API + "/voter/result/");

    const res = await axios.get(process.env.NEXT_PUBLIC_API + "/voter/result/");
    console.log(res.data);
    return res;
  } catch (error) {
    console.error("Error fetching candidate:", error.message);
    throw error;
  }
};

//
export const loginAsAdmin = async (token, { KPTMYK, password }) => {
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
export const registerAsAdmin = async (
  token,
  { name, KPTMYK, password, refferalCode }
) => {
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
    return res;
  } catch (error) {
    console.error("Error in registering:", error.message);
    throw error;
  }
};

//
export const check = async (token, { KPTMYK, name, secret }) => {
  try {
    console.log("Getting User data via ID");
    if (!KPTMYK) {
      console.log("No KPTMK");
      return;
    }

    console.log("Fetching user Data");
    console.log(`${process.env.NEXT_PUBLIC_API}/voter/${KPTMYK}`);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/voter/${KPTMYK}`,
      {
        KPTMYK: KPTMYK,
        name: name,
        secret: secret,
      }
    );
    console.log(res.data);
    return res;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};

// token needs
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
    return res;
  } catch (error) {
    console.error("Error fetching admin data:", error.message);
    throw error;
  }
};

//
export const toggleVote = async (token) => {
  try {
    console.log("Toggle Vote fn run", token);

    if (token) {
      console.log("token", token);

      console.log("Toggling Profile Data");
      console.log(process.env.NEXT_PUBLIC_API + "/admin/toggle-vote-feature");

      const res = await axios.patch(
        process.env.NEXT_PUBLIC_API + "/admin/toggle-vote-feature",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      return res;
    }
    console.log("No token");
    return;
  } catch (error) {
    console.error("Error fetching admin data:", error.message);
    throw error;
  }
};

//
export const toggleResult = async (token) => {
  try {
    console.log("Toggle result fn run", token);

    if (token) {
      console.log("token", token);

      console.log("Toggling Profile Data");
      console.log(process.env.NEXT_PUBLIC_API + "/admin/toggle-result-feature");

      const res = await axios.patch(
        process.env.NEXT_PUBLIC_API + "/admin/toggle-result-feature",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      return res;
    }
    console.log("No token");
    return;
  } catch (error) {
    console.error("Error fetching admin data:", error.message);
    throw error;
  }
};

//
export const loadInitialData = async (token) => {
  try {
    console.log(" Loading Initial Data", token);

    if (token) {
      console.log("token", token);

      console.log("Toggling Profile Data");
      console.log(process.env.NEXT_PUBLIC_API + "/admin/config");

      const res = await axios.post(
        process.env.NEXT_PUBLIC_API + "/admin/config",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      return res;
    }
    console.log("No token");
    return;
  } catch (error) {
    console.error("Error in loading initial data:", error.message);
    throw error;
  }
};

//
export const addStudentVoter = async (
  token,
  { KPTMYK, name, section, secret }
) => {
  console.log("Add stu Voter Fn");
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API + "/admin/new/voter",
      {
        KPTMYK,
        name,
        secret,
        section,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error("Error adding student voter:", error.message);
    throw error;
  }
};

//
export const addPublicVoter = async (token, { secret }) => {
  console.log("Add public Voter fn");
  console.log("Token = ", token);
  console.log("secret", secret);

  if (!token) {
    console.log("No token");
    return;
  }
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API + "/admin/new/public-voter",
      {
        secret,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error("Error adding student voter:", error.message);
    throw error;
  }
};
//
export const addCandidate = async (
  token,
  {
    name,
    KPTMYK,
    password,
    section,
    gender,
    intro,
    height,
    weight,
    refferalCode,
    hobbies,
    profilePic,
    imageUrls,
  }
) => {
  console.log("addCandidate fn");
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API + "/admin/new/candidate",
      {
        name,
        KPTMYK,
        password,
        section,
        gender,
        intro,
        height,
        weight,
        refferalCode,
        hobbies,
        profilePic,
        imageUrls,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error("Error adding student voter:", error.message);
    throw error;
  }
};

export const restart = async (token) => {
  try {
    console.log("Restart fn run", token);

    if (token) {
      console.log("token", token);

      console.log(process.env.NEXT_PUBLIC_API + "/admin/restart");

      const res = await axios.delete(
        process.env.NEXT_PUBLIC_API + "/admin/restart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      return res;
    }
    console.log("No token");
    return;
  } catch (error) {
    console.error("Error fetching admin data:", error.message);
    throw error;
  }
};
