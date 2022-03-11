import "../App.css";
import React from "react";
import {GrEdit, GrTrash} from "react-icons/gr";

export default function CustomerTable({ customers, onDelete, onEdit }) {
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
                {customers.map((customer, i) => <Customer customer={customer} onDelete={onDelete} onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

function Customer({ customer, onDelete, onEdit }) {
    return (
        <tr>
            <td><GrEdit class='button' onClick={() => onEdit(customer)}/></td>
            <td><GrTrash class='button' onClick={() => onDelete(customer.customerID)}/></td>
            <td>{customer.customerID}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
        </tr>
    );
}
