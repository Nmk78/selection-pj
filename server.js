const express = require("express")
const cors = require("cors")
const connectDB = require("./dbConnection")
require('dotenv').config();

const app = express();

connectDB();

app.get("/",(req,res)=>{
      res.status(200).json({
            message: "Welcome",
            guide: {
              userRoutes: "/",
              
            },
      })
})

app.use((req, res, next) => {
      console.log(req.path, req.method);
      next();
    });

app.use(express.json());
app.use(cors());



app.listen(4000,()=>{
      console.log("\x1b[32m","Server is running");
})