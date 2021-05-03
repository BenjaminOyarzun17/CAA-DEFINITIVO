import React from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

import { Row,Col } from 'reactstrap';


class Footer extends React.Component{
    render(){
        return(
            <footer style={{position:'sticky', borderStyle:"solid none none none"}}>
       
       
       
       <Row>
          <Col><p style={{margin:"10px"}}><a href="kschreiner@dsmorus.cl">Contacto </a></p></Col>
          <Col><p style={{margin:"10px"}}><a href="https://discord.gg/tPpUskwuD5">Discord </a></p></Col>
            <Col><p style={{margin:"10px"}}><a href="/">Instagram </a></p></Col>
            <Col><p style={{margin:"10px"}}><a href="/">Whatsapp</a></p></Col>
        </Row>
      </footer>
       
        
        


        )
}
}
export default Footer;