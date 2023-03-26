const JobsModel = require("../db/jobs.js");
const ShowJobs = async (req, resp) => {
  const jobs = await JobsModel.find({});
  if (jobs) {
    resp.send(jobs);
  } else {
    resp.send({ result: "job not found" });
  }
};

module.exports = ShowJobs;
