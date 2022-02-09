import React from "react";
// page to add a new Customer. Fields for `firstName`, `lastName`, `email`.
// Subscriptions to be added / deleted via the Customer page

function AddCustomer() {
    return(
        <div className="addCustomer">
            <form>
                <h3>Add a New_Customer</h3>
                <p>All fields are required.</p>
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
                <button type="button" className="formButton">ADD CUSTOMER</button>
            </form>
        </div>
    );
}

export default AddCustomer;