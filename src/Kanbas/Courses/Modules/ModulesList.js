import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div>
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <ul class="list-group">
                            <li key={index} className="list-group-item list-group-item-secondary">


                                <span>{module.name}</span>

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
        </div>
    );
}
export default ModuleList;