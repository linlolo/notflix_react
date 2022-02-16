import "../App.css";
import React from "react";
import {Link} from "react-router-dom";
import {GrEdit, GrTrash} from "react-icons/gr";

export default function EpisodeTable() {
    return(
        <table>
            <caption>Episode Results:</caption>
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Series ID</th>
                    <th>Episode ID</th>
                    <th>Episode Title</th>
                    <th>Release Date</th>
                    <th>Previous Episode</th>
                    <th>Next Episode</th>
                    <th>Source File</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Link to="10925472891">
                            <GrEdit />
                        </Link>
                    </td>
                    <td><GrTrash /></td>
                    <td>10925472891</td>
                    <td>159930210041</td>
                    <td>The Child</td>
                    <td>2020-11-12</td>
                    <td>Huckleberry</td>
                    <td>NULL</td>
                    <td>chickynuggies.m4a</td>
                </tr>
            </tbody>
        </table>
    );
}