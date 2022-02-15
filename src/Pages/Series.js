import '../App.css';
import React from "react";
import {Link} from "react-router-dom";
import {GrEdit, GrTrash} from "react-icons/gr";

export default function Series() {
    return (
        <div className="content">
            <h2>Series Management</h2>
            <Link to="new">
                <button type='button'>ADD A NEW SERIES</button>
            </Link>
            <p>~OR~</p>
            <form className="customerSearchForm">
                <h3>Search for Series</h3>
                <p>Leaving fields blank will return all series.</p>
                <div className="formField">
                    <label>Series ID:
                        <input
                            type="text"
                            id="seriesID"
                            name="seriesID" />
                    </label>
                </div>
                <div className="formField">
                    <label>Title:
                        <input
                            type="text"
                            id="title"
                            name="title" />
                    </label>
                </div>
                <div className="formField">
                    <label>Series Rating:
                        <select
                            name="Content Rating"
                            id="contentRating">
                            <option value ="G: General Audience" > G: General Audience </option>
                            <option value="PG: Parental Guidance Suggested"> PG: Parental Guidance Suggested </option>
                            <option value="PG13: Parents Strongly Cautioned"> PG13: Parental Guidance Strongly Cautioned </option>
                            <option value="R: Restricted"> R: Restricted </option>
                            <option value="NC-17: Adults Only"> NC-17: Adults Only </option>
                        </select>
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
        </div>
    );
}