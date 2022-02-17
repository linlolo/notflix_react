import "../App.css";
import React from "react";
import SubscriptionForm from "../Components/SubscriptionForm";
import SubscriptionTable from "../Components/SubscriptionTable";

export default function Subscriptions() {
    return (
        <div className="page">
            <h2>Subscription Management</h2>
            <SubscriptionForm />
            <button className="textNavButton">ADD NEW SUBSCRIPTION</button>
            <button className="textNavButton">FILTER SUBSCRIPTIONS</button>
            <button className="textNavButton">CLEAR ALL FILTERS</button>
            <SubscriptionTable />
        </div>
    );
}