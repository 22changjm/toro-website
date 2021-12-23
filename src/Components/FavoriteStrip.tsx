import React from 'react';
import './FavoriteStrip.css'

import menuButton from '../Assets/view-menu.png'
import orderButton from '../Assets/order-button.png'


// ADD CODE HERE (Look at the other components to see how you add components)
class FavoriteStrip extends React.Component {

   render() {

     return (
    <>
        <div className="favcontainer">
            <div className="title">Some of Our Favorites</div>
            <div className="menu">
                <div className="col">
                        <div className="rollentry">
                            <div className="rollname">Red Bull Roll</div>
                            <div className ="rollinside">Inside: shrimp tempura, spicy crabmeat, avocado and cucumber.</div>
                            <div className="rolloutside">Outside: filet mignon and jalapeno</div>
                        </div>
                        <div className="rollentry">
                            <div className="rollname">Ex-Girlfriend Roll</div>
                            <div className ="rollinside">Inside: shrimp tempura, spicy crabmeat, avocado and cucumber.</div>
                            <div className="rolloutside">Outside: tuna and salmon</div>
                        </div>
                        <div className="rollentry">
                            <div className="rollname">Screaming O</div>
                            <div className ="rollinside">Choice of seared ahi tuna or seared paprika salmon with signature sauce</div>
                        </div>
                    </div>

                <div className="col">
                    <div className="rollentry">
                        <div className="rollname">Popcorn Lobster Roll</div>
                        <div className ="rollinside">Inside: crabmeat, avocado and cucumber.</div>
                        <div className="rolloutside"> Outside: deep fried langostino</div>
                    </div>
                    <div className="rollentry">
                        <div className="rollname">Crunchy Sexy Roll</div>
                        <div className ="rollinside">Inside: shrimp temora, crabmeat, avocado and cucumber.</div>
                        <div className="rolloutside"> Outside: crunch flake</div>
                    </div>
                    <div className="rollentry">
                        <div className="rollname">Chicken Toro Fried Rice</div>
                        <div className ="rollinside">Over rice and seasoned vegetables in a sizzling stone bowl.</div>
                    </div>
                </div>

                <div className="col">
                    <div className="rollentry">
                        <div className="rollname">Chicken Teriyaki Hot Stone Bowl</div>
                        <div className ="rollinside">Over rice and seasoned vegetables in a sizzling stone bowl</div>
                    </div>
                    <div className="rollentry">
                        <div className="rollname">Golden Tiger</div>
                        <div className ="rollinside">Inside: Shrimp tempura, avocado, cream cheese</div>
                        <div className="rolloutside">Outside: Spicy Crabmeat</div>

                    </div>
                    <div className="rollentry">
                        <div className="rollname">Bacon Garlic Fried Rice</div>
                        <div className ="rollinside">Stir friend bacon, garlic, and rice with seasonal vegetables</div>
                    </div>
                </div>
            </div>
            <div className="buttons">
            <img className="button" alt="menu button" src={menuButton}></img>
            <img className="button" alt="order button" src={orderButton}></img>

            </div>
        </div>
    </>
     );
   }
}

export default FavoriteStrip;