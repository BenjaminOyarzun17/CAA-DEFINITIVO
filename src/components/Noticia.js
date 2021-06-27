import React from 'react';

import { Row, Col, Media, Container } from 'reactstrap';
//import {estrenoWeb} from 'estrenoWeb.png';

class Noticia extends React.Component{
    render(){
        return(
        
        <Container  >
            

            <h3 style={{marginLeft:'5px'}}>{this.props.cabezal}</h3>
              <img className='imagenNoticia' src={this.props.imagen} ></img>
              <p className='textoNoticia'></p>
              {this.props.contenido}              
             
            
              
              
        </Container>
       
        
        


        )
}
}
export default Noticia;