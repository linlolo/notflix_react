import "../App.css";
import React from "react";

export default function SeriesForm( {series, handleChange} ) {
    return(
        <div>
            <form>
                <div className="formField">
                    <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={series.title}
                            placeholder="Series Title"
                            onChange={handleChange} />
                </div>
                <div className="formField">
                    <label htmlFor="contentRating">Rating:</label>
                        <select
                            name="contentRating"
                            id="contentRating"
                            onChange={handleChange} >
                            <option value ="G" > G: General Audience </option>
                            <option value="PG"> PG: Parental Guidance Suggested </option>
                            <option value="PG-13" selected> PG13: Parental Guidance Strongly Cautioned </option>
                            <option value="R"> R: Restricted </option>
                            <option value="NC-17"> NC-17: Adults Only </option>
                        </select>
                </div>
            </form>
        </div>
        
    );
}