import "../App.css";
import React from "react";
import {Link} from "react-router-dom";
import {GrEdit, GrTrash} from "react-icons/gr";

export default function Episodes() {
    return (
        <div>
            <h2>Episode Management</h2>
            <Link to="new">
                <button type="button">ADD A NEW EPISODE</button>
            </Link>
            <p>~OR~</p>
            <form className="episodeSearchForm">
                <h3>Search for Episodes</h3>
                <p>Leaving fields blank will return all episodes.</p>
                <div className="formField">
                    <label>Search by Series ID:
                        <input
                            type="text"
                            id="seriesID"
                            name="seriesID" />
                    </label>
                </div>
                <div className="formField">
                    <label>Search by Episode Title:
                        <input
                            type="text"
                            id="title"
                            name="title" />
                    </label>
                </div>
                <div className="formField">
                    <label>Search by Release Date:
                        <input
                            type="date"
                            id="date"
                            name="date" />
                    </label>
                </div>
                <button type="button" className="formButton">SEARCH</button>
            </form>
            <table>
                <caption>Search Results:</caption>
                <thead>
                <tr>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Series ID</th>
                    <th>Episode Title</th>
                    <th>Release Date</th>
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
                    <td>The Child</td>
                    <td>2020-11-12</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}