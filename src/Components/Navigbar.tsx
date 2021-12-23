import React from 'react';
import { Navbar , Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Navigbar.css'
import toroLogo from '../Assets/toro-logo.png';



// ADD CODE HERE (Look at the other components to see how you add components)
class Navigbar extends React.Component {

   render() {

     return (
       <>
         <Navbar sticky="top" bg="white" collapseOnSelect expand="lg" variant="light">
           <Navbar.Brand href="#home">
           <img
            src={toroLogo}
            alt="Toro"
            className="end-margin"
            />
           </Navbar.Brand>
           <Navbar.Toggle className="end-margin"/>
           <Navbar.Collapse>
           <Nav className="routes">
              <Nav.Link className="route-margin" href="#welcome">Welcome</Nav.Link>
              <Nav.Link className="route-margin" href="#menu">Menu</Nav.Link>
              <Nav.Link className="route-margin" href="#order">Order</Nav.Link>
              <Nav.Link className="route-margin" href="#reviews">Reviews</Nav.Link>
              <Nav.Link className="route-margin" href="#contact">Contact</Nav.Link>
           </Nav>
           </Navbar.Collapse>
           
         </Navbar>
     </>
     );
   }
}

export default Navigbar;