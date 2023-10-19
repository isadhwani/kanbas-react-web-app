import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panpoto Video", "Credentials", "Progress Reports"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div class="wd-float-left">

            <ul className="wd-second-column">
                {links.map((link, index) => (
                    <li className={`${pathname.includes(link) && "wd-kanbas-second-column-selected"}`}>

                        {pathname.includes(link) && <div class="wd-black-margin"> |</div>
                        }
                        <Link
                            key={index}
                            {...courseId ? (
                                { to: `/Kanbas/Courses/${courseId}/${link}` }
                            ) : (
                                { to: `/Kanbas/${link}` }
                            )} className={`list-group-item ${pathname.includes(link) && "active"}`}>
                            {link}
                        </Link>
                    </li>

                ))}
            </ul>
        </div>
    );

}


export default CourseNavigation;
