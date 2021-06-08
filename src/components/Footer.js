import React from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

import { Row,Col } from 'reactstrap';


class Footer extends React.Component{
    render(){
        return(
            <footer style={{position:'sticky', borderStyle:"solid none none none"}}>
       
       
       
       <Row>
          <Col><p style={{margin:"10px"}}>Contacto: ivalencia@dsmorus.cl </p></Col>
          <Col><p style={{margin:"10px"}}><a href="https://discord.gg/tPpUskwuD5">Discord </a></p></Col>
            <Col><p style={{margin:"10px"}}><a href="https://www.instagram.com/caamorus/">Instagram </a></p></Col>
            <Col><p style={{margin:"10px"}}>Whatsapp:</p></Col>
        </Row>
      </footer>
       
        
        


        )
}
}
export default Footer;