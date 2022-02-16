import "../App.css";
import React from "react";
import {Link} from "react-router-dom";
import {GrEdit, GrTrash} from "react-icons/gr";
// Eventually generate rows with a "Customer" component built from
// query results.

export default function CustomerTable() {
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
            <tr>
                <td>
                    <Link to="10792341112">
                        <GrEdit />
                    </Link>
                </td>
                <td><GrTrash /></td>
                <td>10792341112</td>
                <td>John</td>
                <td>Doe</td>
                <td>email@hello.com</td>
            </tr>
            </tbody>
        </table>
    );
}