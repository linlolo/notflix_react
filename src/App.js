import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from "./Pages/Home";
import Customers from "./Pages/Customers";
import Content from "./Pages/Content";

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
        <Routes>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/content">
            <Content />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </header>
    </Router>
  );
}

export default App;
