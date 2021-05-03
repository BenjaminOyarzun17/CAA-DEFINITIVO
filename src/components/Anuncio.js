import React from 'react';
import { Jumbotron, Button,Container } from 'reactstrap';




class Anuncio extends React.Component{
  

    render(){
        return (
            <div>
              <Jumbotron >
                <h1 className="display-3">Bienvenido nuestra página web.</h1>
                <p className="lead">¡En este apartado publicaremos nuestros proyectos en desarrollo o en fase de planificación, junto a información importante, entre otras cosas!.</p>
                <hr className="my-2" />
                <p>Esperamos que les sea de utilidad.</p>
                <p className="lead">
                  <Container style={{marginBottom:'10px'}}>
                    <Button color="primary" href='/about'>Sobre nuestra lista</Button>
                  </Container>
                  
                  <Container>
                    <Button color="primary" href='/propuestas'>Nuestras propuestas</Button>
                  </Container>  
                  
                  
                </p>
              </Jumbotron>
            </div>
          );
}
}
export default Anuncio;

