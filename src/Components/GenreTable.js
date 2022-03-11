import "../App.css";
import React from "react";
import {GrTrash, GrEdit} from "react-icons/gr";

export default function GenreTable( { genres, onDelete, onEdit }) {
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
                {genres.map((genre, i) => <Genre genre={genre} onDelete={onDelete} onEdit={onEdit}
                        key={i} />)}
            </tbody>
        </table>
    );
}

function Genre({ genre, onDelete, onEdit }) {
    return (
        <tr>
            <td><GrEdit class="button" onClick={() => onEdit(genre)}/></td>
            <td><GrTrash class="button" onClick={() => onDelete(genre.genreID)}/></td>
            <td>{genre.genreID}</td>
            <td>{genre.genreName}</td>
        </tr>
    );
}