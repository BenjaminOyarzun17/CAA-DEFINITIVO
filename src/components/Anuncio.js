import React from 'react';
import { Row, Col, Jumbotron, Button,Container } from 'reactstrap';
import { Link} from 'react-router-dom';

import fotogrupal from '../images/fotogrupal.jpg';
import grupal2 from '../images/grupal2.jpg';
import grupal3 from '../images/grupal3.jpg';

class Anuncio extends React.Component{
  

    render(){
        return (
            <div>
              <Jumbotron >
                <h1 className="display-3">Bienvenido nuestra página web.</h1>
                <p className="lead">¡En este apartado publicaremos nuestros proyectos en desarrollo o en fase de planificación, junto a información importante, entre otras cosas!.</p>
                <hr className="my-2" />
                
                <p className="lead">
                  
                  
                  <br></br>
                  <Container>
                  
                  <Link to='/about'>Nuestro centro de alumnos</Link>

                  </Container>
                  <br></br>
                 
                  
                  
                  
                </p>
              </Jumbotron>
              
            </div>
          );
}
}
export default Anuncio;

