import React from 'react';
import './PhotoLogoStrip.css'

import homePhoto from '../Assets/home-photo.png';



// ADD CODE HERE (Look at the other components to see how you add components)
class PhotoLogoStrip extends React.Component {

   render() {

     return (
    <>
        <div className="container">
            <img className="home-photo" src={homePhoto} alt="home" />
            <div className="mobile-logo">
                <div className="header">Toro Fusion Grill</div>
                <div className="body">1818 L Street</div>
                <div className="body">Bakersfield, CA</div>
            </div>
            <div className="logo-container no-mobile">
            <div className="logo">
                <div className="header">Toro Fusion Grill</div>
                <div className="body">1818 L Street</div>
                <div className="body">Bakersfield, CA</div>
            </div>
            </div>
        </div>
    </>
     );
   }
}

export default PhotoLogoStrip;