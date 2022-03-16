import React from "react";
import CustomerForm from "../Components/CustomerForm";
import { useNavigate, useLocation } from 'react-router-dom';
import {API} from '../Components/api';

function EditCustomer({ customer, handleChange }) {
    const navigate = useNavigate();
    const { state } = useLocation();
    
    const updateCustomer = async () => {
        customer.customerID = state.id;
        for (const field of Object.values(customer)) {
            if (field === "") {
                alert(`Please enter all fields`)
                return;
            };
        };
        let url = `${API}/customers/${customer.customerID}`
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited customer");
        } else {
            alert(`Failed to edit customer, status code = ${response.status}`);
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