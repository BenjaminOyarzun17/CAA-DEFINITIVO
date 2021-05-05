import React from 'react';

import { Media } from 'reactstrap';


class Directiva extends React.Component{
    render(){
        return(
        
        <Media >
            <Media left href="#">
              
              
              <img src={this.props.imagen} style ={{width:'150px', height:"auto"}} alt="Responsive image"></img>
            </Media>
            <Media body>
              <Media heading style={{marginLeft: "10px"}}>
              <p style={{textAlign: "justify"}}>{this.props.cabezal}</p>
              </Media>
              <p style={{textAlign: "justify",marginLeft: "10px"}}><b>Contacto</b>: {this.props.mail}
              <br></br>
              {this.props.contenido}              
              </p>
            </Media>
        </Media>
       
        
        


        )
}
}
export default Directiva;