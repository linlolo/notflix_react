import "../App.css";
import React from "react";

export default function SeriesForm( {series, handleChange} ) {
    return (
        <div>
            <form>
                <div className="formField">
<<<<<<< HEAD
                    <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={series.title}
                            placeholder="Series Title"
=======
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
>>>>>>> updateDelete
                            onChange={handleChange} />
                </div>
                <div className="formField">
                    <label htmlFor="contentRating">Rating:</label>
                        <select
                            name="contentRating"
                            id="contentRating"
                            value={series.contentRating}
                            onChange={handleChange} >
<<<<<<< HEAD
                            <option value ="G" > G: General Audience </option>
                            <option value="PG"> PG: Parental Guidance Suggested </option>
                            <option value="PG-13" selected> PG13: Parental Guidance Strongly Cautioned </option>
                            <option value="R"> R: Restricted </option>
                            <option value="NC-17"> NC-17: Adults Only </option>
=======
                            <option value={null} selected> Select </option>
                            <option value="G: General Audience" > G: General Audience </option>
                            <option value="PG: Parental Guidance Suggested"> PG: Parental Guidance Suggested </option>
                            <option value="PG13: Parents Strongly Cautioned"> PG13: Parental Guidance Strongly Cautioned </option>
                            <option value="R: Restricted"> R: Restricted </option>
                            <option value="NC-17: Adults Only"> NC-17: Adults Only </option>
>>>>>>> updateDelete
                        </select>
                </div>
            </form>
        </div>
        
    );
}