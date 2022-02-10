import React from "react";
// page to edit an existing Episode.
// Pre-populate fields for `seriesID`, `episodeTitle`, `releaseDate`,
// `previousEpisode`, `nextEpisode`, `fileSource`.

function EditEpisode() {
    return(
        <div className="editEpisode">
            <form>
                <h3>Edit Episode details</h3>
                <div className="formField">
                    <label>Series ID
                        <input
                            type="text"
                            id="seriesID"
                            name="seriesID"
                            value="10846290217" />
                    </label>
                </div>
                <div className="formField">
                    <label>Episode Title
                        <input
                            type="text"
                            id="episodeTitle"
                            name="episodeTitle"
                            value="The Child" />
                    </label>
                </div>
                <div className="formField">
                    <label>Release Date</label>
                    <input
                        type="date"
                        id="releaseDate"
                        name="releaseDate"
                        value="2020-11-12"/>
                </div>
                <div className="formField">
                    <label>Previous Episode</label>
                    <select name="previousEpisode" id="previousEpisode">
                        <option name="option from DB here" selected>Null</option>
                    </select>
                </div>
                <div className="formField">
                    <label>Next Episode</label>
                    <select name="nextEpisode" id="nextEpisode">
                        <option name="option from DB here" selected>Huckleberry</option>
                    </select>
                </div>
                <div className="formField">
                    <label>Source File</label>
                    <input
                        type="text"
                        id="fileSource"
                        name="fileSource"
                        value="chickynuggies.m4a"/>
                </div>
                <button type="button" className="formButton">UPDATE EPISODE</button>
            </form>
        </div>
    );
}

export default EditEpisode;