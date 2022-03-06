import "../App.css";
import React from "react";
// Form for add / search / edit customers.
// Prepopulate all fields for Edit, otherwise default to empty strings
// and "Leave blank" note for create new.

export default function CustomerForm( { customer, handleChange } ) {
    return (
        <form className="customerSearchForm">
            <div className="formField">
                <label for="customerID">Customer ID:</label>
                    <input
                        type="text"
                        id="customerID"
                        name="customerID"
                        value={customer.customerID}
                        placeholder="Leave blank to create new Customer"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={customer.firstName}
                        placeholder="John"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={customer.lastName}
                        placeholder="Doe"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={customer.email}
                        placeholder="email@hello.com"
                        onChange={handleChange} />
            </div>
        </form>
    );
}