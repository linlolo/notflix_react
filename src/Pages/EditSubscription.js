import "../App.css";
import React from "react";
import SubscriptionForm from "../Components/SubscriptionForm";

export default function EditSubscription() {
    return(
        <div>
            <h3>Edit Subscription:</h3>
            <p>Note: SubscriptionID cannot be changed.</p>
            <SubscriptionForm />
            <button className="button">UPDATE SUBSCRIPTION</button>
        </div>
    );
}