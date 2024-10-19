




import './PageStyles/GeneralPageStyle.css'

import './PageStyles/HomePage.css'

import Footer from '../Components/Footer'

import LogoImage from './PageAssets/ElmiraStoriesLogo.jpg'

function HomePage() {
    

    return (
        <div className="test">
            <h2> Welcome to Elmira Stories! </h2>

            <img src={LogoImage} width="500vw" height="300vh" alt="A beutiful mural. One of many that can be found in downtown Elmira" />
            <p className="ImageCaption">"Summer Fields" by Moumita Roychowdhury. One of many beutiful murals that can be found in downtown Elmira. This one is featured on a planter in front of the Elmira Library.</p>

            <br></br>
            <br></br>

            <p className="LeftPText">Hello and welcome to Elmira Stories! The goal of Elmira Stories is to help connect us with our past, present and hopes for the future.
                We aim to achieve this goal by providing a catalogue of our local Memorial Trees, stories about our communities rich history and so much more!
            </p>

            <Footer></Footer>

        </div>
    );
}



export default HomePage;
