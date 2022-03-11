import "../App.css";
import React from "react";
// Same form can be used for add, search, or edit
// Only pre-populate fields if useParams passes a subscriptionID.

export default function SubscriptionForm({ subscription, handleChange }) {
    return(
        <form>
            <div className="formField">
                <label for="customerID">CustomerID:</label>
                    <input
                        type="text"
                        id="customerID"
                        name="customerID"
                        value={subscription.customerID}
                        placeholder="10792341112"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="seriesID">SeriesID:</label>
                    <input
                        type="text"
                        id="seriesID"
                        name="seriesID"
                        value={subscription.seriesID}
                        placeholder="10846290217"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="dateSubscribed">Date Subscribed:</label>
                    <input
                        type="date"
                        id="dateSubscribed"
                        name="dateSubscribed"
                        value={subscription.dateSubscribed}
                        placeholder="2022-02-01"
                        onChange={handleChange} />
            </div>
        </form>
    );
}