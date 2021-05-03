import React from 'react';

import '../App.css';
import Noticia from './Noticia.js';
import Anuncio from './Anuncio.js';

import {integrantes} from './Integrantes.json';
import { Container } from 'reactstrap';
import {Card, Accordion, Button} from 'react-bootstrap';


import pilares from './pilares.png';
import pilarCentral from './pilarCentral.png';



class Propuestas extends React.Component{
    
  
  
  render(){
    
  
    return (
    <div>
        
        <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        <h2>Nuestra Filosofía</h2>
        
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <Container>
        <h2 style={{textAlign:"justify",marginTop:"10px"}}>Nuestras Filosofía</h2>
        <p style={{textAlign:"justify"}}>Nuestra lista se basa en tres pilares fundamentales:</p>
        <img src={pilares} class="img-fluid" alt="Responsive image"/>
        
        


        <ul style={{textAlign:"justify"}}>
            <li> <b>Apertura</b>: Pensamos que el centro de alumnos es una institución que representa al alumnado y no a los intereses de un grupo pequeño de personas. Por esto estamos dispuestos a siempre escuchar la opinión de un alumno y exponerla al mismo alumnado para así determinar si es que se necesita una representación por parte del CAA para exponer a la directiva escolar el asunto.</li>
            <li><b>Comunicación</b>: Para poder ser una lista abierta, creemos que la comunicación es una base fundamental . Por lo tanto, no esforzaremos por dar constantemente cuenta de los procesos en los que se encuentran los trámites de propuestas, además de proyectos internos. Esencialmente se buscará dejar a acceso de todos los miembros de la comunidad lo que el centro de alumnos está realizando, para que esta pueda comentar sobre ello. Para esto se buscará usar un uso innovador, eficaz e inteligente de la tecnología que tenemos disponible. </li>
            <li><b>Efectividad</b>: Buscamos aplicar los mejores recursos posibles para poder optimizar el trabajo y efectividad de nuestro centro de alumnos. Además, creemos que ciertas reformas de la estructura del CAA son necesarias. </li>
        </ul>
        <p style={{textAlign:"justify"}}>Estos tres pilares sostienen a uno muchos más importante, que es el objetivo de nuestro centro de alumnos: la noción de pertenencia a una <b>comunidad</b>.</p>
        <img src={pilarCentral} class="img-fluid" alt="Responsive image"/>

        </Container>
        
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        <h2>Propuestas principales</h2>
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
        <p style={{textAlign:"justify"}}>Opinamos que el antiguo sistema de delegados genera cierta lentitud en procesos de información a los curso, como también no siempre es efectivo, pues no todos los delegados destacan por su alta participación. Por estas razones, proponemos eliminar al sistema de delegados y reemplazarlo por las mismas directivas de los cursos. De esta manera, se eliminará un cargo, algo que bajará la cantidad de personas que hay en el centro de alumnos, y por ende, la comunicación interior se facilitará. Al mismo tiempo, al establecer relaciones más estrechas con las directivas de curso, se tendrá una mejor comunicación con estas importantes partes de la comunidad. Así, se facilitará la difusión de información y al mismo tiempo, el envío de retroalimentación. </p>

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
      <p style={{textAlign:"justify"}}>Somos de la opinión, de que la mejor forma de representar a una comunidad es preguntándole directamente a ella lo que necesita. Por esta razón, queremos reformar el funcionamiento del centro de alumnos mediante encuestas. Básicamente, haremos encuestas regularmente con el fin de:</p>
        <ul style={{textAlign:"justify"}}>
            <li>Juntar nuevas propuestas del alumnado para luego el mismo alumnado las pueda evaluar en una encuesta siguiente.</li>
            <li>Evaluar las propuestas anteriores, para que asi el mismo alumnado vote por lo que estima importante, de tal forma, que el centro de alumnos sepa que es importante hacer y proponer.</li>
        </ul>
        <p style={{textAlign:"justify"}}>Ahora, con la finalidad de comunicar continuamente lo que se esta realizando, junto a los resultados de las encuestas se usaran dos medios en específico: </p>
        <ul style={{textAlign:"justify"}}>
            <li>Instagram por su volatilidad, fácil uso y masividad.</li>
            <li>Esta misma página web, que a diferencia de instagram, permite exponer la información con mayor precisión y profundidad, además de servir como un registro para el alumnado.</li>
        </ul>
        <p style={{textAlign:"justify"}}>Finalmente, se incorporará al servidor de Discord creado el año pasado (Chamber of Secrets). En este se buscará fomentar que el alumnado tenga un espacio para juntarse durante las cuarentenas, junto a conocer a miembros de otros cursos. También puede servir como un buen medio de difusión de información y de estudio. </p>

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
      <p style={{textAlign:"justify"}}>Opinamos que una buena forma de fomentar el sentimiento de comunidad es reconociendo a los alumnos, para así desarrollar la empatía que unos sienten a otros, y también, para celebrar logros excepcionales o especiales. Por lo tanto, celebraremos todo tipo de logro extraordinario en el sentido académico, deportivo, artístico, entre otros. Esto no solo se dará entre alumnos, pues los profesores y auxiliares también son integrantes fundamentales de nuestra comunidad. Así, también se buscará premiar a estas personas. </p>


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
      <p style={{textAlign:"justify"}}>Con Clubes nos referimos a grupos de alumnos que se juntan regularmente en un lugar para discutir un tema o realizar una actividad. La gran diferencia que esto tiene con los talleres, es que los talleres son una lista de la cual se elige, mientras que los clubes son iniciativas que nacen de los alumnos y son impulsadas por los mismos. Así, los alumnos podrán tener el apoyo del centro de alumnos para difundir estas iniciativas, de tal forma que se pueda invitar a nuevos miembros que les interese el tema. Por ejemplo, se podría crear un club que LOL que se junte todos los jueves a las 18:00 a jugar. Todo esto ayudará además a reforzar el sentimiento de comunidad, ya que los alumnos podrán conocer a personas que no sean del mismo curso/generación. </p>
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
      <p style={{textAlign:"justify"}}>Otra forma de desarrollar el sentimiento de pertenencia, es entrando en contacto con otras comunidades. La competencia sana, la interacción con otras comunidades en actividades organizadas en conjunto pueden ser un buen método para lograr esto, ya que permiten dar a entender que el colegio es un equipo y que todos estamos juntos en lo mismo. Es decir, es una buena forma de unificar al colegio, incluso en situaciones como las cuarentenas, que nos alejan paulatinamente.  </p>
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
