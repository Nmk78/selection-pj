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
            guide: {
              voterRoutes: {
                  getResult: "/voter/result",
                  getAllVoters: "/voter/",
                  getOneVoters: "/voter/:id",
                  vote: "/voter/vote",
                  publicVote: "/voter/public/vote",
              },
              candidateRoutes: {
                  getAllCandidate:"/candidates/",
                  getOneCandidate:"/candidates/:id",
              },
              adminRoutes: {
                  loginAdmin:"/admin/login",
                  restart:"/admin/restart",
                  addConfigData:"/admin/config",
                  getAllAdmin:"/admin",
                  getOneAdmin:"/admin/:id",
                  registerAdmin:"/admin/register",
                  toggleVote:"/admin/toggle-vote-feature",
                  toggleResult:"/admin/toggle-result-feature",
                  addNewCandidate:"/admin/new/candidate",
                  addNewVoter:"/admin/new/voter",
                  addNewPublicVoter:"/admin/new/public-voter",

              },
              
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