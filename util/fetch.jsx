import axios from "axios";
require('dotenv').config();


export const getAllCandidates = async () => {
  try {
      console.log("API-",process.env.API);
    const res = await axios.get(process.env.API || 'https://jsonplaceholder.typicode.com/todos/');
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching candidates:", error.message);
    throw error; 
  }
};


export const getOneCandidate = async ({id}) => {
  try {
    
      console.log("API-",process.env.API);
      const res = await axios.get(process.env.API + id || 'https://jsonplaceholder.typicode.com/todos/123');
      console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching candidate:", error.message);
    throw error; 
  }
};

export const getOneUser = async ({id}) => {
  try {
      console.log("API-",process.env.API);
    const res = await axios.get(process.env.API + id || 'https://jsonplaceholder.typicode.com/todos/' + id);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching candidate:", error.message);
    throw error; 
  }
};




