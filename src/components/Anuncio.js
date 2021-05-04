import React from 'react';
import { Row, Col, Jumbotron, Button,Container } from 'reactstrap';

import AmeliaWatson from './AmeliaWatson.png';
import council from './council.png'
import angryDoggo from './angryDoggo.png'
import Puñito from './Puñito.png'
import Average from './average.png'
import CatLogo from './CatLogo.png';
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
                    <img src={AmeliaWatson} style ={{width:'200px', height:"auto"}} alt="Responsive image"></img>
                    <img src={council} style ={{width:'200px', height:"auto"}} alt="Responsive image"></img>
                  
                    <img src={angryDoggo} style ={{width:'200px', height:"auto"}} alt="Responsive image"></img>
                    <img src={Puñito} style ={{width:'200px', height:"auto"}} alt="Responsive image"></img>
                 
                    <img src={Average} style ={{width:'200px', height:"auto"}} alt="Responsive image"></img>  
                    <img src={CatLogo} style ={{width:'200px', height:"auto"}} alt="Responsive image"></img>
                  
                    

                  </Container>
                  <br></br>
                  <Container>
                  <Button color="primary" href='/about'>Sobre nuestra lista</Button>
                  

                  </Container>
                  <br></br>
                  <Container>
                  <Button color="primary" href='/propuestas'>Nuestras propuestas</Button>
                  </Container>
                  
                  
                  
                </p>
              </Jumbotron>
            </div>
          );
}
}
export default Anuncio;

