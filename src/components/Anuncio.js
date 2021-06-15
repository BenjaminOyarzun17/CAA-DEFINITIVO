import React from 'react';
import { Row, Col, Jumbotron, Button,Container } from 'reactstrap';
import { Link} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';

import rocketLeague from '../images/rocketLeague.jpeg';


class Anuncio extends React.Component{
  

    render(){
        return (
            <div>
              <Carousel>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rocketLeague}
                    alt="First slide"
                    style={{ textAlign:'center', marginLeft:"auto", marginRight:"auto"}}
                  />
                 
                </Carousel.Item>

                



                <Carousel.Item>
                <Jumbotron >
                <h1 className="display-3">Bienvenido a nuestra página web.</h1>
                <p className="lead">¡En este apartado publicaremos nuestros proyectos en desarrollo o en fase de planificación, junto a información importante, entre otras cosas!.</p>
                <hr className="my-2" />
                
                <p className="lead">
                  
                  
                  <br></br>
                  <Container>
                  
                  <Link to='/about'>Nuestro centro de alumnos</Link><br/>
                  

                  </Container>
                  <br></br>
                  <Container><Link to='/calendario'>Calendario de actividades</Link><br/></Container>
                  <br></br>
                  <Container><Link to='/noticias'>Novedades</Link></Container>
                  
                  
                  
                </p>
              </Jumbotron>
                </Carousel.Item>
                
              </Carousel>
              
              
              
             
              
            </div>
          );
}
}
export default Anuncio;

