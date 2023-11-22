import db from "../Database";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import "./index.css";

function Dashboard(
    { courses, course, setCourse, addNewCourse,deleteCourse, updateCourse }
    ) {


    return (
        <div className="wd-left-margin">

            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})
                <button  type="button" className="btn btn-primary wd-width-full" onClick={addNewCourse} >
                    Add
                </button>
                <button  type="button" className="btn btn-secondary wd-width-full"
                onClick={updateCourse} >
                    Update
                </button>

            </h2>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <br />

            <div className="d-flex flex-row flex-wrap wd-left-margin">

                {courses.map((course, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 wd-card-style">
                        <div className="card wd-card-style text-center">
                            <img src={require("./177b63 2.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>

                                <Link
                                    key={course._id}
                                    to={`/Kanbas/Courses/${course.number}`}
                                    className="btn btn-primary">
                                    {course.name}
                                </Link>
                                <p className="card-text">
                                    {course.number}

                                </p>
                            </div>

                            <div className="d-flex flex-row text-center ">

                                <button type="button" className="btn btn-secondary wd-width-full"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                    Edit
                                </button>


                                <button type="button" className="btn btn-danger wd-width-full"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                    Delete
                                </button>
                            </div>



                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Dashboard;