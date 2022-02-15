import "../App.css";
import React from "react";
import SubscriptionForm from "../Components/SubscriptionForm";

export default function EditSubscription() {
    return(
        <div>
            <h3>Edit Subscription:</h3>
            <SubscriptionForm />
            <button className="button">SUBMIT</button>
        </div>
    );
}