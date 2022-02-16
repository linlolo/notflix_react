import React from "react";
import CustomerForm from "../Components/CustomerForm";
// page to edit an existing Customer. Pre-populate fields for `firstName`,
// `lastName`, `email`.
// Table below to add/delete Subscriptions.

function EditCustomer() {
    return(
        <div className="editCustomer">
            <h3>Edit Customer details</h3>
            <p>NOTE: CustomerID cannot be changed.</p>
            <CustomerForm />
            <button type="button" className="formButton">UPDATE CUSTOMER</button>
        </div>
    );
}

export default EditCustomer;