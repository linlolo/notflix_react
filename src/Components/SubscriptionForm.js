import "../App.css";
import React from "react";
// Same form can be used for add, search, or edit
// Only pre-populate fields if useParams passes a subscriptionID.

export default function SubscriptionForm() {
    return(
        <form>
            <div className="formField">
                <label for="customerID">CustomerID:</label>
                    <input
                        type="text"
                        id="customerID"
                        name="customerID"
                        value="10792341112" />
            </div>
            <div className="formField">
                <label for="seriesID">SeriesID:</label>
                    <input
                        type="text"
                        id="seriesID"
                        name="seriesID"
                        value="10846290217" />
            </div>
            <div className="formField">
                <label for="dateSubscribed">Date Subscribed:</label>
                    <input
                        type="date"
                        id="dateSubscribed"
                        name="dateSubscribed"
                        value="2022-02-01"/>
            </div>
        </form>
    );
}