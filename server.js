const express = require("express")
const cors = require("cors")
const connectDB = require("./dbConnection")
require('dotenv').config();

const candiates = require("./Routes/candidate");
const voter = require("./Routes/voter");
const admin = require("./Routes/admin");

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
      console.log("\x1b[33m", req.path, req.method);
      next();
    });

app.use(express.json());
app.use(cors());


app.use("/voter", voter)
app.use("/candidates", candiates)
app.use("/admin", admin)


app.listen(4000,()=>{
      console.log("\x1b[32m","Server is running");
})