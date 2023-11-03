import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../../Kanbas/Database";
import "./index.css"
import { PiDotsSixVertical } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
import { Provider } from "react-redux";
import store from "../../../Kanbas/store";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, setAssignment, updateAssignment } from "./assignmentsReducer";
import { useState } from "react";


function Assignments() {
    const dispatch = useDispatch();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const newAssignment = useSelector((state) => state.assignmentsReducer.assignment);

    const { courseId } = useParams();
    //const assignments = db.assignments;
    const [courseAssignments, setAssignments] = useState(assignments.filter(
        (a) => a.course === courseId));



    return (
        <Provider store={store}>
            <div>
                <h2>Assignments for course {courseId}</h2>
                <ul class="list-group wd-modules-list p-0 m-0">
                    <li class=" wt-5 list-group-item-secondary">
                        Assignments
                        <br />

                        <Link
                            key={newAssignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${newAssignment._id}`}
                            className="list-group-item wd-style-individual-assignment">
                            <button className="btn btn-primary float-end"
                                onClick={() => dispatch(addAssignment({ ...newAssignment, course: courseId }))}>
                                Add
                            </button>
                        </Link>

                        {/* <div className="wd-flex-row-container">
                            <button className="btn btn-primary wd-pr-5"
                                                onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}>
                                                Add new assignment
                            </button>
                        </div> */}

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
                    <li class="list-group-item">
                        <div class="wd-flex-row-container">
    
                            <ul class="list-group wd-assignment-list">
                                {courseAssignments.map((assignment, assignmentIndex) => (
                                    <li>
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

                                        <button className="btn btn-danger float-end"
                                            onClick={() => dispatch(deleteAssignment(assignment)) && setAssignments(assignments.filter(
                                                (a) => a.course === courseId))}>
                                            Delete
                                           
                                        </button>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </Provider >
    );
}
export default Assignments;