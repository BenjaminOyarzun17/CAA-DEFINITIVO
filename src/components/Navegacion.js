import React from 'react';

import CatLogo from './CatLogo.png';
import {Navbar, Nav} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import {Row,Col} from 'reactstrap';



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
                      <Nav.Link href=""><Link style={{color:'whitesmoke'}} to="/about">Sobre nosotros</Link></Nav.Link>
                      <Nav.Link href=""><Link style={{color:'whitesmoke'}} to="/propuestas">Nuestras propuestas</Link></Nav.Link>
                      <Nav.Link href=""><Link style={{color:'whitesmoke'}} to="/noticias">Noticias</Link></Nav.Link>
                      
                      
                      
                      
                      
                      
                      
                    
                    
                    
                    
                    

                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
                    
          </div>
            
                
                
        )
}
}
export default Navegacion;