import React from "react";
// page to add the series - form for title, contentRating, Genre and submit button
// think about implementing this as a table instead of the current setup -- 


function AddSeries() {
    // form to populate a series with name, rating and genre
    return(
        <div className="add series">
            <div className="formField">
                <form>
                    <label>Title:
                        <input 
                        type="text"
                        id="title"
                        name="title"
                        />
                    </label>
                    <label>Content Rating
                        <select
                        name="Content Rating"
                        id="contentRating">
                            <option value ="G: General Audience" > G: General Audience </option>
                            <option value="PG: Parental Guidance Suggested"> PG: Parental Guidance Suggested </option>
                            <option value="PG13: Parents Strogly Cautioned"> PG13: Parental Guidance Strongly Cautioned </option>
                            <option value="R: Restricted"> R: Restricted </option>
                            <option value="NC-17: Adults Only"> NC-17: Adults Only </option>
                        </select>
                    </label>
                    <label>Genre:
                        <input 
                        type="text"
                        id="genre"
                        name="genre"
                        />
                    </label>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}

export default AddSeries