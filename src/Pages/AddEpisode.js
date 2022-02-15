import React from "react";
// page to add episode with title, releaseDate, previousEpisode, nextEpisode, fileSource and Series
// consider that the series must correspond to an already added series
//previousEpisode must correspond to an already added Episode (can be NONE)


function AddEpisode(){
    return(
        <div className="addepisode">
            <div className="formField">
                <form>
                    <label>Title</label>
                    <input 
                    type="text"
                    id="title"
                    name="title"/>
                    <label>Release Date</label>
                    <input 
                    type="date"
                    id="releaseDate"
                    name="Release Date"/>
                    <label>Previous Episode:</label>
                    <select name="Previous Episode" id="previousEpisode">
                        <option name="option from DB here"> </option>
                    </select>
                    <label>Next Episode:</label>
                    <select name="Next Episode" id="nextEpisode">
                        <option name="option from DB here"> </option>
                    </select>
                    <label>File Source:</label>
                    <input 
                    type="text"
                    id="fileSource"
                    name="File Source"/>
                    <label>Series:</label>
                    <select name="Series" id="series">
                        <option name="option from DB here"> </option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default AddEpisode;