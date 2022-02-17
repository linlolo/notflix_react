import "../App.css";
import React from "react";
// Form for add / search / edit customers.
// Prepopulate all fields for Edit, otherwise default to empty strings
// and "Leave blank" note for create new.

export default function CustomerForm() {
    return (
        <form className="customerSearchForm">
            <div className="formField">
                <label for="customerID">Customer ID:</label>
                    <input
                        type="text"
                        id="customerID"
                        name="customerID"
                        value="Leave blank to create new Customer"/>
            </div>
            <div className="formField">
                <label for="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value="John" />
            </div>
            <div className="formField">
                <label for="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value="Doe" />
            </div>
            <div className="formField">
                <label for="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value="email@hello.com" />
            </div>
        </form>
    );
}