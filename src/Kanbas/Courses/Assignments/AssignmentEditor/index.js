import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, setAssignment, updateAssignment, deleteAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
  const dispatch = useDispatch();
  const { assignmentId } = useParams();

  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const newAssignment = useSelector((state) => state.assignmentsReducer.assignment);

  //const dbAssignment = assignments.find(
  // (assignment) => assignment._id === assignmentId);

  //console.log(assignment)


  const { courseId } = useParams();

  let assignment;
  if (newAssignment.isNew === true) {
    assignment = newAssignment;
  } else {
    assignment = assignments.find(
      (assignment) => assignment._id === assignmentId)
  }


  // const navigate = useNavigate();

  // let isNew = false;

  // let assignment;

  // if (dbAssignment === undefined) {
  //   assignment = newAssignment;
  //   isNew = true;
  // } else {
  //   assignment = dbAssignment;
  //   isNew = false
  // }

  // dispatch(setAssignment(assignment))
  // console.log("Assignment:" + assignment)


  return (
    <div>
      <h2>Assignment Name</h2>

      <form>

        <label for="Title">Title:</label>
        <div class="form-group">
          <textarea id="title" value={assignment.title}
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, title: e.target.value }))}>
          </textarea>
        </div>


        <label for="description">Description:</label>
        <div class="form-group">
          <textarea id="description" value={assignment.description}
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, description: e.target.value }))
            }>

          </textarea>
        </div>

        <label for="points">Points</label>
        <div class="form-group">
          <textarea value={assignment.points}
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, points: e.target.value }))
            }>

          </textarea>
        </div>

        <label for="due">Due</label>
        <div class="form-group">
          <input id="due" value={assignment.dueDate}
            type="date"
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
            }>
          </input>
        </div>


        <label for="available-from">Available From</label>
        <div class="form-group">
          <input id="available-from" value={assignment.availableFromDate}
            type="date"
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))
            }>
          </input>
        </div>

        <label for="available-until">Available Until</label>
        <div class="form-group">
          <input id="available-until" value={assignment.availableUntilDate}
            type="date"
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))
            }>
          </input>
        </div>



        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger">
          Cancel
        </Link>



        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-primary"
          onClick={() => { dispatch(updateAssignment(assignment)) }}>
          Save
        </Link>


      </form>
    </div>
  );
}


export default AssignmentEditor;