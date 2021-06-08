
import React from 'react';
import { HashRouter as Router ,Switch,Route,Link} from 'react-router-dom';


import Main from './components/Main.js';
import News from './components/News.js';
import Navegacion from './components/Navegacion.js';
import About from './components/About.js';
import Propuestas from './components/Propuestas.js';
import Footer from './components/Footer.js';
import Discord from './components/Discord.js';
import Calendario from './components/calendario.js';

import {Row,Col} from 'reactstrap';




class App extends React.Component{
  
  
  render(){
    return (
    <div className='App'>
      <Navegacion></Navegacion>
      
        <Switch>
          <Route exact path='/'  component={Main}></Route>
          <Route path='/noticias' component={News}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/discord' component={Discord}></Route>
          <Route path='/calendario' component={Calendario}></Route>
        </Switch>
      
      <Footer></Footer>
    </div>
    
  );
}
}

export default App;

