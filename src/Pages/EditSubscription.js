import "../App.css";
import React from "react";
import SubscriptionForm from "../Components/SubscriptionForm";
import { useNavigate } from 'react-router-dom';
import {API} from '../Components/api';

export default function EditSubscription({ subscription, handleChange }) {
    const navigate = useNavigate();

    const updateSubscription = async () => {
        let url = `${API}/subscriptions/${subscription.subscriptionID}`
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