import React from 'react';
import './PhotoStrip.css'

import onek from '../Assets/1k.png'
import bibimbap from '../Assets/bibimbap.png'
import mussels from '../Assets/mussels.png'
import poki from '../Assets/poki.png'
import sashimi from '../Assets/sashimi.png'
import uni from '../Assets/uni.png'

class PhotoStrip extends React.Component {

    render() {
 
      return (
     <>
         <div className="strip-container">
             <div className="photo-row">
                <img className="strip-image" src={onek} alt="1k" />
                <img className="strip-image" src={bibimbap} alt="bibimbap" />
             </div>
             <div className="photo-row">
                <img className="strip-image" src={poki} alt="poki" />
                <img className="strip-image" src={mussels} alt="mussels" />
             </div>
             <div className="photo-row">
                <img className="strip-image" src={sashimi} alt="sashimi" />
                <img className="strip-image" src={uni} alt="uni"/>

             </div>
         </div>
     </>
      );
    }
 }
 
 export default PhotoStrip;