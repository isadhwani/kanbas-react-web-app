import { Link } from "react-router-dom";
import "./index.css";
import { AiFillCalendar } from "react-icons/ai";

function Status() {
    return (
        <div class="wd-flex-row-container">
            <div class="wd-float-left float-end d-none d-xxl-block">

                <div className="container">
                    Course Status <br />


                    <div className="float-end wd-flex-row-container">

                        <button type="button" className="btn btn-light wd-button-style">
                            <div class="wd-flex-row-container">

                                {/* <div> <i class="fa fa-ban" style="color: grey"></i> */}
                                {/* </div> */}

                                <div>
                                    Unpublish
                                </div>
                            </div>
                        </button>

                        <button type="button" className="btn btn-success wd-button-style">
                            <div className="wd-flex-row-container">

                                {/* <div> <i class="fa fa-check" style="color: white"></i> </div> */}

                                <div>
                                    Publish
                                </div>
                            </div>
                        </button>
                    </div>

                    <br />
                    <br />
                    <br />


                    <ul className="list-group wd-course-status-list">
                        <li className="list-group-item">
                            <div className="wd-flex-row-container">

                                {/* <div> <i class="fa fa-file-import wd-pr-5"></i>
                                </div> */}

                                <div>
                                    Import Exisiting Content
                                </div>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <div className="wd-flex-row-container">

                                {/* <div> <i className="fa fa-file-import wd-pr-5"></i>
                                </div> */}

                                <div>
                                    Import From Commons
                                </div>
                            </div>
                        </li>



                        <li className="list-group-item">
                            <div className="wd-flex-row-container">

                                {/* <div> <i class="fa fa-bullseye wd-pr-5"></i>
                                </div> */}

                                <div>
                                    Choose Home Page
                                </div>
                            </div>
                        </li>



                        <li className="list-group-item">
                            <div className="wd-flex-row-container">

                                {/* <div> <i class="fa fa-chart-bar wd-pr-5"></i>
                                </div> */}

                                <div>
                                    View Course Stream
                                </div>
                            </div>

                        </li>

                        <li className="list-group-item">
                            <div className="wd-flex-row-container">

                                {/* <div> <i class="fa fa-scroll wd-pr-5"></i>
                                </div> */}

                                <div>
                                    New Announcement
                                </div>
                            </div>

                        </li>


                        <li className="list-group-item">
                            <div className="wd-flex-row-container">

                                {/* <div> <i class="fa fa-chart-bar wd-pr-5"></i>
                                </div> */}

                                <div>
                                    New Analytics
                                </div>
                            </div>

                        </li>


                        <li className="list-group-item">
                            <div className="wd-flex-row-container">

                                <div> <i class="fa fa-bell wd-pr-5"></i>
                                </div>

                                <div>
                                    View Course Notifications
                                </div>
                            </div>

                        </li>
                    </ul>

                    To Do
                    <hr />
                    <div className="wd-pl-20 wd-flex-row-container">
                        {/* <div>
                            <i class="fa fa-circle-exclamation wd-pr-5" style="color:tomato;"></i>
                        </div> */}

                        <div>
                            <div className="wd-link-style">
                                <Link
                                    Grade A1-ENV-HTML />
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="wd-flex-row-container">
                        <div>Coming Up</div>

                        <div class="wd-pl-50">
                            <AiFillCalendar />
                        </div>

                        <div className=" wd-link-style">
                            View Calendar
                        </div>
                    </div>

                    <hr />
                    <div className="wd-pl-20 wd-flex-row-container">
                        <div>
                            <AiFillCalendar />
                        </div>

                        <div>
                            <div className="wd-link-style">
                                Lecture
                            </div>
                        </div>
                    </div>
                    <div className="wd-subtext">
                        CS4550 12611 202410
                    </div>
                    <div className="wd-subtext">
                        September 11 at 11:59PM
                    </div>

                    <div className="wd-pl-20 wd-flex-row-container">
                        <div>
                            <AiFillCalendar />
                        </div>

                        <div>
                            <div className="wd-link-style">
                                CS4550  SP2023 Lecutre
                            </div>
                        </div>
                    </div>
                    <div className="wd-subtext">
                        CS4550 12611 202410
                    </div>
                    <div className="wd-subtext">
                        September 11 at 7PM
                    </div>





                    <div class="wd-pl-20 wd-flex-row-container">
                        {/* <div>
                            <i class="fa fa-calendar wd-pr-5"></i>
                        </div> */}

                        <div>
                            <div class="wd-link-style">
                                <Link CS5610 Web Development />
                            </div>
                        </div>
                    </div>
                    <div class="wd-subtext">
                        CS4550 12611 202410
                    </div>
                    <div class="wd-subtext">
                        September 11 at 7pm
                    </div>

                </div>



            </div>
        </div>
    );
}

export default Status;
