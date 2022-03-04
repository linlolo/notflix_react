import "../App.css";
import React from "react";
import {GrEdit, GrTrash} from "react-icons/gr";

export default function CustomerTable({ customers }) {
    return(
        <table>
            <caption>Customer Results:</caption>
            <thead>
            <tr>
                <th>Edit</th>
                <th>Delete</th>
                <th>CustomerID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
                {customers.map((customer, i) => <Customer customer={customer}
                    key={i} />)}
            </tbody>
        </table>
    );
}

function Customer({ customer }) {
    return (
        <tr>
            <td><GrEdit /></td>
            <td><GrTrash /></td>
            <td>{customer.customerID}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
        </tr>
    );
}
