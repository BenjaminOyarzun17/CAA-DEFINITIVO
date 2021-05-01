
import React from 'react';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

/**
 * Import all page components here
 */
import Main from './components/Main.js';
import News from './components/News.js';
import Navegacion from './components/Navegacion.js';
import About from './components/About.js';





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
          
        </Switch>
      </Router>

    </div>
    
  );
}
}

export default App;

