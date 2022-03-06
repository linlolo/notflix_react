import "../App.css";
import React from "react";
import {GrEdit, GrTrash} from "react-icons/gr";

export default function SubscriptionTable( { subscriptions }) {
    return (
        <div>
            <table>
                <caption>Subscription Results:</caption>
                <thead>
                <tr>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>SubscriptionID</th>
                    <th>CustomerID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>SeriesID</th>
                    <th>Series Title</th>
                    <th>Date Subscribed</th>
                </tr>
                </thead>
                <tbody>
                    {subscriptions.map((subscription, i) => <Subscription subscription={subscription}
                        key={i} />)}
                </tbody>
            </table>
        </div>
    );
}

function Subscription({ subscription }) {
    return (
        <tr>
            <td><GrEdit /></td>
            <td><GrTrash /></td>
            <td>{subscription.subscriptionID}</td>
            <td>{subscription.customerID}</td>
            <td>{subscription.firstName}</td>
            <td>{subscription.lastName}</td>
            <td>{subscription.seriesID}</td>
            <td>{subscription.title}</td>
            <td>{subscription.dateSubscribed}</td>
        </tr>
    );
}
