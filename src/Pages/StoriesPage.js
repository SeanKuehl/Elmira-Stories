




import { Outlet, Link } from "react-router-dom";
import bandStandImage from '../Stories/StoriesAssets/GoreParkBandStand.jpg'
import './PageStyles/StoriesPage.css'


function StoriesPage() {
    

    return (
        <div>
            <h2> Stories </h2>

            <p>On this page you can find links to articles about our local history and the amazing stories contained within.

            </p>
            <br></br>

            <div>
            <Link to="/stories/bandstand" className="StoryLink">The Amazing Gore Park Bandstand</Link>
            <br></br>
            <Link to="/stories/bandstand" className="StoryLink"><img src={bandStandImage} className="StoryIamge" width="200vw" height="200vh"/></Link>
            <br></br>
            <br></br>
            </div>

            <div>
            <Link to="/stories/carlklinck" className="StoryLink">Carl Frederick Klinck</Link>
            <br></br>
            </div>
            

        </div>
    );
}



export default StoriesPage;
