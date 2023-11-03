import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
  assignments: db.assignments,
  assignment: { title: "New Assignment 123", course: "New Description", dueDate: "2021-09-01",
   availableFromDate: "2021-08-01", availableUntilDate: "2021-12-01", _id: new Date().getTime().toString(), isNew: true,}
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload,  },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      console.log("before deleting: " + state.assignments.length)
      console.log("deleting assignment: " + action.payload._id)
      
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload._id
      );
      console.log("after deleting: " + state.assignments.length)
    },
    updateAssignment: (state, action) => {
      state.asssignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setAssignment: (state, action) => {      
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;

