import './App.css';

import React from "react";
import {
  HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Customers from "./Pages/Customers";
import AddCustomer from "./Pages/AddCustomer";
import EditCustomer from "./Pages/EditCustomer";
import Series from "./Pages/Series";
import AddSeries  from './Pages/AddSeries';
import EditSeries from "./Pages/EditSeries";
import Episodes from "./Pages/Episodes";
import AddEpisode from './Pages/AddEpisode';
import EditEpisode from './Pages/EditEpisode';
import Subscriptions from "./Pages/Subscriptions";
import EditSubscription from "./Pages/EditSubscription";


function App() {
  return (
    <Router>
      {/* this part should be changed into a component named linkComponent */}
      <header>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/customers" element={<Customers />}> </Route>
          <Route path="/customers/new" element={<AddCustomer />}> </Route>
          <Route path="/customers/:customerID" element={<EditCustomer />} > </Route>
          <Route path="/series" element= {<Series />}> </Route>
          <Route path="/series/new" element={<AddSeries/>}> </Route>
          <Route path="/series/:seriesID" element={<EditSeries />}> </Route>
          <Route path="/episodes" element={<Episodes />}> </Route>
          <Route path="/episodes/new" element={<AddEpisode />}> </Route>
          <Route path="/episodes/:episodeID" element={<EditEpisode />}> </Route>
          <Route path="/subscriptions" element={<Subscriptions />}> </Route>
          <Route path="/subscriptions/:subscriptionID" element={<EditSubscription />}> </Route>
        </Routes>
        {/* There's a way to do this with nested routes and <Outlet />
        components, but we'd need to do a little restructuring... EJ */}
      </header>
    </Router>
  );
}

export default App;
