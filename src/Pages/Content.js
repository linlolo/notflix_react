import '../App.css';
import React from "react";
import {Link} from "react-router-dom";

export default function Content() {
    return (
        <div className="content">
            <h2>Series Management</h2>
            <Link to="addSeries">
                <button type='button'>ADD A NEW SERIES</button>
            </Link>
            <h2>Episode Management</h2>
            <Link to="addEpisode">
                <button type="button">ADD A NEW EPISODE</button>
            </Link>
            <form className="episodeSearchForm">
                <h3>Search for Episodes</h3>
                <p>Leaving fields blank will return all episodes.</p>
                <div className="formField">
                    <label>Search by Series ID: 
                        <input
                            type="text"
                            id="seriesID"
                            name="seriesID" />
                    </label>
                </div>
                <div className="formField">
                    <label>Search by Title: 
                        <input
                            type="text"
                            id="title"
                            name="title" />
                    </label>
                </div>
                <div className="formField">
                    <label>Search by ContentRating: 
                        <input
                            type="text"
                            id="contentRating"
                            name="contentRating" />
                    </label>
                </div>
                <div className="formField">
                    <label>Search by Genre:  
                        <input
                            type="text"
                            id="genre"
                            name="genre" />
                    </label>
                </div>
                <button type="button" className="formButton">SEARCH</button>
            </form>
        </div>
    );
}