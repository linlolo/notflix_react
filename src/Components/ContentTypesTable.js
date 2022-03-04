import "../App.css";
import React from "react";
import {GrTrash, GrEdit} from "react-icons/gr";

export default function ContentTypesTable( { contents }) {
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
                {contents.map((content, i) => <Content content={content}
                    key={i} />)}
            </tbody>
        </table>
    );
}

function Content({ content }) {
    return (
        <tr>
            <td><GrEdit /></td>
            <td><GrTrash /></td>
            <td>{content.contentTypeID}</td>
            <td>{content.seriesID}</td>
            <td>{content.title}</td>
            <td>{content.genreID}</td>
            <td>{content.genreName}</td>
        </tr>
    );
}