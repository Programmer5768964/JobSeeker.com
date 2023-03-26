import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

import SignUp from "./Components/signup";
import Login from "./Components/auth/login";
import PostJobs from "./pages/PostJobs/PostJobs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Jobs from "./pages/Jobs/Jobs";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Components/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
var auth = localStorage.getItem("user");
auth = JSON.parse(auth);
root.render(
  <div>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/getjobs/:id" element={<Jobs />} />
          {auth ? (
            <>
              {auth.Access === "Owner" ? (
                <Route path="/postjob" element={<PostJobs />} />
              ) : (
                <>
                  {auth.Access === "Developer" ? (
                    <Route
                      path="/DB"
                      element={<h1>this is Database section</h1>}
                    />
                  ) : (
                    <></>
                  )}
                </>
              )}
              <Route path="/profile" element={<h1>Profile</h1>} />
            </>
          ) : (
            <></>
          )}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
