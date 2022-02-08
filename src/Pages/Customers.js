import '../App.css';
import React from "react";
import {Link} from "react-router-dom";

export default function Customers() {
    return(
        <div className="customers">
            <h2>Customer Management</h2>
            <Link to="customers/new">
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
                <button type="button" className="formButton">SEARCH</button>
            </form>
        </div>
    );
}