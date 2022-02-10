import React from "react";
import {GrTrash, GrEdit} from "react-icons/gr";
import {Link} from "react-router-dom";
// page to edit an existing Series.
// Pre-populate fields for `title`, `contentRating`.
// Table below to add/delete Episodes.

function EditSeries() {
    return(
        <div className="editSeries">
            <form>
                <h3>Edit Series details</h3>
                <div className="formField">
                    <label>Title:
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value="The Bandalorian" />
                    </label>
                </div>
                <div className="formField">
                    <label>Rating:
                        <select
                            name="Content Rating"
                            id="contentRating">
                            <option value ="G: General Audience" > G: General Audience </option>
                            <option value="PG: Parental Guidance Suggested"> PG: Parental Guidance Suggested </option>
                            <option value="PG13: Parents Strongly Cautioned" selected> PG13: Parental Guidance Strongly Cautioned </option>
                            <option value="R: Restricted"> R: Restricted </option>
                            <option value="NC-17: Adults Only"> NC-17: Adults Only </option>
                        </select>
                    </label>
                </div>
                <button type="button" className="formButton">UPDATE SERIES</button>
            </form>
            <table>
                <caption><h3>Series Episodes</h3></caption>
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>EpisodeID</th>
                        <th>Episode Title</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to="/episodes/10925472891">
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
            <button type="button" className="formButton">ADD EPISODE</button>
        </div>
    );
}

export default EditSeries;