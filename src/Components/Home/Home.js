import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Home.css";
import img from "./Doodle.png";

const HomePage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    let data = await fetch("http://localhost:5000/viewJobs");
    data = await data.json();
    console.log(data);
    if (data) {
      setJobs(data);
    } else {
      console.log("error occured");
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let datasearched = await fetch(`http://localhost:5000/searchjobs/${key}`);
      datasearched = await datasearched.json();
      if (datasearched) {
        setJobs(datasearched);
      }
    } else {
      getJobs();
    }
  };

  return (
    <div>
      <div className="doodle-container">
        <img src={img} alt="doodle" />
      </div>
      <div className="search-bar-container">
        <div className="search-icon">
          <FaSearch className="icon" />
        </div>
        <label>
          <i className="placeholder">search jobs here...</i>
          <input type="text" className="searchbox" onChange={searchHandle} />
        </label>
      </div>

      <div className="jobs-container">
        {jobs.map((singledata) => (
          <div className="job-details">
            <Link to={"/getjobs/" + singledata._id}>
              <h3>{singledata.job_name}</h3>
            </Link>
            <Link to={"/jobs/" + singledata._id}>
              <h5>Job-location : {singledata.job_location}</h5>
            </Link>
            <Link to={"/jobs/" + singledata._id}>
              <h6>salary : {singledata.salary}</h6>
            </Link>
          </div>
        ))}
      </div>
      <footer>
        <div className="footer-end">
          <h4>Copyrights © 2018-2020 NIET HOSTEL</h4>
          <div className="company-link">
            <h4>Designed by </h4>
            <a target="_blank" href="http://inkubis.in">
              <h3>ThreeBuddies Pvt. Ltd.</h3>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;
