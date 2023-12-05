import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import "./index.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Home from "./Courses/Home";
import Assignments from "./Courses/Assignments";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import Signin from "./users/signin";
import UserTable from "./users/table";
import Account from "./users/account";
import Signup from "./users/signup";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  //const URL = "https://kanbas-node-server-app-2-w4ae.onrender.com/api/courses"
  const URL = "http://localhost:4000/api/courses";

  const findAllCourses = async () => {
    console.log("findAllCourses")
    const response = await axios.get(URL);
    console.log("found courses: ", response.data)
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  const deleteCourse = async (courseId) => {
    console.log("deleteCourse: ", courseId)
    const response = await axios.delete(
      `${URL}/${courseId.$oid}`
    );
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };


  const updateCourse = async () => {
    console.log("updating course!")
    console.dir(course)
    console.log("updateCourse: ", JSON.stringify(course))
    const response = await axios.put(
      `${URL}/${course._id.$oid}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    //setCourse({ name: "" });
  };


  return (
    <Provider store={store}>
    <div className="wd-kanbas-page d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          {/* <Route path="Account" element={<Account />} /> */}
          <Route path="Dashboard" element={<Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse} />} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="Home/:courseId/*" element={<Home />} />
          <Route path="Courses/:courseId/Home" element={<Home />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
          <Route path="/account/signin" element={<Signin />} />
          <Route path="/account/signup" element={<Signup />} />

          
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          {/* <Route path="Calendar" element={<h1>Calendar</h1>} /> */}
        </Routes>
      </div>
    </div>
    </Provider>
  );
}

export default Kanbas;