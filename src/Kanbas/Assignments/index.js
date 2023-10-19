import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Kanbas/Database";
import "./index.css"


function Assignments() {
    console.log("Assignments!!");
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <ul class="list-group wd-modules-list">
                <li class=" wt-5 list-group-item-secondary">
                    Assignments

                    <div class="float-end wd-flex-row-container">
                        <div class="wd-circular-text wd-pr-5">
                            40% of Total
                        </div>


                    </div>
                </li>
                <li class="wd-green-margin">
                    <div class="wd-green-margin">
                        |
                    </div>
                    <ul class="list-group wd-modules-list">
                        {courseAssignments.map((assignment) => (
                            <li>
                                <Link
                                    key={assignment._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="list-group-item">
                                    {assignment.title}
                                </Link>

                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>

    );
}
export default Assignments;