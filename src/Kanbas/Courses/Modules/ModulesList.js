import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.moduleReducer.modules);
    const module = useSelector((state) => state.moduleReducer.module);
    const dispatch = useDispatch();

    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };


    console.log("Modules: " + modules);
    console.dir(modules)
    console.log("CourseId: " + courseId);

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button className="btn btn-primary float-end"

                    onClick={handleAddModule}>
                    Add
                </button>

                <button className="btn btn-secondary float-end"
                    onClick={handleUpdateModule}>

                    Update
                </button>

                <form>
                    <div class="form-group">
                        <textarea value={module.name}
                            onChange={(e) =>
                                dispatch(setModule({ ...module, name: e.target.value }))}></textarea>
                    </div>

                    <div class="form-group">
                        <textarea value={module.description}
                            onChange={(e) =>
                                dispatch(setModule({ ...module, description: e.target.value }))

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
                                    onClick={() => handleDeleteModule(module._id)}
                                >
                                    Delete
                                </button>

                                <button className="btn btn-secondary float-end"
                                    onClick={() => dispatch(setModule(module))}>
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