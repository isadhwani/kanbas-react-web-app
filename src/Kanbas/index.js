import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import "./index.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Home from "./Home";
import Assignments from "./Assignments";

function Kanbas() {
  return (
    <div className="wd-kanbas-page d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          {/* <Route path="Account" element={<Account />} /> */}
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Home/:courseId/*" element={<Home />} />
          <Route path="Courses/:courseId/Home" element={<Home/>} />
          <Route path="Assignments" element={<Assignments/>} />
          <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>}/>




          {/* <Route path="Calendar" element={<h1>Calendar</h1>} /> */}
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;