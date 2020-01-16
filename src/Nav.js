
import React, { Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav as Navigate,
  
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {

        
        return (

        <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand>
                    <Link to="/">VggReact</Link>
                </NavbarBrand>
                <NavbarToggler  />
                <Collapse >
                <Navigate className="mr-auto" navbar>
                </Navigate>
                <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar><br></br>
    </div>
        );
    }
}


export default Nav;
