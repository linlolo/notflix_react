import "../App.css";
import React from "react";
import {Link} from "react-router-dom";
import {GrTrash, GrEdit} from "react-icons/gr";

export default function GenreTable() {
    return(
        <table>
            <caption>Genre Results:</caption>
            <thead>
                <th>Edit</th>
                <th>Delete</th>
                <th>Genre ID</th>
                <th>Genre Name</th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Link to="17000203001">
                            <GrEdit />
                        </Link>
                    </td>
                    <td><GrTrash /></td>
                    <td>17000203001</td>
                    <td>Space Western</td>
                </tr>
            </tbody>
        </table>
    );
}