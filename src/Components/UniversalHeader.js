
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react'
import './componentStyles/UniversalHeader.css'



function UniversalHeader() {

  const [mobileMenu, setMobileMenu] = useState(true); //set this to true by default because the first thing the toggle func does is not(!) the value. This means the hamburger menu will open on first press.

  function ToggleHamburgerMenu(){
    setMobileMenu(!mobileMenu);

    if (mobileMenu){
      const soonVisible = document.getElementById("MobileBar");
      soonVisible.style.display = "flex";
    }
    else {
      const soonInvisible = document.getElementById("MobileBar");
      soonInvisible.style.display = "none"
    }


  }

  return (
    <div className="HeaderDiv">

      <div className="HeaderTitle">
        <h1> Elmira Stories </h1>
      </div>
      
      <div className="NavBar">
        <Link to="/"><button className="NavLink">Home</button></Link>

        <Link to="/memorialtrees"><button className="NavLink">Memorial Trees</button></Link>

        <Link to="/stories"><button className="NavLink">Stories</button></Link>

        <Link to="/contact"><button className="NavLink">Contact</button></Link>

      </div>

      <div className="MobileHamburgerButtonDiv">
      <button className="MobileHamburgerMenuButton" onClick={ToggleHamburgerMenu}>&#9776;</button>
      </div>

      <div className="MobileNavBar" id="MobileBar">
        <Link to="/"><button className="NavLink" onClick={ToggleHamburgerMenu}>Home</button></Link>
        <br></br>
        <Link to="/memorialtrees"><button className="NavLink" onClick={ToggleHamburgerMenu}>Memorial Trees</button></Link>
        <br></br>
        <Link to="/stories"><button className="NavLink" onClick={ToggleHamburgerMenu}>Stories</button></Link>
        <br></br>
        <Link to="/contact"><button className="NavLink" onClick={ToggleHamburgerMenu}>Contact</button></Link>
      </div>

      
      

      <Outlet />
    </div>
  );
}

export default UniversalHeader;
