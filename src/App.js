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


function App() {
  const [customerToEdit, setCustomerToEdit] = useState();
  const [seriesToEdit, setSeriesToEdit] = useState();
  const [episodeToEdit, setEpisodeToEdit] = useState();
  const [episodeDropdown, setEpisodeDropdown] = useState([{ value: null, label:'Null' }]);
  const [subscriptionToEdit, setSubscriptionToEdit] = useState();
  const [genreToEdit, setGenreToEdit] = useState();

  const editCustomer = e => {
    const { name, value } = e.target;
    setCustomerToEdit(prevState => ({ ...prevState, [name]: value }));
  };

  const editSeries = e => {
    const { name, value } = e.target;
    setSeriesToEdit(prevState => ({ ...prevState, [name]: value }));
  };

  const editEpisode = e => {
    const { name, value } = e.target;
    setEpisodeToEdit(prevState => ({ ...prevState, [name]: value }));
  };

  const editSubscription = e => {
    const { name, value } = e.target;
    setSubscriptionToEdit(prevState => ({ ...prevState, [name]: value }));
  };

  const editGenre = e => {
    const { name, value } = e.target;
    setGenreToEdit(prevState => ({ ...prevState, [name]: value }));
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
          <Route path="/series" element= {<Series setSeriesToEdit={setSeriesToEdit}/>}> </Route>
          <Route path="/series/:seriesID" element={<EditSeries series={seriesToEdit} handleChange={editSeries} />}> </Route>
          
          <Route path="/episodes" element={<Episodes setEpisodeToEdit={setEpisodeToEdit} setEpisodeDropdown={setEpisodeDropdown} episodeDropdown={episodeDropdown} />}> </Route>
          <Route path="/episodes/:episodeID" element={<EditEpisode episode={episodeToEdit} handleChange={editEpisode} episodeDropdown={episodeDropdown} />}> </Route>

          <Route path="/subscriptions" element={<Subscriptions setSubscriptionToEdit={setSubscriptionToEdit}/>}> </Route>
          <Route path="/subscriptions/:subscriptionID" element={<EditSubscription subscription={subscriptionToEdit} handleChange={editSubscription} />}> </Route>
          
          <Route path="/genres" element={<Genres setGenreToEdit={setGenreToEdit}/>}> </Route>
          <Route path="/genres/:genreID" element={<EditGenre genre={genreToEdit} handleChange={editGenre} />}> </Route>
          
          <Route path="/types" element={<ContentTypes />}> </Route>

        </Routes>
        {/* There's a way to do this with nested routes and <Outlet />
        components, but we'd need to do a little restructuring... EJ */}
      </header>
    </Router>
  );
}

export default App;
