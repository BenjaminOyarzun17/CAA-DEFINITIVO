import React from 'react';

import { Media } from 'reactstrap';



class Noticia extends React.Component{
  

    render(){
        return(
        
        <Media >
            <Media left href="#">
              <Media object data-src={this.props.imagen} alt="Generic placeholder image" />

            </Media>
            <Media body>
              <Media heading style={{marginLeft: "5px"}}>
              <p style={{textAlign: "justify"}}>{this.props.cabezal}</p>
              
              </Media>
              <p style={{textAlign: "justify",marginLeft: "5px"}}>{this.props.contenido}</p>
            </Media>
        </Media>
       
        
        


        )
}
}
export default Noticia;