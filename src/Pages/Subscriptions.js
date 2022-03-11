import "../App.css";
import React from "react";
import SubscriptionForm from "../Components/SubscriptionForm";
import SubscriptionTable from "../Components/SubscriptionTable";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import moment from "moment";

export default function Subscriptions( {setSubscriptionToEdit }) {
    const [subscriptions, setSubscriptions] = useState([]);
    const [subscription, setSubscription] = useState({ subscriptionID: "", customerID: "", firstName: "", lastName: "", seriesID: "", title: "", dateSubscribed: "" });

    const navigate = useNavigate();

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
        setSubscriptions(data.subscriptions);
    }

    const addSubscription = async () => {
        const response = await fetch('/subscriptions', {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the subscription");
        } else {
            alert(`Failed to add subscription, status code = ${response.status}`);
        }
        loadSubscriptions();
    }

    const filterSubscriptions = async () => {
        let header = {};
        let url = '/subscriptions';
        for (const [key, value] of Object.entries(subscription)) {
            if (value !== "") {
                header[key] = value;
            }
        }
        url += '?' + (new URLSearchParams(header)).toString()
        const response = await fetch(url);
        const data = await response.json();
        setSubscriptions(data.subscriptions);
        loadSubscriptions();
    }

    const editSubscription = async (subscriptionToEdit) => {
        subscriptionToEdit.dateSubscribed = moment(subscriptionToEdit.dateSubscribed).format("YYYY-MM-DD")
        setSubscriptionToEdit(subscriptionToEdit);
        let url = `/subscriptions/${subscriptionToEdit.subscriptionID}`;
        navigate(url);
    }

    const deleteSubscription = async (_id) => {
        const response = await fetch(`/subscriptions/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            alert('Successfully deleted subscription');
        } else {
            console.error(`Failed to delete subscription with id=${_id}, status code = ${response.status}`);
        }
        loadSubscriptions();
    }

    useEffect(() => {
        loadSubscriptions();
    }, [])

    return (
        <div className="page">
            <h2>Subscription Management</h2>
            <SubscriptionForm subscription={subscription} handleChange={handleChange} />
            <button className="textNavButton" onClick={addSubscription}>ADD NEW SUBSCRIPTION</button>
            <button className="textNavButton" onClick={filterSubscriptions}>FILTER SUBSCRIPTIONS</button>
            <button className="textNavButton" onClick={loadSubscriptions}>CLEAR ALL FILTERS</button>
            <SubscriptionTable subscriptions={subscriptions} onDelete={deleteSubscription} onEdit={editSubscription}/>
        </div>
    );
}