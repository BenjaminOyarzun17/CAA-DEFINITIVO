import React from 'react';

import '../App.css';
import Directiva from './Directiva.js';
import Anuncio from './Anuncio.js';

import {integrantes} from './Integrantes.json';
import {Row,Container} from 'reactstrap';

import Benja from "../images/Benja.jpeg";
import Robert from "../images/Robert.jpeg";
import Kathe from "../images/Kathe.jpeg";
import Gabo from "../images/Gabo.jpeg";
import Rafa from "../images/Rafa.jpeg";


class About extends React.Component{
    constructor(){
        super();
        this.state={
            integrantes
        };
      }
  
  
  render(){
    /*const arregloComponente = this.state.integrantes.map(
      (integrantes,i) => {
        return ( 
        <Container style={{backgroundColor:'lightblue', margin:'15px', borderStyle:"solid", borderWidth:"5px"}}>
        <Directiva
          key ={i}
          imagen ={integrantes.imagen}
          cabezal={integrantes.cabezal}
          contenido={integrantes.contenido}
          mail = {integrantes.mail}
          />
        </Container>
        )}
    );*/
    return (
    <div>
        
        <h1 style={{textAlign:'justify', margin:"50px"}}>Sobre nosotros</h1>
        <Container>
          <Container>
            <Directiva
              
              imagen ={Gabo}
              cabezal={integrantes[0].cabezal}
              contenido={integrantes[0].contenido}
              mail = {integrantes[0].mail}
              />
            </Container>
          <Container>
          <Directiva
              
              imagen ={Rafa}
              cabezal={integrantes[1].cabezal}
              contenido={integrantes[1].contenido}
              mail = {integrantes[1].mail}
              />
           
          </Container>
          <Container>
          <Directiva
              
              imagen ={Kathe}
              cabezal={integrantes[2].cabezal}
              contenido={integrantes[2].contenido}
              mail = {integrantes[2].mail}
              />
          </Container>
          <Container>
          <Directiva
             
              imagen ={Benja}
              cabezal={integrantes[3].cabezal}
              contenido={integrantes[3].contenido}
              mail = {integrantes[3].mail}
              />
          </Container>
        <Container>
          <Directiva
               
              imagen ={Robert}
              cabezal={integrantes[4].cabezal}
              contenido={integrantes[4].contenido}
              mail = {integrantes[4].mail}
              />
          </Container>
          <Container>
          <Directiva
               
              
              cabezal={integrantes[5].cabezal}
              contenido={integrantes[5].contenido}
              mail = {integrantes[5].mail}
              />
          </Container>
        </Container>
        
        
        
      
      
    </div>
  );
}
}

export default About;
