import React from 'react';

import '../App.css';
import Noticia from './Noticia.js';
import Anuncio from './Anuncio.js';

import {integrantes} from './Integrantes.json';
import {Row,Container} from 'reactstrap';




class Main extends React.Component{
  constructor(){
    super();
    this.state={
      integrantes
    };
  }
  
  
  render(){
    
    return (
    <div>
     
      <Container style={{marginTop:"10px"}}>
        <Anuncio/>
      </Container>

      
      <Container>
     
      </Container>
      
      
    </div>
  );
}
}

export default Main;
