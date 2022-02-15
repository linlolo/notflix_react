import "../App.css";
import React from "react";
import {Link} from "react-router-dom";
import {GrEdit, GrTrash} from "react-icons/gr";

export default function SubscriptionTable() {
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
                {/* Eventually we use a map function to generate table rows here
                 with a "Subscription" component */}
                    <tr>
                        <td>
                            <Link to="10792341112">
                                <GrEdit />
                            </Link>
                        </td>
                        <td><GrTrash /></td>
                        <td>20371009228</td>
                        <td>10792341112</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>10846290217</td>
                        <td>The Bandalorian</td>
                        <td>2022-02-01</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}