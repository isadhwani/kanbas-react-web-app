import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard() {
    const courses = db.courses;
    return (
        <div className="wd-left-margin">

            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <div class="d-flex flex-row flex-wrap wd-left-margin">
                {courses.map((course, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 wd-card-style">
                        <div className="card">
                        <img src={require("./177b63 2.png")} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>

                                <Link
                                    key={course._id}
                                    to={`/Kanbas/Courses/${course._id}`}
                                    className="btn btn-primary"
                                >
                                    {course.name}
                                </Link>
                                <p className="card-text">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Dashboard;