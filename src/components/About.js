import React from 'react';

import '../App.css';
import Noticia from './Noticia.js';
import Anuncio from './Anuncio.js';

import {integrantes} from './Integrantes.json';
import {Row,Container} from 'reactstrap';





class About extends React.Component{
    constructor(){
        super();
        this.state={
            integrantes
        };
      }
  
  
  render(){
    const arregloComponente = this.state.integrantes.map(
        (integrantes,i) => {
          return ( 
          <Container >
          <Noticia
            key ={i}
            imagen ={integrantes.imagen}
            cabezal={integrantes.cabezal}
            contenido={integrantes.contenido}
            />
          </Container>
          
          )}
      );
    return (
    <div>
        
        <h1>Sobre nosotros</h1>
        <Container>
        {arregloComponente}
        </Container>
        
      
      
    </div>
  );
}
}

export default About;
