import "../App.css";
import React from "react";
import SubscriptionForm from "../Components/SubscriptionForm";
import { useNavigate, useLocation } from 'react-router-dom';

export default function EditSubscription({ subscription, handleChange }) {
    const navigate = useNavigate();
    const { state } = useLocation();

    const updateSubscription = async () => {
        subscription.subscriptionID = state.id;
        console.log(subscription)
        for (const field of Object.values(subscription)) {
            if (field === "") {
                alert(`Please enter all fields`)
                return;
            };
        };
        let url = `/subscriptions/${subscription.subscriptionID}`
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(subscription),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited subscription");
        } else {
            alert(`Failed to edit subscription, status code = ${response.status}`);
        }
        navigate('/subscriptions')
    }
    
    return(
        <div className="page">
            <h3>Edit Subscription:</h3>
            <p>Note: SubscriptionID cannot be changed.</p>
            <SubscriptionForm subscription={subscription} handleChange={handleChange}/>
            <button className="button" onClick={updateSubscription}>UPDATE SUBSCRIPTION</button>
        </div>
    );
}