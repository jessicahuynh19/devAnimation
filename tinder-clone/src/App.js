import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
         <Route path="/chat/:person">
          <Header backButton="/chat"/>   
          <ChatScreen />
           <Chats />
         </Route>
         <Route path="/chats">
          <Header backButton="/chat"/>   
           <Chats />
         </Route>     
         <Route path="/">   
          <Header />
           <TinderCards />
           <SwipeButtons />
         </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
  