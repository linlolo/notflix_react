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
import AddCustomer from "./Pages/AddCustomer";
import EditCustomer from "./Pages/EditCustomer";
import Content from "./Pages/Content";
import AddSeries  from './Pages/AddSeries';
import EditSeries from "./Pages/EditSeries";
import AddEpisode from './Pages/AddEpisode';

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
            <Route path="customers" element={<Customers />}> </Route>
            <Route path="/customers/new" element={<AddCustomer />}> </Route>
            <Route path="customers/:customerID" element={<EditCustomer />} > </Route>

            <Route path="content" element= {<Content />}> </Route>
            <Route path="/series/new" element={<AddSeries/>}> </Route>
            <Route path="/series/:seriesID" element={<EditSeries />}> </Route>
            <Route path="/episodes/new" element={<AddEpisode />}> </Route>
        </Routes>
        {/* There's a way to do this with nested routes and an <Outlet />
        component, but we'd need to do a little restructuring... EJ */}
      </header>
    </Router>
  );
}

export default App;
