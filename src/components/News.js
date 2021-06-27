import React from 'react';

import '../App.css';
import Noticia from './Noticia.js';

import {noticias} from './Noticias.js';
import {Row} from 'reactstrap';





class Main extends React.Component{
  constructor(){
    super();
    this.state={
      noticias
    };
  }


render(){
const mostrarNoticias = this.state.noticias.map(
    (noticias,i) => {
      return ( 
      <Row style={{textAlign:"justify", margin:'10px'}} >
      <Noticia
        key ={i}
        imagen ={noticias.imagen}
        cabezal={noticias.cabezal}
        contenido={noticias.contenido}
        />
      </Row>
      
      )}
  );
   
    return (
    <div>
        <h1 style={{textAlign:'justify', margin:'10px'}}>Sección de noticias        </h1>
        {mostrarNoticias}
      
    </div>
  );
}
}

export default Main;
