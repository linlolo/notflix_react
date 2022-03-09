import React from "react";
import CustomerForm from "../Components/CustomerForm";
import { useNavigate } from 'react-router-dom';
// page to edit an existing Customer. Pre-populate fields for `firstName`,
// `lastName`, `email`.
// Table below to add/delete Subscriptions.

function EditCustomer({ customer, handleChange }) {
    const navigate = useNavigate();

    const updateCustomer = async () => {
        let url = `/customers/${customer.customerID}`
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited exercise");
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        navigate('/customers')
    }

    return(
        <div className="page">
            <h3>Edit Customer details</h3>
            <p>NOTE: CustomerID cannot be changed.</p>
            <CustomerForm customer={customer} handleChange={handleChange} />
            <button type="button" className="formButton" onClick={updateCustomer}>UPDATE CUSTOMER</button>
        </div>
    );
}

export default EditCustomer;