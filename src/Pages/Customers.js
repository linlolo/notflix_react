import '../App.css';
import React from "react";
import CustomerForm from "../Components/CustomerForm";
import CustomerTable from "../Components/CustomerTable";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Customers( {setCustomerToEdit} ) {
    const [customer, setCustomer] = useState({ customerID: "", firstName: "", lastName: "", email: "" });
    const [customers, setCustomers] = useState([]);
    
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setCustomer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const loadCustomers = async () => {
        const response = await fetch('/customers');
        const data = await response.json();
        setCustomers(data);
    }

    const addCustomer = async () => {
        console.log(customer)
        const response = await fetch('/customers', {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the customer");
        } else {
            response.text().then((text) => {
                console.log(text);
            })
            alert(`Failed to add customer, status code = ${response.status}`);
        }
        loadCustomers()
    }

    const filterCustomers = async () => {
        let header = {};
        let url = '/customers';
        for (const [key, value] of Object.entries(customer)) {
            if (value !== "") {
                header[key] = value;
            }
        }
        url += '?' + (new URLSearchParams(header)).toString()
        const response = await fetch(url);
        const data = await response.json();
        setCustomers(data);
        loadCustomers();
    }

    const editCustomer = async (customerToEdit) => {
        setCustomerToEdit(customerToEdit);
        let url = `/customers/${customerToEdit.customerID}`;
        navigate(url);
    }

    const deleteCustomer = async (_id) => {
        const response = await fetch(`/customers/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            alert('Successfully deleted customer');
            loadCustomers();
        } else {
            console.error(`Failed to delete customer with id=${_id}, status code = ${response.status}`);
        }
        loadCustomers();
    }

    useEffect(() => {
        loadCustomers();
    }, [])

    return (
        <div className="page">
            <h2>Customer Management</h2>
            <CustomerForm customer={customer} handleChange={handleChange}/>
            <button className="textNavButton" onClick={addCustomer}>ADD NEW CUSTOMER</button>
            <button className="textNavButton" onClick={filterCustomers}>FILTER CUSTOMERS</button>
            <button className="textNavButton" onClick={loadCustomers}>CLEAR ALL FILTERS</button>
            <CustomerTable customers={customers.customers} onDelete={deleteCustomer} onEdit={editCustomer}/>
        </div>
    );
}