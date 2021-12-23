import React from 'react';
import './FooterStrip.css'



// ADD CODE HERE (Look at the other components to see how you add components)
class FooterStrip extends React.Component {

   render() {

     return (
       <>
       <div className= "footer-container">
            <div className="store-info">
                <div className="title-font"> Toro Sushi Bar and Grill</div>
                <div className="body-font"> 1818 L Street,</div>
                <div className="body-font"> Bakersfield, California 93301</div>
                <div className="body-font">torofusion@gmail.com</div>
                <div className="body-font">(661)663-7878</div>
                <div></div>

            </div>
            <div className="hour-info">
                <div className="hour-title header-font"> Hours </div>
                <div className="day-time-container">
                    <div className="day-container">
                        <div className="day body-font">Monday-Thursday</div>
                        <div className="day body-font">Friday</div>
                        <div className="day body-font">Saturday</div>
                        <div className="day body-font">Sunday</div>
                    </div>
                    <div className="time-container">
                        <div className="time body-font"> 11am-10pm</div>
                        <div className="time body-font"> 11am-11pm</div>
                        <div className="time body-font"> 12pm-11pm</div>
                        <div className="time body-font"> 12pm-9:30pm</div>
                    </div>
                </div>
            </div>

            <div className="social-info">
                <div className="body-font"> Yelp </div>
                <div className="body-font"> Facebook </div>
            </div>
       </div>
     </>
     );
   }
}

export default FooterStrip;