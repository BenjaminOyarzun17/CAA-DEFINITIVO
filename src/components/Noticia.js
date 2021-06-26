import React from 'react';

import { Row, Col, Media, Container } from 'reactstrap';
//import {estrenoWeb} from 'estrenoWeb.png';

class Noticia extends React.Component{
    render(){
        return(
        
        <Container fluid>
            <Row>
              <Col>
              <img style ={{width:'100%', height:'auto', marginTop:'25px'}} src={this.props.imagen} ></img>
              </Col>
              <Col xs={8}>
              <h3 style={{textAlign: "justify",marginLeft:'5px'}}>{this.props.cabezal}</h3><br></br>
              <p style={{marginLeft:'5px'}}>
              {this.props.contenido}              
              </p>
              </Col>
            </Row>
              
              
            
            <Media body>
              <Media heading >
              
              </Media>
              
            </Media>
        </Container>
       
        
        


        )
}
}
export default Noticia;