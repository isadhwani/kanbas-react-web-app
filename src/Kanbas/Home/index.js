import ModuleList from "../Courses/Modules/ModulesList";
import CourseNavigation from "../CourseNavigation";
import Status from "./Status";
import "./index.css";

function Home() {
  console.log("AT HOME PAGE!!!");

  return (
    <div className="wd-flex-row-container">
      <div>
        <span>Modules</span>


        <div className="float-end wd-flex-row-container">

          <button type="button" className="btn btn-light">Collapse All</button>
          <button type="button" className="btn btn-light">View Progress</button>


          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <div className="wd-pr-5">Publish All
              </div>
            </button>

            <ul className="dropdown-menu">

            </ul>
          </div>



          <button type="button" className="btn btn-danger">
            {/* <i class="fa fa-plus " style="color: white"></i> */}
            Module</button>

          <button type="button" className="btn btn-light">
            {/* <i className="fa fa-ellipsis-v color-grey"></i> */}
          </button>
        </div>

        <br />
        <br />
        <hr />
        <div className="wd-float-left">
          <CourseNavigation />
        </div>
        <div className="wd-float-left">
          <ModuleList />
        </div>
        <div className="wd-float-left">
        <Status />
      </div>
    </div>
    </div >
  );
}
export default Home;