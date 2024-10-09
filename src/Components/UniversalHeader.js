
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
      
      <div className="NavBar">
        <Link to="/"><button className="NavLink">Home</button></Link>

        <Link to="/memorialtrees"><button className="NavLink">Memorial Trees</button></Link>
      </div>

      
      

      <Outlet />
    </div>
  );
}

export default UniversalHeader;
