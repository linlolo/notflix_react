import "../App.css";
import React from "react";
import {Link} from "react-router-dom";
import {GrTrash, GrEdit} from "react-icons/gr";

export default function ContentTypesTable() {
    return (
        <table>
            <caption>ContentTypes Results:</caption>
            <thead>
                <th>Edit</th>
                <th>Delete</th>
                <th>ContentType ID</th>
                <th>Series ID</th>
                <th>Series Title</th>
                <th>Genre ID</th>
                <th>Genre Name</th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Link to="19000010023">
                            <GrEdit />
                        </Link>
                    </td>
                    <td><GrTrash /></td>
                    <td>19000010023</td>
                    <td>10846290217</td>
                    <td>The Bandalorian</td>
                    <td>17000203001</td>
                    <td>Space Western</td>
                </tr>
            </tbody>
        </table>
    );
}