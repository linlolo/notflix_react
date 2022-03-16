import "../App.css";
import React from "react";

export default function EpisodeForm( {episode, handleChange, episodeDropdown}) {
    return(
        <form>
            <div className="formField">
                <label htmlFor="seriesID">Series ID:</label>
                    <input
                        type="text"
                        id="seriesID"
                        name="seriesID"
                        value={episode.seriesID}
                        placeholder="Series ID"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label htmlFor="episodeID">Episode ID:</label>
                    <input
                        type="text"
                        id="episodeID"
                        name="episodeID"
                        value={episode.episodeID}
                        placeholder="Episode ID"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label htmlFor="episodeTitle">Episode Title:</label>
                    <input
                        type="text"
                        id="episodeTitle"
                        name="episodeTitle"
                        value={episode.episodeTitle}
                        placeholder="Episode Title"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label htmlFor="releaseDate">Release Date</label>
                    <input
                        type="date"
                        id="releaseDate"
                        name="releaseDate"
                        value={episode.releaseDate}
                        placeholder="YYYY-MM-DD"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label htmlFor="previousEpisode">Previous Episode</label>
                <select name="previousEpisode" id="previousEpisode" onChange={handleChange}>
                    {episodeDropdown.map((option, i) => <option value={option.value} key={i} >{option.label}</option>)}
                </select>
            </div>
            <div className="formField">
                <label htmlFor="nextEpisode">Next Episode</label>
                <select name="nextEpisode" id="nextEpisode" onChange={handleChange}>
                {episodeDropdown.map((option, i) => <option value={option.value} key={i} >{option.label}</option>)}
                </select>
            </div>
            <div className="formField">
                <label htmlFor="fileSource">Source File</label>
                <input
                    type="text"
                    id="fileSource"
                    name="fileSource"
                    value={episode.fileSource}
                    placeholder="filename.xyz"
                    onChange={handleChange}/>
            </div>
        </form>
    );
}