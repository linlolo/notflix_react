import '../App.css';
import React from "react";
import CustomerForm from "../Components/CustomerForm";
import CustomerTable from "../Components/CustomerTable";

export default function Customers() {
    return(
        <div className="page">
            <h2>Customer Management</h2>
            <CustomerForm />
            <button className="textNavButton">ADD NEW CUSTOMER</button>
            <button className="textNavButton">FILTER CUSTOMERS</button>
            <button className="textNavButton">CLEAR ALL FILTERS</button>
            <CustomerTable />
        </div>
    );
}