import "../App.css";
import React from "react";

export default function ContentTypesForm( { content, handleChange }) {
    return (
        <form>
            <div className="formField">
                <label for="contentTypeID">ContentType ID:</label>
                    <input
                        type="text"
                        id="contentTypeID"
                        name="contentTypeID"
                        value={content.contentTypeID}
                        placeholder="19000010023"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="seriesID">Series ID:</label>
                    <input
                        type="text"
                        id="seriesID"
                        name="seriesID"
                        value={content.seriesID}
                        placeholder="10846290217"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="title">Series Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={content.title}
                        placeholder="The Bandalorian"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="genreID">Genre ID:</label>
                    <input
                        type="text"
                        id="genreID"
                        name="genreID"
                        value={content.genreID}
                        placeholder="17000203001"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="genreName">Genre Name:</label>
                    <input
                        type="text"
                        id="genreName"
                        name="genreName"
                        value={content.genreName}
                        placeholder="Space Western"
                        onChange={handleChange} />
            </div>
        </form>
    );
}