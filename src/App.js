import './App.css';

import React from "react";
import {
  HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { useState } from 'react';

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Customers from "./Pages/Customers";
import EditCustomer from "./Pages/EditCustomer";
import Series from "./Pages/Series";
import EditSeries from "./Pages/EditSeries";
import Episodes from "./Pages/Episodes";
import EditEpisode from './Pages/EditEpisode';
import Subscriptions from "./Pages/Subscriptions";
import EditSubscription from "./Pages/EditSubscription";
import Genres from "./Pages/Genres";
import EditGenre from "./Pages/EditGenre";
import ContentTypes from "./Pages/ContentTypes";
import EditType from "./Pages/EditType";


function App() {
  const [customerToEdit, setCustomerToEdit] = useState();
  const editCustomer = e => {
    const { name, value } = e.target;
    setCustomerToEdit(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  return (
    <Router>
      {/* this part should be changed into a component named linkComponent */}
      <header>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/customers" element={<Customers setCustomerToEdit={setCustomerToEdit}/>}> </Route>
          <Route path="/customers/:customerID" element={<EditCustomer customer={customerToEdit} handleChange={editCustomer} />} > </Route>
          <Route path="/series" element= {<Series />}> </Route>
          <Route path="/series/:seriesID" element={<EditSeries />}> </Route>
          <Route path="/episodes" element={<Episodes />}> </Route>
          <Route path="/episodes/:episodeID" element={<EditEpisode />}> </Route>
          <Route path="/subscriptions" element={<Subscriptions />}> </Route>
          <Route path="/subscriptions/:subscriptionID" element={<EditSubscription />}> </Route>
          <Route path="/genres" element={<Genres />}> </Route>
          <Route path="/genres/:genreID" element={<EditGenre />}> </Route>
          <Route path="/types" element={<ContentTypes />}> </Route>
          <Route path="/types/:typeID" element={<EditType />}> </Route>
        </Routes>
        {/* There's a way to do this with nested routes and <Outlet />
        components, but we'd need to do a little restructuring... EJ */}
      </header>
    </Router>
  );
}

export default App;
