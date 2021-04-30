import React from 'react';
import { Jumbotron, Button } from 'reactstrap';





class Anuncio extends React.Component{
  

    render(){
        return (
            <div>
              <Jumbotron>
                <h1 className="display-3">Bienvenido nuestra página web.</h1>
                <p className="lead">¡En este apartado publicaremos nuestros proyectos en desarrollo o en fase de planificación!.</p>
                <hr className="my-2" />
                <p>Esperamos que les sea de utilidad.</p>
                <p className="lead">
                  <Button color="primary">Ver más</Button>
                </p>
              </Jumbotron>
            </div>
          );
}
}
export default Anuncio;

