import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./Jobs.css";
const Jobs = () => {
  const params = useParams();
  const [jobdata, setJobdata] = useState([]);
  const [applyjob, setApplyjob] = useState(false);

  useEffect(() => {
    getJobdata();
  }, []);

  const getJobdata = async () => {
    let result = await fetch(`http://localhost:5000/job/${params.id}`);
    result = await result.json();
    console.log(result);
    if (result) {
      setJobdata(result);
    } else {
      console.log("error ocurred");
    }
  };
  const ApplyForJob = () => {
    setApplyjob(true);
  };
  return (
    <div className="job-main-container">
      {jobdata.map((datas) => (
        <div className="job-one">
          <h1>Apply here):</h1>
          <div className="job-title">
            <h2>&nbsp;&nbsp;&nbsp;{datas.job_name}</h2>

            <h2>{datas.salary}</h2>

            <h2>{datas.job_timing}</h2>
          </div>
          <div className="button-heart">
            <button
              type="button"
              className="job-apply-button"
              onClick={ApplyForJob}
            >
              <b>Apply now</b>
            </button>
            <div className="heart-icon">
              <AiFillHeart />
            </div>
          </div>

          <div className="job-desc">
            <h3>Description :-</h3>
            <h2>&nbsp;&nbsp;&nbsp;{datas.desc}</h2>
          </div>

          <div className="job-skill">
            <h3>Skill required :-</h3>
            <h2>{datas.skill_required}</h2>
          </div>

          <div className="job-expe">
            <h3>Past Experiences :-</h3>
            <h2>{datas.experiences}</h2>
          </div>

          <div className="job-location">
            <h3>Job location :-</h3>
            <h2>{datas.job_location}</h2>
          </div>
        </div>
      ))}
      {applyjob && (
        <section className="job-apply-section">
          <b>
            <i>Applying for</i>
          </b>
          {jobdata.map((singledata) => (
            <h3>{singledata.job_name}</h3>
          ))}
        </section>
      )}
    </div>
  );
};

export default Jobs;
