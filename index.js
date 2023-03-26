const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const dotenv = require("dotenv");
dotenv.config();

const UserModel = require("./db/User");
const JobsModel = require("./db/jobs.js");
const postjobs = require("./api/postjobs.js");
const ShowJobs = require("./api/DisplayJobs.js");

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, resp) => {
  const data = new UserModel(req.body);
  let Userdata = await data.save();
  resp.send(Userdata);
});

app.post("/api/login", async (req, resp) => {
  const data = await UserModel.findOne(req.body);
  if (data) {
    console.log(data);
    resp.send(data);
  } else {
    resp.send("data not foundd");
  }
});

app.post("/postjobs", postjobs);
app.get("/viewJobs", ShowJobs);
app.get("/job/:id", async (req, resp) => {
  const result = await JobsModel.findOne({ _id: req.params.id });
  if (result) {
    resp.send([result]);
  } else {
    resp.send({ result: "result not found" });
  }
});

app.get("/searchjobs/:key", async (req, resp) => {
  let result = await JobsModel.find({
    $or: [
      { job_name: { $regex: req.params.key } },
      { skill_required: { $regex: req.params.key } },
      { job_location: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});

app.listen(process.env.PORT);
