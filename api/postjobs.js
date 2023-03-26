const JobsModel = require("../db/jobs.js");
const postjobs = async (req, resp) => {
  const newJob = new JobsModel({
    job_name: req.body.job_name,
    desc: req.body.desc,
    skill_required: req.body.skill_required,
    experiences: req.body.experiences,
    job_timing: req.body.job_timing,
    job_location: req.body.job_location,
    salary: req.body.salary,
  });
  const result = await newJob.save();
  if (result) {
    resp.send(result);
  }
};

module.exports = postjobs;
