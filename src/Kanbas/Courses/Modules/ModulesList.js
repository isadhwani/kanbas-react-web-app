import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModules,
} from "./modulesReducer";
import { useEffect } from "react";


import { findModulesForCourse } from "./client";

function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);
    const modules = useSelector((state) => state.moduleReducer.modules);
    const module = useSelector((state) => state.moduleReducer.module);
    const dispatch = useDispatch();

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button className="btn btn-primary float-end"
                    onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                    Add
                </button>

                <button className="btn btn-secondary float-end"
                    onClick={() => dispatch(updateModule(module))}>
                    Update
                </button>

                <form>
                    <div class="form-group">
                        <textarea value={module.name}
                            onChange={(e) =>
                                dispatch(setModules({ ...module, name: e.target.value }))}></textarea>
                    </div>

                    <div class="form-group">
                        <textarea value={module.description}
                            onChange={(e) =>
                                dispatch(setModules({ ...module, description: e.target.value }))

                            }></textarea>

                    </div>
                </form>


            </li>

            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <ul class="list-group">
                            <li key={index} className="list-group-item list-group-item-secondary">

                                <span>{module.name}</span>
                                <button className="btn btn-danger float-end"
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                </button>

                                <button className="btn btn-secondary float-end"
                                    onClick={() => dispatch(setModules(module))}>
                                    Edit
                                </button>



                            </li>
                            <li className="list-group-item">
                                <span class="float-start">
                                    <PiDotsSixVerticalBold />
                                </span>
                                <span>{module.description}</span>
                                <span className="float-end">
                                    <AiFillCheckCircle style={{ color: 'green' }} />
                                    <AiOutlinePlus />
                                </span>
                            </li>
                            <br />

                        </ul>

                    ))
            }
        </ul>
    );
}
export default ModuleList;