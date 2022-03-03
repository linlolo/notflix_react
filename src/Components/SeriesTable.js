import "../App.css";
import React from "react";
import {GrEdit, GrTrash} from "react-icons/gr";

export default function SeriesTable({ series }) {
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
                {series.map((series, i) => <Series series={series}
                    key={i} />)}
            </tbody>
        </table>
    );
}

function Series({ series }) {
    return (
        <tr>
            <td><GrEdit /></td>
            <td><GrTrash /></td>
            <td>{series.seriesID}</td>
            <td>{series.title}</td>
            <td>{series.rating}</td>
        </tr>
    )
}