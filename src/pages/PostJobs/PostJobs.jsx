import React, { useEffect, useState } from "react";

import "./PostJobs.css";

const PostJobs = () => {
  const [job_name, setJob_name] = useState("");
  const [desc, setDesc] = useState("");
  const [skill_required, setSkill_required] = useState("");
  const [experiences, setExperiences] = useState("");
  const [job_timing, setJob_timing] = useState("");
  const [job_location, setJob_location] = useState("");
  const [salary, setSalary] = useState("");

  const PostJobs = async () => {
    let result = await fetch("http://localhost:5000/postjobs", {
      method: "post",
      body: JSON.stringify({
        job_name,
        desc,
        skill_required,
        experiences,
        job_timing,
        job_location,
        salary,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div>
      <form className="post-job-form">
        <input
          type="text"
          placeholder="Enter Job name"
          className="input-Boxes"
          value={job_name}
          onChange={(e) => setJob_name(e.target.value)}
        />
        <textarea
          rows={10}
          cols={20}
          className="text-area"
          placeholder="Enter Job Desciption"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Job skill required"
          className="input-Boxes"
          value={skill_required}
          onChange={(e) => setSkill_required(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Job Experiences"
          className="input-Boxes"
          value={experiences}
          onChange={(e) => setExperiences(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Job location"
          className="input-Boxes"
          value={job_location}
          onChange={(e) => setJob_location(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Job timing"
          className="input-Boxes"
          value={job_timing}
          onChange={(e) => setJob_timing(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Job salary"
          className="input-Boxes"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <button type="button" className="btn" onClick={PostJobs}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostJobs;
