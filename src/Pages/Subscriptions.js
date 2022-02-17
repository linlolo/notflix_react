import "../App.css";
import React from "react";
import SubscriptionForm from "../Components/SubscriptionForm";
import SubscriptionTable from "../Components/SubscriptionTable";

export default function Subscriptions() {
    return (
        <div className="page">
            <h2>Subscription Management</h2>
            <SubscriptionForm />
            <button className="textNavButton">Filter Subscriptions</button>
            <button className="textNavButton">Add New Subscription</button>
            <button className="textNavButton">Clear All Filters</button>
            <SubscriptionTable />
        </div>
    );
}