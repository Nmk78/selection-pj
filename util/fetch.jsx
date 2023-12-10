import axios from "axios";
require('dotenv').config();


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


export const getOneCandidate = async ({id}) => {
  try {
    console.log(id);
    
      const res = await axios.get(process.env.NEXT_PUBLIC_NEXT_PUBLIC_API + id);
      console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching candidate:", error.message);
    throw error; 
  }
};

export const getOneUser = async ({id}) => {
  try {
      console.log("NEXT_PUBLIC_API-",process.env.NEXT_PUBLIC_API);
    const res = await axios.get(process.env.NEXT_PUBLIC_API + id);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching candidate:", error.message);
    throw error; 
  }
};




