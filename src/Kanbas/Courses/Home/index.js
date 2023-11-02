// import ModuleList from "../Modules/ModulesList";
// import CourseNavigation from "../../CourseNavigation";
// import Status from "./Status";
// import "./index.css";
// import Courses from "..";
// import { BsChevronUp } from "react-icons/bs";
// import { LiaBarsSolid } from "react-icons/lia";
// import { useParams, useLocation } from "react-router-dom";
// import db from "../../Database";

// function Home() {

//   const { courseId } = useParams();
//   const location = useLocation();
//   const pathSegments = location.pathname.split('/');
//   const lastSegment = pathSegments[pathSegments.length - 1];
//   const course = db.courses.find((course) => course._id === courseId);


//   return (

//     <div>
//       <div className="wd-flex-row-container">



//         <div className="wd-flex-row-container">

//           <div >
//             <BsChevronUp size={30} className="wd-icon Bs" />
//           </div>

//           <div className="wd-float-left">
//             <LiaBarsSolid size={30} className="wd-icon  wd-pr5" />
//             {/* <i className="fa fa-bars fa-2x" style="color: tomato"></i> */}
//           </div>


//           <div className="wd-float-left">
//             <nav aria-label="breadcrumb">
//               <ol className="breadcrumb wd-style-breadcrumb">
//                 <li className="breadcrumb-item wd-style-breadcrumb">{course._id}</li>
//                 <li className="breadcrumb-item active " aria-current="page"> {lastSegment}</li>
//               </ol>
//             </nav>
//           </div>

//         </div>
//       </div>
//       <div>

//         <div className="float-end wd-flex-row-container">

//           <button type="button" className="btn btn-light">Collapse All</button>
//           <button type="button" className="btn btn-light">View Progress</button>


//           <div className="dropdown">
//             <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
//               aria-expanded="false">
//               <div className="wd-pr-5">Publish All
//               </div>
//             </button>

//             <ul className="dropdown-menu">

//             </ul>
//           </div>



//           <button type="button" className="btn btn-danger">
//             {/* <i class="fa fa-plus " style="color: white"></i> */}
//             Module</button>

//           <button type="button" className="btn btn-light">
//             {/* <i className="fa fa-ellipsis-v color-grey"></i> */}
//           </button>
//         </div>

//         <br />
//         <br />
//         <hr />
//         <div className="wd-float-left">
//           <CourseNavigation />
//         </div>
//         <div className="wd-float-left">
//           <ModuleList />
//         </div>
//         <div className="wd-float-left">
//           <Status />
//         </div>
//       </div>
//     </div >
//   );
// }
// export default Home;
import Modules from "../Modules";
import Courses from "../../Courses";
import Status from "./Status";
import db from  "../../Database";
import { useState } from "react";
function Home() {
  const [courses, setCourses] = useState(db.courses);

  return (
    <div>

      <div className="float-end wd-flex-row-container">
        <Courses courses={courses}/>
        <br/>


        <Modules />
        <Status />
      </div>
    </div>
  );
}
export default Home;