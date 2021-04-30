
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import Main from './components/Main.js';
//import SomePage from './components/SomePage';
//import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 * <Route path="/some/where" component={SomePage} />
    <Route path="/some/otherpage" component={SomeOtherPage} />
 */




class App extends React.Component{
  
  
  render(){
    return (
    <Route path="/" component={Main}>
      
    </Route>
  );
}
}

export default App;

