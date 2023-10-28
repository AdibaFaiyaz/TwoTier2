import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav className="navbar bg-info px-20">
            <Link t0="/" class="navbar-brand mx-3">CRUD operation</Link>
            <div className="nav">
                <Link to="/create-student" className="nav-link text-light font-weight-bold fs-6">Create student</Link>
                <Link to="/student-list" className="nav-link text-light font-weight-bold fs-6">Student List</Link>
            </div>
        </nav>
    )
}

export default Nav;