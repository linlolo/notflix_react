import "../App.css";
import React from "react";
import {GrEdit, GrTrash} from "react-icons/gr";
import moment from "moment"

export default function SubscriptionTable( { subscriptions, onDelete, onEdit }) {
    return(
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
                    {subscriptions.map((subscription, i) => <Subscription subscription={subscription} onDelete={onDelete} onEdit={onEdit}
                        key={i} />)}
                </tbody>
            </table>
        </div>
    );
}

function Subscription({ subscription, onDelete, onEdit }) {
    return (
        <tr>
            <td><GrEdit className="button" onClick={() => onEdit(subscription)}/></td>
            <td><GrTrash className="button" onClick={() => onDelete(subscription.subscriptionID)}/></td>
            <td>{subscription.subscriptionID}</td>
            <td>{subscription.customerID}</td>
            <td>{subscription.firstName}</td>
            <td>{subscription.lastName}</td>
            <td>{subscription.seriesID}</td>
            <td>{subscription.title}</td>
            <td>{moment(subscription.dateSubscribed).format("YYYY-MM-DD")}</td>
        </tr>
    );
}
