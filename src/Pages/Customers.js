import '../App.css';
import React from "react";
import {Link} from "react-router-dom";
import {GrTrash, GrEdit} from "react-icons/gr";

export default function Customers() {
    return(
        <div className="customers">
            <h2>Customer Management</h2>
            <Link to="/customers/new">
                <button className="textNavButton">Add a New Customer</button>
            </Link>
            <p>~OR~</p>
            <form className="customerSearchForm">
                <h3>Search for Customers</h3>
                <p>Leaving fields blank will return all customers.</p>
                <div className="formField">
                    <label>Customer ID:
                        <input
                            type="text"
                            id="customerID"
                            name="customerID" />
                    </label>
                </div>
                <div className="formField">
                    <label>First Name:
                        <input
                            type="text"
                            id="firstName"
                            name="firstName" />
                    </label>
                </div>
                <div className="formField">
                    <label>Last Name:
                        <input
                            type="text"
                            id="lastName"
                            name="lastName" />
                    </label>
                </div>
                <div className="formField">
                    <label>Email:
                        <input
                            type="text"
                            id="email"
                            name="email" />
                    </label>
                </div>
                <button type="button" className="formButton">SEARCH</button>
            </form>
            <table>
                <caption>Search Results:</caption>
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>CustomerID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to="/customers/10792341112">
                                <GrEdit />
                            </Link>
                        </td>
                        <td><GrTrash /></td>
                        <td>10792341112</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>email@hello.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}