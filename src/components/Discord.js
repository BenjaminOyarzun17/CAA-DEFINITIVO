import React from 'react';

import { Container } from 'reactstrap';


class Discord extends React.Component{
    render(){
        return(
        
        <div >
            <h1>La Cámara de los Secretos</h1>
            
            <Container style={{textAlign:"justify"}}>
                <p>La Cámara de los Secretos es oficialmente parte de nuestro Centro de Alumnos. Es un servidor de Discord creado en 2020, que cumplirá variadas funciones, tales como: </p>
                <ul>
                    <li>Lugar de encuentro con otros alumnos durante cuarentenas.</li>
                    <li>Lugar de difusión de información.</li>
                    <li>Lugar que puede ser utilizado para estudiar.</li>
                    <li>Ambiente en el que se podrán crear Clubes.</li>
                    <li>Instancia para ser parte de la comunidad.</li>
                </ul>
                <h2>¿Cómo accedo?</h2>
                <ol>
                    <li>Crea una cuenta de Discord</li>
                    <li>Entra en el siguiente <a href ='https://discord.gg/tPpUskwuD5'>link</a></li>
                    <li>Una vez dentro, debes leer el canal de reglas y seguir las instrucciones.</li>
                </ol>
                De todas maneras, existen videos tutoriales que explican el uso de este servidor. 
                <div style={{textAlign:'center'}}>
                <h2>Primer video (uso básico)</h2>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9IblvXC1KFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h2>Segundo video (uso avanzado)</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VK9456HHoAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
            </Container> 
            
            
            
        </div>
       
        
        


        )
}
}
export default Discord;