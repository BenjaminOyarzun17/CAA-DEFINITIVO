import React from 'react';

import CatLogo from './CatLogo.png';
import {Navbar, Nav} from 'react-bootstrap';
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
                    <Link style={{margin:"5px"}} to="/">Inicio</Link>
                    
                    
                    <Link style={{margin:"5px"}} to="/about">Sobre nosotros</Link>
                    <Link style={{margin:"5px"}} to="/propuestas">Nuestras propuestas</Link>
                    
                    <Link style={{margin:"5px"}} to="/noticias">Noticias</Link>

                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
                    
          </div>
            
                
                
        )
}
}
export default Navegacion;