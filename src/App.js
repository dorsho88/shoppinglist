import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from './components/List';
import Details from './components/Details';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path={"/details/:id"} component={Details} />
          <Route path={"/"} component={List} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
