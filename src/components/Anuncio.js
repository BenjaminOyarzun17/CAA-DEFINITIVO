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
                  
                  <Container>
                    
                    <img src={fotogrupal} style ={{width:'300px', height:"auto"}}></img>
                   
                    
                    <img src={grupal3} style ={{width:'300px', height:"auto"}}></img>
                    

                  </Container>
                  <br></br>
                  <Container>
                  
                  <Link to='/about'>Sobre nuestra lista</Link>

                  </Container>
                  <br></br>
                  <Container>
                  
                  <Link to='/propuestas'>Nuestras propuestas</Link>
                  </Container>
                  
                  
                  
                </p>
              </Jumbotron>
            </div>
          );
}
}
export default Anuncio;

