import "../App.css";
import React from "react";
import {GrTrash, GrEdit} from "react-icons/gr";

export default function GenreTable( { genres }) {
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
                {genres.map((genre, i) => <Genre genre={genre}
                        key={i} />)}
            </tbody>
        </table>
    );
}

function Genre({ genre }) {
    return (
        <tr>
            <td><GrEdit /></td>
            <td><GrTrash /></td>
            <td>{genre.genreID}</td>
            <td>{genre.name}</td>
        </tr>
    );
}