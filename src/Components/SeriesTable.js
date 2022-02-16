import "../App.css";
import React from "react";
import {Link} from "react-router-dom";
import {GrEdit, GrTrash} from "react-icons/gr";

export default function SeriesTable() {
    return (
        <table>
            <caption>Series Results:</caption>
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Series ID</th>
                    <th>Title</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Link to="10846290217">
                            <GrEdit />
                        </Link>
                    </td>
                    <td><GrTrash /></td>
                    <td>10846290217</td>
                    <td>The Bandalorian</td>
                    <td>PG-13</td>
                </tr>
            </tbody>
        </table>
    );
}