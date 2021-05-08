import React from 'react';
import { Row, Col, Jumbotron, Button,Container } from 'reactstrap';
import { Link} from 'react-router-dom';

import AmeliaWatson from '../images/AmeliaWatson.png';
import council from '../images/council.png'
import angryDoggo from '../images/angryDoggo.png'
import Puñito from '../images/Puñito.png'
import Average from '../images/average.png'
import CatLogo from '../images/CatLogo.png';
import Sapo from '../images/sapo.png';
import Messi from '../images/messi.png';
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
                    <img src={Sapo} style ={{width:'200px', height:"auto"}} alt="Responsive image"></img>
                    <img src={Messi} style ={{width:'200px', height:"auto"}} alt="Responsive image"></img>
                    

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

