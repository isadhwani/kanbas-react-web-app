import moduleReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    moduleReducer,
    assignmentsReducer,
  }
});


export default store;