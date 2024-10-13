




import { Link } from "react-router-dom";
import './StoriesStyles/BandStand.css'
import bandStandImage from './StoriesAssets/GoreParkBandStand.jpg'


function BandStand() {
    

    return (
        <div>
            <br></br>

            <Link to="/stories"><button className="BackButton">Back To Stories</button></Link>

            <h2> The Amazing Gore Park Bandstand </h2>

            <img src={bandStandImage} alt="An image of the Gore Park bandstand" width="500vw" height="500vh"/>

            <h4>The Very First Bandstand</h4>

            <p>Many people walk or drive past Elmira’s Gore Park and it’s bandstand on a daily basis, but might not know the rich history behind it. 
                Records show that the Gore park bandstand wasn't always where it is today. It was originally located behind a 
                hotel on a corner of Church and Arthur street and was built in 1892. The hotel would later burn down in 1898 and the bandstand was 
                moved to Gore park shortly after. 
            </p>

            <h4>Second Bandstand</h4>

            <p>
            By 1912 the bandstand was in need of repair and Abraham Martin Bowman, a local man who had only moved to Elmira the year before won the bid 
            to rebuild it based on a design by the Elmira Musical Society. Abraham M. Bowman was an old order menonite and tradesperson who setup a 
            contracting and building materials business shortly after moving to Elmira. The bandstand was the heart of the community and was where the 
            local band practised for their shows. This was the same bandstand from which speeches were given and music was played as soldiers went off to 
            fight in the First World War just two years after it was built.
            </p>

            <h4>Abraham Martin Bowman</h4>

            <p>
            Abraham Bowman’s ties to Elmira don’t just end there, though. He would also go on to obtain contracts to dig and install parts of the local water
            system which would lead him to work for the Elmira Water Works and Elmira Public Utility where he later became superintendent and then manager 
            of the utility.  Abraham and his wife, Catherine would go on to purchase their first car in 1937 and Abraham would become qualified as a 
            professional engineer for both electrical and water in 1938 even though his prior school education ended at grade 8.
            </p>


            <h4>Third Bandstand and Modern Day</h4>

            <p>
            Many years later in 1986 the historic bandstand was in need of repairs once again. The work would only be completed two years later in 1988 
            and the bandstand was now a designated heritage structure. This is the version of the bandstand that sits in Gore park to this day. Much has 
            changed since the very first bandstand in Elmira, but in some ways nothing has. The modern day band stand is still a venue for gatherings, 
            live music and a heart of the community. An example of this is the “Bandstand Market” which opened in 2024 and looks to bring people out every 
            Thursday to enjoy the bandstand, Gore park and Elmira as a whole.
            </p>

            <br></br>
            <br></br>

            <h4>Sources</h4>

            <p>History of the bandstand: <a href="https://www.observerxtra.com/and-the-band-played-on/">And The Band Played On, The Observer</a></p>
            <br></br>
            <p>Abraham Martin Bowman:  <a href="https://uwaterloo.ca/mennonite-archives-ontario/personal-collections/abraham-m-and-catharine-bowman">Menonite Archives, University of Waterloo: Menonite Archives of Ontario</a></p>
            <br></br>
            <p>General Information on the bandstand: <a href="https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=10933">Gore Park Bandstnd, Canada's Historic Places</a></p>
            <br></br>

        </div>
    );
}



export default BandStand;
