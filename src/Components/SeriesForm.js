import "../App.css";
import React from "react";

export default function SeriesForm( {series, handleChange} ) {
    return (
        <div>
            <form>
                <div className="formField">
                    <label for="seriesID">Series ID:</label>
                        <input
                            type="text"
                            id="seriesID"
                            name="seriesID"
                            value={series.seriesID}
                            placeholder="10846290217"
                            onChange={handleChange} />
                </div>
                <div className="formField">
                    <label for="seriesTitle">Title:</label>
                        <input
                            type="text"
                            id="seriesTitle"
                            name="seriesTitle"
                            value={series.seriesTitle}
                            placeholder="The Bandalorian"
                            onChange={handleChange} />
                </div>
                <div className="formField">
                    <label for="contentRating">Rating:</label>
                        <select
                            name="contentRating"
                            id="contentRating"
                            value={series.contentRating}
                            onChange={handleChange} >
                            <option value={null} selected> Select </option>
                            <option value="G: General Audience" > G: General Audience </option>
                            <option value="PG: Parental Guidance Suggested"> PG: Parental Guidance Suggested </option>
                            <option value="PG13: Parents Strongly Cautioned"> PG13: Parental Guidance Strongly Cautioned </option>
                            <option value="R: Restricted"> R: Restricted </option>
                            <option value="NC-17: Adults Only"> NC-17: Adults Only </option>
                        </select>
                </div>
            </form>
        </div>
        
    );
}