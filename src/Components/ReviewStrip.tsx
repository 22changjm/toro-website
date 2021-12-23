import React from 'react';
import './ReviewStrip.css'

import viewReviewButton from '../Assets/view-review-button.png'
class ReviewStrip extends React.Component {

    render() {
 
      return (
     <>
        <div className="reviewstrip">
            <div className="review">
                <div className="review-desc">“This place was by far the best sushi place I've been to since moving to Bakersfield. The owners and staff are super nice and attentive. We tried the Heart Attack (appetizer) and it was amazing…Honestly, the best sushi in the area. Definitely will be THE to-go place!!! Thank you Toro Fusion for an amazing dinner!”</div>
                <div className="review-type">— 5-Star Google Review</div>
            </div>
            <div className="review">
                <div className="review-desc">“Location is perfect. The fish quality is good and they might have the best deals in town.” </div>
                <div className="review-type">— 5-Star Google Review</div>
            </div>
            <div className="review">
                <div className="review-desc">“This is probably my favorite sushi/restaurant- in Bakersfield, I love the welcoming atmosphere... Everyone says hello when you walk in, they've got GREAT prices on rolls, &#38; the chefs do exquisite with presentation.”</div>
                <div className="review-type">— 5-Star Yelp Review</div>
            </div>
            <img className="viewReviewButton" alt="view reviews button"src={viewReviewButton}></img>

        </div>
     </>
      );
    }
 }
 
 export default ReviewStrip;