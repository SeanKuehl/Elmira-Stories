
import { Outlet, Link } from "react-router-dom";
import './componentStyles/UniversalHeader.css'

/*
<Link to="/blogs">Blogs</Link>
*/

function UniversalHeader() {
  return (
    <div className="HeaderDiv">

      <div className="HeaderTitle">
        <h1> Elmira Stories </h1>
      </div>
      
      <div className="Navbar">
        <Link className="NavLink" to="/">Home</Link>
      </div>

      
      

      <Outlet />
    </div>
  );
}

export default UniversalHeader;
