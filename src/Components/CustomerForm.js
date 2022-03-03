import "../App.css";
import React from "react";
// Form for add / search / edit customers.
// Prepopulate all fields for Edit, otherwise default to empty strings
// and "Leave blank" note for create new.

export default function CustomerForm( {setCustomerID, setFirstName, setLastName, setEmail, customer} ) {
    if (customer === undefined) {
        return (
            <form className="customerSearchForm">
                <div className="formField">
                    <label for="customerID">Customer ID:</label>
                        <input
                            type="text"
                            id="customerID"
                            name="customerID"
                            value=""
                            placeholder="Leave blank to create new Customer"
                            onChange={e => setCustomerID(e.target.value)}/>
                </div>
                <div className="formField">
                    <label for="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value=""
                            placeholder="John"
                            onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="formField">
                    <label for="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value=""
                            placeholder="Doe"
                            onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="formField">
                    <label for="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value=""
                            placeholder="email@hello.com"
                            onChange={e => setEmail(e.target.value)} />
                </div>
            </form>
        );
    } else {
        return (
            <form className="customerSearchForm">
                <div className="formField">
                    <label for="customerID">Customer ID:</label>
                        <input
                            type="text"
                            id="customerID"
                            name="customerID"
                            value={customer.customerID}
                            placeholder="Leave blank to create new Customer"/>
                </div>
                <div className="formField">
                    <label for="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={customer.firstName} />
                </div>
                <div className="formField">
                    <label for="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={customer.lastName} />
                </div>
                <div className="formField">
                    <label for="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={customer.email} />
                </div>
            </form>
        );
    }
}