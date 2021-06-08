import React from 'react';

import CatLogo from '../images/CatLogo.png';
import {Navbar, Nav,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';



class Navegacion extends React.Component{
    render(){
        
        return(
            <div>
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="">
      <img
        alt=""
        src={CatLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      CAA DS MORUS
    </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                                         
                      <Nav.Link href=""><Link style={{color:'whitesmoke'}} to="/">Inicio</Link></Nav.Link>
                      
                      <NavDropdown title="About" id="basic-nav-dropdown">
                      
                        <NavDropdown.Item href=""><Link style={{color:'black'}} to="/about">Nuestro CAA</Link></NavDropdown.Item>
                        <NavDropdown.Item href=""><Link style={{color:'black'}} to="/noticias">Noticias</Link></NavDropdown.Item>
                        <NavDropdown.Item href=""><Link style={{color:'black'}} to="/calendario">Calendario</Link></NavDropdown.Item>
                        <NavDropdown.Item href=""><Link style={{color:'black'}} to="/discord">Discord</Link></NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
                    
          </div>
            
                
                
        )
}
}
export default Navegacion;