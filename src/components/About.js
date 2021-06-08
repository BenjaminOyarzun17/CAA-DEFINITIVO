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
        <h2 style={{textAlign:'justify', margin:"50px"}}>Nuestra Directiva</h2>
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
          <div style={{textAlign:'justify'}}>
            <h2>Miembros de nuestra Lista</h2>
          </div>
          
          <Container style={{textAlign:'justify'}}>
            <h3>Encargada de media</h3>
            <ul>
              <li>Camila Torres (10ºC)</li>
            </ul>
            
            <h3>Encargados de básica</h3>
            <ul>
              <li>Laura Carvajal (7ºB)</li>
              <li>Simon Fuentes (7ºB)</li>
              <li>Gracia Villanueva (7ºC)</li>
            </ul>
            <h3>Encargado de operaciones y logística</h3>
            <ul>
              <li>Arturo Vergara (12ºC)</li>
              <li>Fernando Jarra (12ºB)</li>
            </ul>
            <h3>Delegados de arte y cultura</h3>
            <ul>
              <li>Elena de la Cruz </li>
              <li>Valentina Maldonado (8ºB)</li>
              <li>Átia Winkler (8ºC)</li>
              <li>Amparo Camiroaga (8ºC)</li>
              <li>Vero (10ºC)</li>
            </ul>
            <h3>Delegados de música</h3>
            <ul>
              <li>Sebastian Ceries (9ºC)</li>
              <li>Juan Cristobal (10ºB)</li>
            </ul>
            <h3>Delegados de medio ambiente</h3>
            <ul>
              <li>Amanda Velazco (7ºC)</li>
              <li>Beatriz Olivares (10ºA)</li>
              <li>Agustín Ly (11ºA)</li>
              <li>Florencia Delgado (11ºB)</li>
              <li>Catalina Arnés (11ºB)</li>
            </ul>
            <h3>Delegados de deporte</h3>
            <ul>
              <li>José Ignacio Gortázar (12ºA)</li>
              <li>Tobias Rietschen (7ºC)</li>
            </ul>
            <h3>Delegación feminista</h3>
            <ul>
              <li>Espe González (7ºA)</li>
              <li>Helena Aldoney (7ºC)</li>
              <li>Elisa Monsalve (9ºB)</li>
              <li>Rocio Rodriguez (9ºC)</li>
              <li>Antonia Schmohl (10ºB)</li>
              <li>Milena Adrian (12ºB)</li>
            </ul>
            <h3>Comité de solidaridad</h3>
            <ul>
              <li>Javiera León (7ºC)</li>
              <li>Benjamín Rojas (9ºB)</li>
              <li>Isidora González (12ºA)</li>
              
            </ul>
          </Container>
        </Container>
        
        
        
      
      
    </div>
  );
}
}

export default About;
