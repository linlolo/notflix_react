import "../App.css";
import React from "react";
import {GrEdit, GrTrash} from "react-icons/gr";

export default function SeriesTable({ series, onDelete, onEdit }) {
    return(
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
                {series.map((series, i) => <Series series={series} onDelete={onDelete} onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

function Series({ series, onEdit, onDelete }) {
    return (
        <tr>
            <td><GrEdit className='button' onClick={() => onEdit(series)}/></td>
            <td><GrTrash className='button' onClick={() => onDelete(series.seriesID)}/></td>
            <td>{series.seriesID}</td>
            <td>{series.title}</td>
            <td>{series.contentRating}</td>
        </tr>
    )
}