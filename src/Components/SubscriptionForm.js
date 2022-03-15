import "../App.css";
import React from "react";
// Same form can be used for add, search, or edit
// Only pre-populate fields if useParams passes a subscriptionID.

export default function SubscriptionForm({ subscription, handleChange }) {
    return(
        <form>
            <div className="formField">
                <label htmlFor="customerID">CustomerID:</label>
                    <input
                        type="text"
                        id="customerID"
                        name="customerID"
                        value={subscription.customerID}
                        placeholder="Customer ID"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label htmlFor="seriesID">SeriesID:</label>
                    <input
                        type="text"
                        id="seriesID"
                        name="seriesID"
                        value={subscription.seriesID}
                        placeholder="Series ID"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label htmlFor="dateSubscribed">Date Subscribed:</label>
                    <input
                        type="date"
                        id="dateSubscribed"
                        name="dateSubscribed"
                        value={subscription.dateSubscribed}
                        placeholder="YYYY-MM-DD"
                        onChange={handleChange} />
            </div>
        </form>
    );
}