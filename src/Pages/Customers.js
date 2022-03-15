import '../App.css';
import React from "react";
import CustomerForm from "../Components/CustomerForm";
import CustomerTable from "../Components/CustomerTable";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {API} from '../Components/api';

export default function Customers( { setCustomerToEdit } ) {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState({ customerID: "", firstName: "", lastName: "", email: "" });
    
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setCustomer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const loadCustomers = async () => {
        const response = await fetch(`${API}/customers`);
        const data = await response.json();
        setCustomers(data.customers);
    }

    const addCustomer = async () => {
        const response = await fetch(`${API}/customers`, {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the customer");
        } else {
            alert(`Failed to add customer, status code = ${response.status}`);
        }
        setCustomers(response.customers);
    }

    const filterCustomers = async () => {
        let header = {};
        let url = `${API}/customers`;
        for (const [key, value] of Object.entries(customer)) {
            if (value !== "") {
                header[key] = value;
            }
        }
        url += '?' + (new URLSearchParams(header)).toString();
        const response = await fetch(url);
        const data = await response.json();
        setCustomers(data.customers);
    }

    const editCustomer = async (customerToEdit) => {
        setCustomerToEdit(customerToEdit);
        let url = `${API}/customers/${customerToEdit.customerID}`;
        navigate(url);
    }

    const deleteCustomer = async (_id) => {
        const response = await fetch(`${API}/customers/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            alert('Successfully deleted customer');
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
            <CustomerTable customers={customers} onDelete={deleteCustomer} onEdit={editCustomer}/>
        </div>
    );
}