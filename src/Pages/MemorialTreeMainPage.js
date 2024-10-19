
import { Link } from "react-router-dom";

import './PageStyles/GeneralPageStyle.css'

import Footer from '../Components/Footer'

function MemorialTreeSearchPage() {
  return (
    <div>
      <h2>Elmira Memorial Forest</h2>
      <p  className="LeftPText"> The Elmira memorial forest is a collection of dedicated trees and benches that run
         along part of the Kissing Bridge Trailway. Both the Elmira part of the trail and the memorial forest
        are maintained by the <a href="https://elmiralions.ca/">Elmira Lions Club</a>. 
        The Elmira part of the trail also features a polinator preserve, resting places and
        runs alongside the Elmira golf course. To dedicate a tree or bench, please visit <a href="https://elmiralions.ca/elmira-memorial-forest/">here</a>.
        To search memorial trees, please visit <Link to="/memorialtrees/search">here</Link>.
      </p>

      <Footer></Footer>

    </div>
  );
}

export default MemorialTreeSearchPage;
