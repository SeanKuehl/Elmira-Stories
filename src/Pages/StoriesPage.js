




import { Link } from "react-router-dom";
import bandStandImage from '../Stories/StoriesAssets/GoreParkBandStand.jpg'
import './PageStyles/StoriesPage.css'
import './PageStyles/GeneralPageStyle.css'

import Footer from '../Components/Footer'


function StoriesPage() {
    

    return (
        <div className="root">
            <h2> Stories </h2>

            <p className="CenteredPText">On this page you can find links to articles about our local history and the amazing stories contained within.

            </p>
            <br></br>

            <div>
            <Link to="/stories/bandstand" className="StoryLink">The Amazing Gore Park Bandstand</Link>
            <br></br>
            <Link to="/stories/bandstand" className="StoryLink"><img src={bandStandImage} width="200vw" height="200vh" alt="The Elmira Gore Park Bandstand" /></Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>

            <div>
            <Link to="/stories/carlklinck" className="StoryLink">Carl Frederick Klinck</Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            
            
            <Footer></Footer>
            

        </div>
    );
}



export default StoriesPage;
