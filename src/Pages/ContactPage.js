


import './PageStyles/ContactPage.css'
import './PageStyles/GeneralPageStyle.css'

import Footer from '../Components/Footer'



function ContactPage() {
    

    return (
        <div className="ContentDiv">
            <h2> Contact </h2>

            <p className="CenteredPText"> For general questions, reporting problems and other reasons please see below.</p>
            <br></br>
            <br></br>
            
            <div>
                <p className="CenteredPText">By Phone at: 519.722.3874</p>
                
                <br></br>
                <br></br>
                <p className="CenteredPText">By Email at: <a href="mailto:seanliamkuehl@gmail.com">seanliamkuehl@gmail.com</a></p>
                
                
            
            </div>

            <Footer></Footer>
            

        </div>
    );
}



export default ContactPage;
