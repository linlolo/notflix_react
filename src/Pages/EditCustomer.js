import React from "react";
import {GrTrash} from "react-icons/gr";
// page to edit an existing Customer. Pre-populate fields for `firstName`,
// `lastName`, `email`.
// Table below to add/delete Subscriptions.

function EditCustomer() {
    return(
        <div className="editCustomer">
            <form>
                <h3>Edit Customer details</h3>
                <div className="formField">
                    <label>First Name:
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value="John" />
                    </label>
                </div>
                <div className="formField">
                    <label>Last Name:
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value="Doe" />
                    </label>
                </div>
                <div className="formField">
                    <label>Email:
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value="email@hello.com" />
                    </label>
                </div>
                <button type="button" className="formButton">UPDATE CUSTOMER</button>
            </form>
            <table>
                <caption><h3>User's Subscriptions</h3></caption>
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>SeriesID</th>
                        <th>Series Title</th>
                        <th>Date Subscribed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><GrTrash /></td>
                        <td>10846290217</td>
                        <td>The Bandalorian</td>
                        <td>2022-01-15</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" className="formButton">ADD SUBSCRIPTION</button>
        </div>
    );
}

export default EditCustomer;