import '../App.css';
import React from "react";
import CustomerForm from "../Components/CustomerForm";
import CustomerTable from "../Components/CustomerTable";
import { useState, useEffect } from 'react';

export default function Customers() {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState({ customerID: "", firstName: "", lastName: "", email: "" });

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
        const newCustomer = customer;
        const response = await fetch('/customers', {
            method: 'POST',
            body: JSON.stringify(newCustomer),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the customer");
        } else {
            alert(`Failed to add customer, status code = ${response.status}`);
        }
    }

    useEffect(() => {
        loadCustomers();
    }, [])

    return (
        <div className="page">
            <h2>Customer Management</h2>
            <CustomerForm customer={customer} handleChange={handleChange}/>
            <button className="textNavButton" onClick={addCustomer}>ADD NEW CUSTOMER</button>
            <button className="textNavButton">FILTER CUSTOMERS</button>
            <button className="textNavButton">CLEAR ALL FILTERS</button>
            <CustomerTable customers={customers}/>
        </div>
    );
}