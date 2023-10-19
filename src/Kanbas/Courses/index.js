import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import { BsChevronUp } from "react-icons/bs";
import { LiaBarsSolid } from "react-icons/lia";
import Modules from "./Modules";
import "./index.css";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
    const { courseId } = useParams();
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];


    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div className="container">
            {/* <h1>Course {course.name}</h1> */}
            <div>
                <div className="float-end">
                    <BsChevronUp size={30} className="wd-icon Bs" />
                </div>


                <div className="wd-flex-row-container">
                    <div>
                        <LiaBarsSolid size={30} className="wd-icon  wd-pr5" />
                        {/* <i className="fa fa-bars fa-2x" style="color: tomato"></i> */}
                    </div>


                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb wd-style-breadcrumb">
                                <li className="breadcrumb-item wd-style-breadcrumb">{course._id}</li>
                                <li className="breadcrumb-item active " aria-current="page"> {lastSegment}</li>
                            </ol>
                        </nav>
                    </div>

                </div>
            </div>

            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<h1>Home</h1>} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Grades" element={<Grades />} />


                        <Route path="Assignments/:assignmentId"
                            element={<AssignmentEditor />} />

                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;