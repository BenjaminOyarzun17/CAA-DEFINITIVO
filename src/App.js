
import React from 'react';
import { HashRouter as Router ,Switch,Route,Link} from 'react-router-dom';


import Main from './components/Main.js';
import News from './components/News.js';
import Navegacion from './components/Navegacion.js';
import About from './components/About.js';
import Propuestas from './components/Propuestas.js';
import Footer from './components/Footer.js';

import {Row,Col} from 'reactstrap';




class App extends React.Component{
  
  
  render(){
    return (
    <div className='App'>
      <Navegacion></Navegacion>
      
        
          <Route exact path='/'  component={Main}></Route>
          <Route path='/noticias' component={News}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/propuestas' component={Propuestas}></Route>
        
      
      <Footer></Footer>
    </div>
    
  );
}
}

export default App;

