import React from 'react';

import './App.css';
import Noticia from './Noticia.js';
import Anuncio from './Anuncio.js';

import Navegacion from './Navbar.js';
import {noticias} from './Noticias.json';
import {Row,Container} from 'reactstrap';




class App extends React.Component{
  constructor(){
    super();
    this.state={
      noticias
    };
  }
  
  
  render(){
    const arregloComponente = this.state.noticias.map(
      (noticias,i) => {
        return ( 
        <Container >
        <Noticia
          key ={i}
          imagen ={noticias.imagen}
          cabezal={noticias.cabezal}
          contenido={noticias.contenido}
          />
        </Container>
        
        )}
    );
    return (
    <div className="App">
      <Navegacion/>
      <Container>
        <Anuncio/>
      </Container>

      
      <Container>
      <Row>
        <h1  style={{margin: "20px"}}>Nuestra directiva</h1>
        {arregloComponente}
      </Row>
      </Container>
      
      
    </div>
  );
}
}

export default App;
