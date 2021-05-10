import React from 'react';

import '../App.css';
import Anuncio from './Anuncio.js';

import {integrantes} from './Integrantes.json';
import {Container} from 'reactstrap';




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
