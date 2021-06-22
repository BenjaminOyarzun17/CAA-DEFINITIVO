import React from 'react';

import { Media } from 'reactstrap';
//import {estrenoWeb} from 'estrenoWeb.png';

class Noticia extends React.Component{
    render(){
        return(
        
        <Media >
            
              <img style ={{width:'25%', height:'auto'}} src={this.props.imagen} alt="Responsive image"></img>
              
            
            <Media body>
              <Media heading >
              <p style={{textAlign: "justify",marginLeft:'5px'}}>{this.props.cabezal}</p>
              </Media>
              <p style={{marginLeft:'5px'}}>
              {this.props.contenido}              
              </p>
            </Media>
        </Media>
       
        
        


        )
}
}
export default Noticia;