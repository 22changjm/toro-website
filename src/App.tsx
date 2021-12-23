import React from 'react';
import './App.css';

import Navigbar from './Components/Navigbar'
import PhotoLogoStrip from './Components/PhotoLogoStrip'
import FavoriteStrip from './Components/FavoriteStrip'
import PhotoStrip from './Components/PhotoStrip'
import ViewReviewButton from './Components/ReviewStrip'
import FooterStrip from './Components/FooterStrip'

function App() {
  return (
    <div className="App">
      <Navigbar />
      <PhotoLogoStrip />
      <p id="open">We are open for take-out, delivery, and socially-distanced dining! </p>
      <FavoriteStrip/>
      <PhotoStrip />
      <ViewReviewButton />
      <FooterStrip />
    </div>
  );
}

export default App;
