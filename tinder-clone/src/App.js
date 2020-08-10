import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      <Header /> 
      <Router>
       

       <Switch>
         <Route path="/chat">
           <h1>I am the chat</h1>
         </Route>
         
         <Route path="/">   
           <TinderCards />
         </Route>
       </Switch>






      </Router>

    </div>
  );
}

export default App;
  