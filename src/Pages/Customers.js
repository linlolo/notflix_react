import '../App.css';
import React from "react";
import CustomerForm from "../Components/CustomerForm";
import CustomerTable from "../Components/CustomerTable";

export default function Customers() {
    return(
        <div className="page">
            <h2>Customer Management</h2>
            <CustomerForm />
            <button className="textNavButton">Add New Customer</button>
            <button className="textNavButton">Filter Customers</button>
            <button className="textNavButton">Clear All Filters</button>
            <CustomerTable />
        </div>
    );
}