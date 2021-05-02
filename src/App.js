
import React from 'react';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';


import Main from './components/Main.js';
import News from './components/News.js';
import Navegacion from './components/Navegacion.js';
import About from './components/About.js';
import Propuestas from './components/Propuestas.js';
import {Row,Col} from 'reactstrap';




class App extends React.Component{
  
  
  render(){
    return (
    <div className='App'>
      <Navegacion></Navegacion>
      <Router>
        <Switch>
          <Route path='/' exact component={Main}></Route>
          <Route path='/noticias' component={News}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/propuestas' component={Propuestas}></Route>
        </Switch>
      </Router>
      <footer style={{position:'sticky', borderStyle:"solid none none none"}}>
        <Col>
          <Row><p style={{margin:"10px"}}><a href="kschreiner@dsmorus.cl">Contacto</a></p></Row>
          <Row><p style={{margin:"10px"}}><a href="https://discord.gg/tPpUskwuD5">Discord</a></p></Row>
          <Row><p style={{margin:"10px"}}><a href="/">Instagram</a></p></Row>
          <Row><p style={{margin:"10px"}}><a href="/">Whatsapp</a></p></Row>


        </Col>
        
        
      
      </footer>
    </div>
    
  );
}
}

export default App;

