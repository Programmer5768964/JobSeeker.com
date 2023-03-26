import "./Sidebar.css";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import img from "./Home/Doodle.png";
import {
  FaHome,
  FaBars,
  FaUser,
  FaBeer,
  FaBriefcase,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiCog, BiAnalyse, BiSearch, BiServer } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BsAlarm, BsPersonFillAdd } from "react-icons/bs";

import { CgProfile, CgLogOut, CgLogIn } from "react-icons/cg";
import { BiCoinStack } from "react-icons/bi";

import { BsCartCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const routes = [
  {
    path: "/signup",
    name: "SignUp",
    icon: <FaBeer />,
  },
  {
    path: "/login",
    name: "Login",
    icon: <FaBeer />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [PvtSection, setPvtSection] = useState([]);
  useEffect(() => {
    var user = localStorage.getItem("user");
    user = JSON.parse(user);
    if (user && user.email != null) {
      if (user.Access === "Owner") {
        setPvtSection([
          {
            path: "/postjob",
            name: "PostJobs",
            icon: <HiUserGroup />,
          },
        ]);
      } else if (user.Access === "Developer") {
        setPvtSection([
          {
            path: "/DB",
            name: "DB",
            icon: <BiCoinStack />,
          },
          {
            path: "/profile",
            name: "Profile",
            icon: <CgProfile />,
          },
        ]);
      } else if (user.Access === "user") {
        setPvtSection([
          {
            path: "/profile",
            name: "Profile",
            icon: <CgProfile />,
          },
        ]);
      }
    } else {
      setPvtSection([
        {
          path: "/signup",
          name: "SignUp",
          icon: <CgLogIn />,
        },
        {
          path: "/login",
          name: "Login",
          icon: <CgLogIn />,
        },
      ]);
    }
  }, [localStorage.getItem("user")]);
  const routes = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },

    {
      path: "/contactus",
      name: "ContactUs",
      icon: <FaPhoneAlt />,
    },
    ...PvtSection,
  ];
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="main-container">
      <motion.div
        animate={{ width: isOpen ? "200px" : "40px" }}
        className="Sidebar"
      >
        <div className="top_section">
          {isOpen && <img src={img} alt="logo" className="logo" />}

          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <section className="routes">
          {routes.map((route) => (
            <NavLink
              activeClassName="active"
              className="link"
              to={route.path}
              key={route.name}
            >
              <div className="icon">{route.icon}</div>
              {isOpen && <div className="link_text">{route.name}</div>}
            </NavLink>
          ))}
          {localStorage.getItem("user") ? (
            <Link
              activeClassName="active"
              className="link"
              onClick={() => {
                localStorage.clear();
              }}
              to="/signup"
            >
              <div className="icon">
                <CgLogOut />
              </div>
              {isOpen && <div className="link_text">LogOut</div>}
            </Link>
          ) : (
            <></>
          )}
        </section>
      </motion.div>
      <main>{children}</main>
      {/* <section className="top-bar"> */}
      {/* <h1 className="inner-content">Top-Bar</h1> */}
      {/* <button className="btn6" onClick={logout}> */}
      {/* Logout */}
      {/* </button> */}
      {/* </section> */}
    </div>
  );
};

export default Sidebar;
