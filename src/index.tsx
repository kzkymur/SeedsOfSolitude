import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Live from './component/Live';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route path='/Live' component={Live}/> 
        </Switch>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
