import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Lobby from './containers/Lobby'
import Signup from './containers/Signup'
import GameScreen from './containers/GameScreen'
import Board from './containers/Board'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <React.Fragment>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/game" component={GameScreen} />
          <Route path="/board" component={Board}/>
          <Route path="/" component={Lobby} />
        </Switch> 
    </React.Fragment>
  );
}

export default App;
