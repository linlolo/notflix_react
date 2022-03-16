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
                        onChange={ handleChange } />
            </div>
            <div className="formField">
            <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={customer.firstName}
                        placeholder="First Name"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={customer.lastName}
                        placeholder="Last Name"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={customer.email}
                        placeholder="email@email.com"
                        onChange={handleChange} />
            </div>
        </form>
    );
}