import "../App.css";
import React from "react";

export default function ContentTypesForm( { content, handleChange }) {
    return (
        <form>
            <div className="formField">
                <label htmlFor="seriesID">Series ID:</label>
                    <input
                        type="text"
                        id="seriesID"
                        name="seriesID"
                        value={content.seriesID}
                        placeholder="Series ID"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label htmlFor="title">Series Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={content.title}
                        placeholder="Series Title"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label htmlFor="genreID">Genre ID:</label>
                    <input
                        type="text"
                        id="genreID"
                        name="genreID"
                        value={content.genreID}
                        placeholder="Genre ID"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label htmlFor="genreName">Genre Name:</label>
                    <input
                        type="text"
                        id="genreName"
                        name="genreName"
                        value={content.genreName}
                        placeholder="Genre Name"
                        onChange={handleChange} />
            </div>
        </form>
    );
}