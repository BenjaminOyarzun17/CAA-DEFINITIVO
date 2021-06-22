import React from 'react';
import {Image} from 'react-bootstrap';
import '../App.css';
import Directiva from './Directiva.js';
import Anuncio from './Anuncio.js';

import {integrantes} from './Integrantes.json';
import {Row,Container} from 'reactstrap';
import perfilFlo from '../images/perfilFlo.jpg';
import perfilBenja from '../images/perfilBenja.jpeg';
import perfilMily from '../images/perfilMily.jpg';
import perfilMati from '../images/perfilMati.jpg';
import perfilIsi from '../images/perfilIsi.jpg';
import solidaridad from '../images/solidaridad.jpg';


class About extends React.Component{
    constructor(){
        super();
        this.state={
            integrantes
        };
      }
  
  
  render(){
   
    return (
    <div>
        
        <h1 style={{textAlign:'justify', margin:"50px"}}>Sobre nosotros</h1>
        <h2 style={{textAlign:'justify', margin:"50px"}}>Nuestra Directiva</h2>
        <Container>
          <Container>
            <Directiva
              
              imagen= {perfilFlo}
              cabezal={integrantes[0].cabezal}
              contenido={integrantes[0].contenido}
              mail = {integrantes[0].mail}
              />
            </Container>
          <Container>
          <Directiva
              
              imagen= {perfilMily}
              cabezal={integrantes[1].cabezal}
              contenido={integrantes[1].contenido}
              mail = {integrantes[1].mail}
              />
           
          </Container>
          <Container>
          <Directiva
              
              imagen= {perfilIsi}
              cabezal={integrantes[2].cabezal}
              contenido={integrantes[2].contenido}
              mail = {integrantes[2].mail}
              />
          </Container>
          <Container>
          <Directiva
             
              
              cabezal={integrantes[3].cabezal}
              contenido={integrantes[3].contenido}
              mail = {integrantes[3].mail}
              />
          </Container>
        <Container>
          <Directiva
               imagen= {perfilMati}
              cabezal={integrantes[4].cabezal}
              contenido={integrantes[4].contenido}
              mail = {integrantes[4].mail}
              />
          </Container>
          <Container>
          <Directiva
               imagen= {perfilBenja}
               cabezal={integrantes[5].cabezal}
               contenido={integrantes[5].contenido}
               mail = {integrantes[5].mail}
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
              <li>Verónica Garcia (10ºC)</li>
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
            <Image src={solidaridad} fluid style={{marginBottom:'10px'}}></Image>
          </Container>
        </Container>
        
        
        
      
      
    </div>
  );
}
}

export default About;
