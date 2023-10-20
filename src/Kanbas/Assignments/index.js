import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Kanbas/Database";
import "./index.css"
import { PiDotsSixVertical } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";


function Assignments() {
    console.log("Assignments!!");
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <ul class="list-group wd-modules-list p-0 m-0">
                <li class=" wt-5 list-group-item-secondary">
                    Assignments

                    <div class="float-end wd-flex-row-container">
                        <div class="wd-circular-text wd-pr-5">
                            40% of Total
                        </div>
                        <div class="wd-pl-20">
                        </div>
                        <div class="wd-pl-20 wd-pr-20">
                        </div>

                    </div>
                </li>
                <li class="wd-green-margin list-group-item">
                    <div class="wd-flex-row-container">
                        <div class="wd-green-margin">
                            |
                        </div>

                        <ul class="list-group wd-assignment-list">
                            {courseAssignments.map((assignment) => (


                                <Link

                                    key={assignment._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="list-group-item wd-style-individual-assignment">
                                    <PiDotsSixVertical />
                                    <div className="float-end">
                                        <AiFillCheckCircle />
                                    </div>


                                    {assignment.title}
                                </Link>

                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default Assignments;