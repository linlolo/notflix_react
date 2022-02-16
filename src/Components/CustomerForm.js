import "../App.css";
import React from "react";
// Form for add / search / edit customers.
// Prepopulate all fields for Edit, otherwise default to empty strings
// and "Leave blank" note for create new.

export default function CustomerForm() {
    return (
        <form className="customerSearchForm">
            <div className="formField">
                <label>Customer ID:
                    <input
                        type="text"
                        id="customerID"
                        name="customerID"
                        value="Leave blank to create new Customer"/>
                </label>
            </div>
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
        </form>
    );
}