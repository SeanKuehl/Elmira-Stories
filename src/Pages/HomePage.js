


import { Outlet, Link } from "react-router-dom";

import './PageStyles/GeneralPageStyle.css'

import './PageStyles/HomePage.css'

import Footer from '../Components/Footer'

import LogoImage from './PageAssets/ElmiraStoriesLogo.jpg'

function HomePage() {
    

    return (
        <div className="test">
            <h2> Welcome to Elmira Stories! </h2>

            <img src={LogoImage} width="500vw" height="300vh" alt="A beutiful mural. One of many that can be found in downtown Elmira" />
            <p className="ImageCaption"><a href="https://downtownelmira.ca/elmira-art-exhibit/moumita-roychowdhury/">"Summer Fields" by Moumita Roychowdhury</a>. One of many beutiful murals that can be found in downtown Elmira. This one is featured on a planter in front of the Elmira Library.</p>

            <br></br>
            <br></br>

            <p className="LeftPText">Hello and welcome to Elmira Stories! The goal of Elmira Stories is to help connect us to the
                local stories, people and histories that have shaped and continue to shape our community. Elmira has been around
                a long time and has a rich history stretching back to the 1800's and is still a vibrant, growing community to this day.
            </p>

            <br></br>
            <br></br>

            <p className="LeftPText">Elmira has a large Memorial Forest that stretches along the local part of the <a href="https://www.kissingbridgetrailway.ca/">Kissingbridge Trailway</a>.
            To learn more about Elmira's Memorial Forest and to search for a memorial, visit <Link to="/memorialtrees">here.</Link>
            </p>

            <br></br>
            <br></br>


            <p className="LeftPText">Being around since the 1800's, Elmira has a rich history that you can see to this day in many buildings and places.
                To learn more about some of the history people and places of Elmira, visit <Link to="/stories">here.</Link>
            </p>

            <br></br>
            <br></br>

            <p className="LeftPText">We hope you enjoy this community resource and take the time to learn about the stories of our community.
            </p>

            <Footer></Footer>

        </div>
    );
}



export default HomePage;
