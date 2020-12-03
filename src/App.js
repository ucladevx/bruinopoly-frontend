import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Lobby from './containers/Lobby'
import Signup from './containers/Signup'
import GameScreen from './containers/GameScreen'

function App() {
  return (
    <React.Fragment>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/game" component={GameScreen} />
          <Route path="/" component={Lobby} />
        </Switch> 
    </React.Fragment>
  );
}

export default App;
