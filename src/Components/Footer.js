
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react'

import './componentStyles/Footer.css'



function Footer() {

  

  return (
    <div className="FooterDiv">

      <div className="DoubleDiv">
      <div className="ContactDiv">
        <h4>Contact</h4>
        <br></br>
        <br></br>
        
          <p>seanliamkuehl
            @gmail.com</p>
          <p>519-722-3874</p>
        

      </div>

      

      <div className="SitemapDiv">
        <h4>Sitemap</h4>
        
          <p><Link className="FooterLink" to="/">Home</Link></p>
          <p><Link className="FooterLink" to="/memorialtrees">Memorial Trees</Link></p>
          <p><Link className="FooterLink" to="/stories">Stories</Link></p>
          <p><Link className="FooterLink" to="/contact">Contact</Link></p>
        

      </div>

      </div>

      <div className="Blessing">
        <h5>Have a wonderful rest of your day</h5>
      </div>

      <div className="CopyrightDiv">
        <p>&copy; Copyright Sean Kuehl 2024</p>
      </div>
      
    </div>
  );
}

export default Footer;
