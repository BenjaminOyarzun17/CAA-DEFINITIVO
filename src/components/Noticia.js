import React from 'react';

import { Media } from 'reactstrap';
//import {estrenoWeb} from 'estrenoWeb.png';

class Noticia extends React.Component{
    render(){
        return(
        
        <Media >
            <Media left href="#">
              
              <img src={this.props.imagen} class="img-fluid" alt="Responsive image"></img>
              
            </Media>
            <Media body>
              <Media heading style={{marginLeft: "5px"}}>
              <p style={{textAlign: "justify"}}>{this.props.cabezal}</p>
              </Media>
              
              {this.props.contenido}              
              
            </Media>
        </Media>
       
        
        


        )
}
}
export default Noticia;