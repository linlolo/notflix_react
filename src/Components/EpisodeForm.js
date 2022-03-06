import "../App.css";
import React from "react";

export default function EpisodeForm( {episode, handleChange}) {
    return(
        <form>
            <div className="formField">
                <label for="seriesID">Series ID:</label>
                    <input
                        type="text"
                        id="seriesID"
                        name="seriesID"
                        value={episode.seriesID}
                        placeholder="10846290217"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="episodeID">Episode ID:</label>
                    <input
                        type="text"
                        id="episodeID"
                        name="episodeID"
                        value={episode.episodeID}
                        placeholder="159930210041"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="episodeTitle">Episode Title:</label>
                    <input
                        type="text"
                        id="episodeTitle"
                        name="episodeTitle"
                        value={episode.episodeTitle}
                        placeholder="The Child"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="releaseDate">Release Date</label>
                    <input
                        type="date"
                        id="releaseDate"
                        name="releaseDate"
                        value={episode.releaseDate}
                        placeholder="2020-11-12"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="previousEpisode">Previous Episode</label>
                <select name="previousEpisode" id="previousEpisode" onChange={handleChange}>
                    <option name="option from DB here" selected>Huckleberry</option>
                </select>
            </div>
            <div className="formField">
                <label for="nextEpisode">Next Episode</label>
                <select name="nextEpisode" id="nextEpisode" onChange={handleChange}>
                    <option name="option from DB here" selected>Null</option>
                </select>
            </div>
            <div className="formField">
                <label for="fileSource">Source File</label>
                <input
                    type="text"
                    id="fileSource"
                    name="fileSource"
                    value={episode.fileSource}
                    placeholder="chickynuggies.m4a" />
            </div>
        </form>
    );
}