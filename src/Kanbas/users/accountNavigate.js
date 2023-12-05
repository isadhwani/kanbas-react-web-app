import "../CourseNavigation/index.css"
import { Link, useParams, useLocation } from "react-router-dom";

export function AccountNavigate() {

    const links = ["signin", "signup"]
    const { courseId } = useParams();
    const { pathname } = useLocation();

    return (
        <div class="wd-float-left ">

            <ul className="wd-second-column">
                {links.map((link, index) => (
                    <li className={`${pathname.includes(link) && "wd-kanbas-second-column-selected"}`}>

                        {pathname.includes(link) && <div class="wd-black-margin"> |</div>
                        }
                        <Link
                            key={index}
                            {...courseId ? (
                                { to: `/Kanbas/Account/${link}` }
                            ) : (
                                { to: `/Kanbas/Account/${link}` }
                            )} className={`list-group-item ${pathname.includes(link) && "active"}`}>
                            {link}
                        </Link>
                    </li>

                ))}
            </ul>
        </div>
    );
    
}