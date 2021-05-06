import React from 'react';

import CatLogo from './CatLogo.png';
import {Navbar, Nav} from 'react-bootstrap';



class Navegacion extends React.Component{
    render(){
        
        return(
            <div>
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
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
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/about">Sobre nosotros</Nav.Link>
                    <Nav.Link href="/propuestas">Nuestras propuestas</Nav.Link>
                    
                    <Nav.Link href="/noticias">Noticias</Nav.Link>

                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
                    
          </div>
            
                
                
        )
}
}
export default Navegacion;