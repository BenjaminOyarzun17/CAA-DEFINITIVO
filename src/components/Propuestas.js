import React from 'react';

import '../App.css';


import { Container } from 'reactstrap';
import {Card, Accordion, Button} from 'react-bootstrap';




class Propuestas extends React.Component{
    
  
  
  render(){
    
  
    return (
    <div>
        
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h2>Nuestros Valores</h2>
                
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Container>
                <h2 style={{textAlign:"justify",marginTop:"10px"}}>Nuestros Valores</h2>
                <p style={{textAlign:"justify"}}>Nuestra lista se basa en tres pilares fundamentales: </p>
               
                
                


                <ul style={{textAlign:"justify"}}>
                    <li><b>Apertura</b>: Pensamos que el centro de alumnos es una institución que representa al alumnado y no a los intereses de un grupo pequeño de personas. Por esto estamos dispuestos a siempre escuchar la opinión de un alumno y exponerla al mismo alumnado para así determinar si es que se necesita una representación por parte del CAA para exponer a la directiva escolar el asunto.  </li>
                    <li><b>Comunicación</b>: Para poder ser una lista abierta, creemos que la comunicación es una base fundamental. Por lo tanto, nos esforzaremos por dar constantemente cuenta de los procesos en los que se encuentran los trámites de propuestas, y dar cuenta de proyectos internos. Esencialmente se buscará dar acceso a toda la comunidad lo que el centro de alumnos está realizando, para que esta pueda evaluarlo. Para esto se buscará dar un uso innovador, eficaz e inteligente a la tecnología que tenemos disponible.</li>
                    <li><b>Efectividad</b>: Buscamos aplicar los mejores recursos disponibles para poder optimizar el trabajo y efectividad de nuestro centro de alumnos, además de ciertas reformas en su estructura. </li>
                </ul>
                <p style={{textAlign:"justify"}}>Estos tres pilares sostienen a uno muchos más importante, que es el objetivo principal de nuestra lista: la noción de pertenencia a una <b>comunidad</b>.</p>
                

                </Container>
                
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <h2>Propuestas principales (clickear para ver más)</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <h3 style={{textAlign:"justify"}}>Cambio en el sistema de delegados</h3>
                        
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p style={{textAlign:"justify"}}>Sentimos y creemos que el sistema de delegados es poco efectivo, especialmente en la organización de actividades y en los procesos de difusión de información a los cursos. Esto en conjunto con la baja participación de delegados nos impulsa a crear un nuevo sistema que tenga alta participación y que permita especialmente a aquellos cursos más pequeños a ser representados y que tengan su voz en el Centro de Alumnos. El nuevo sistema incluirá a las presidentas y los presidentes de cada curso como integrantes activos del Centro de Alumnos. Este sistema permitiría , al mismo tiempo, establecer relaciones más estrechas con los cursos de nuestro colegio y se tendrá una mejor comunicación con estas partes indispensables de la comunidad, lo cual facilitará la difusión de información y la retroalimentación. </p>

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <h3 style={{textAlign:"justify"}}>Feedback continuo</h3>
                        
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                      <p style={{textAlign:"justify"}}>Nuestro lema, por la comunidad, para la comunidad no es solo una frase, es una doctrina. Estamos fervientemente convencidos de que la mejor forma de representar a una comunidad es estar en contacto directamente y constantemente con aquellos que la conforman. Es por esto que queremos mejorar el funcionamiento del centro de alumnos mediante encuestas. Básicamente, haremos encuestas regularmente con el fin de: </p>
                        <ul style={{textAlign:"justify"}}>
                            <li>Juntar nuevas propuestas del alumnado para que luego el mismo alumnado las pueda evaluar en una encuesta siguiente</li>
                            <li>Evaluar las propuestas anteriores, para que así el mismo alumnado vote por lo que le gusta y estima importante, de tal forma, que el centro de alumnos sepa que es importante hacer y proponer.</li>
                        </ul>
                        <p style={{textAlign:"justify"}}>Algunas medidas que tomaremos para realizar lo propuesto son:</p>
                        <ol style={{textAlign:"justify"}}>
                          <li>Encuesta original: el alumno envía su problemática general relativa al colegio al centro de alumnos. </li>
                          <li>Siguiente encuesta: el centro de alumnos incluye la propuesta de tal forma que los alumnos puedan votar por ella. </li>
                          <li>Si es que aquella propuesta obtiene mayoría, entonces el centro de alumnos tramitará esta propuesta directamente con el colegio. </li>
                        </ol>
                        <p style={{textAlign:"justify"}}>Gracias a este proceso, el CAA podrá contar con datos que apoyan la importancia de esta medida para el alumnado, pues el mismo alumnado lo propuso y eligió. </p>
                        <br></br>
                        <p style={{textAlign:"justify"}}>Las redes sociales serán parte clave de estos anuncios y procesos. Con la finalidad de comunicar continuamente lo que se está realizando, junto a los resultados de las encuestas se usarán dos medios de comunicación en específico: </p>
                        <ul style={{textAlign:"justify"}}>
                            <li><a href="https://www.instagram.com/soywapolistaa/">Instagram</a> por su volatilidad, fácil uso y popularidad.</li>
                            <li>Nuestra página web, que a diferencia de instagram, permite exponer la información con mayor precisión y profundidad, además de servir como un registro para el alumnado. </li>
                        </ul>
                        <p style={{textAlign:"justify"}}>Finalmente, se incorporará al servidor de <a href="https://discord.gg/tPpUskwuD5">Discord</a> creado el año pasado (Chamber of Secrets). En este se buscará fomentar que el alumnado tenga un espacio para reunirse durante las cuarentenas, junto con conocer a miembros de otros cursos. También puede servir como un buen medio de difusión de información y de estudio. </p>

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <h3 style={{textAlign:"justify"}}>Reconocimiento</h3>
                        
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                      <p style={{textAlign:"justify"}}>El sentimiento de comunidad y pertenencia es esencial para la buena convivencia en nuestro colegio. Fomentar este sentimiento de comunidad reconociendo los logros de los alumnos, profesores y auxiliares es algo que se ha perdido y que creemos que todos necesitamos. Esto fomenta el sentimiento de empatía y de alegría por el otro. Celebraremos todo tipo de logro extraordinario en el sentido académico, deportivo, artístico, entre otros.</p>


                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <h3 style={{textAlign:"justify"}}>Clubes</h3>
                        
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                      <p style={{textAlign:"justify"}}>Existen Talleres manejados por profesores, pero no existen clubes de interés manejados por los mismos alumnos. Creemos que este tipo de grupos de interés podrían generar nuevas y frescas ideas, además de formar amistades que van más allá del curso donde te tocó. Como centro de alumnos, ofrecemos el apoyo al alumnado para difundir estas iniciativas, de tal forma que puedan llegar  nuevos miembros que les interese el tema a su respectivo club y proporcionarles ayuda y recursos para que estos Clubes no desaparezcan. Un club puede ser de cualquier cosa de interés, como ejemplo, se podría crear un club de LOL, un club de Dungeons and Dragons, de Fifa, de Basquet, etc.</p>
                      <br></br>
                      
                      <p style={{textAlign:"justify"}}>Considerando que el colegio acoge el programa IB y por ende la asignatura CAS, podría ser un buen proyecto crear un club como proyecto CAS, por lo que también es una instancia conveniente para los miembros de la comunidad.</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <h3 style={{textAlign:"justify"}}>Eventos conjuntos con otros colegios</h3>
                        
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                      <p style={{textAlign:"justify"}}>Otra forma de desarrollar el sentimiento de pertenencia es entrando en contacto con otras comunidades. La competencia sana y la interacción con otros colegios en actividades organizadas en conjunto es una forma muy entretenida de compartir y sentirnos como un equipo con aquellos de nuestro colegio. Aunque estemos en cuarentena, estos eventos son realizables y requiere solo la energía y las ganas de participar . </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
      </Accordion>
                
        
        
        
        
        
        
       
      
      
    </div>
  );
}
}

export default Propuestas;
