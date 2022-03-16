import "../App.css";
import React from "react";
import {GrTrash, GrEdit} from "react-icons/gr";

export default function ContentTypesTable( { contents, onDelete, onEdit }) {
    return(
        <table>
            <caption>ContentTypes Results:</caption>
            <thead>
            <tr>
                <th>Edit</th>
                <th>Delete</th>
                <th>ContentType ID</th>
                <th>Series ID</th>
                <th>Series Title</th>
                <th>Genre ID</th>
                <th>Genre Name</th>
            </tr>
            </thead>
            <tbody>
                {contents.map((content, i) => <Content content={content} onDelete={onDelete} onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

function Content({ content, onDelete, onEdit }) {
    return (
        <tr>
            <td><GrEdit class="button" onClick={() => onEdit(content)}/></td>
            <td><GrTrash class="button" onClick={() => onDelete(content)}/></td>
            <td>{content.contentTypeID}</td>
            <td>{content.seriesID}</td>
            <td>{content.seriesTitle}</td>
            <td>{content.genreID}</td>
            <td>{content.genreName}</td>
        </tr>
    );
}