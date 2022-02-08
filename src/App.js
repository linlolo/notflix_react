import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/customers">Customer Management</Link>
            </li>
            <li>
              <Link to="/content">Content Management</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/content">
            <Content />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </Router>
  );
}

export default App;
