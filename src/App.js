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
// import NewCustomerForm from "./Pages/NewCustomerForm";
// import Customer from "./Pages/Customer";
import Content from "./Pages/Content";

function App() {
  return (
    <Router>
      {/* this part should be changed into a component named linkComponent */}
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
          <Route path="/" element={<App />}> </Route>
            <Route index element={<Home />}> </Route>
            <Route path="customers" element={<Customers />}>
              {/* <Route path="new" element={<NewCustomerForm />} />  */}
              {/* <Route path=":customerID" element={<Customer />} > */}
            </Route>
            <Route path="/content" element= {<Content />}> </Route>
        </Routes>
      </header>
    </Router>
  );
}

export default App;
