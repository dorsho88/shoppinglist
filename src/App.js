import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListManager from './components/ListManager';
import Details from './components/Details';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/details/:id"} component={Details} />
          <Route path={"/"} component={ListManager} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
