import "../App.css";
import React from "react";

export default function SeriesForm() {
    return(
        <form>
            <div className="formField">
                <label>Series ID:
                    <input
                        type="text"
                        id="seriesID"
                        name="seriesID"
                        value="10846290217" />
                </label>
            </div><div className="formField">
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
        </form>
    );
}