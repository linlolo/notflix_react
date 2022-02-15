import "../App.css";
import React from "react";
// Same form can be used for add, search, or edit
// Only pre-populate fields if useParams passes a subscriptionID.

export default function SubscriptionForm() {
    return(
        <div>
            <form>
                <div className="formField">
                    <label>CustomerID:
                        <input
                            type="text"
                            id="customerID"
                            name="customerID"
                            value="10792341112" />
                    </label>
                </div>
                <div className="formField">
                    <label>SeriesID:
                        <input
                            type="text"
                            id="seriesID"
                            name="seriesID"
                            value="10846290217" />
                    </label>
                </div>
                <div className="formField">
                    <label>Date Subscribed:
                        <input
                            type="date"
                            id="dateSubscribed"
                            name="dateSubscribed"
                            value="2022-02-01"/>
                    </label>
                </div>
            </form>
        </div>
    );
}