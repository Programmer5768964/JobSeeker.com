const mongoose = require("mongoose");
const JobsSchema = new mongoose.Schema({
  job_name: String,
  desc: String,
  skill_required: String,
  experiences: String,
  job_timing: String,
  job_location: String,
  salary: String,
});

const JobsModel = mongoose.model("jobs", JobsSchema);
module.exports = JobsModel;
