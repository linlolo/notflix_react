import "../App.css";
import React from "react";
import { useState, useEffect } from "react";
import SubscriptionForm from "../Components/SubscriptionForm";
import SubscriptionTable from "../Components/SubscriptionTable";

export default function Subscriptions() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [subscription, setSubscription] = useState({ subscriptionID: "", customerID: "", firstName: "", lastName: "", seriesID: "", title: "", dateSubscribed: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setSubscription(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const loadSubscriptions = async () => {
        const response = await fetch('/subscriptions');
        const data = await response.json();
        setSubscriptions(data);
    }

    const addSubscription = async () => {
        const newSubscription = subscription;
        const response = await fetch('/subscriptions', {
            method: 'POST',
            body: JSON.stringify(newSubscription),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the customer");
        } else {
            alert(`Failed to add customer, status code = ${response.status}`);
        }
    }

    useEffect(() => {
        loadSubscriptions();
    }, [])

    return (
        <div className="page">
            <h2>Subscription Management</h2>
            <SubscriptionForm subscription={subscription} handleChange={handleChange} />
            <button className="textNavButton" onClick={addSubscription}>ADD NEW SUBSCRIPTION</button>
            <button className="textNavButton">FILTER SUBSCRIPTIONS</button>
            <button className="textNavButton">CLEAR ALL FILTERS</button>
            <SubscriptionTable subscriptions={subscriptions}/>
        </div>
    );
}