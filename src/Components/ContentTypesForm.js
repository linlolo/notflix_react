import "../App.css";
import React from "react";

export default function ContentTypesForm() {
    return (
        <form>
            <div className="formField">
                <label for="contentTypeID">ContentType ID:</label>
                    <input
                        type="text"
                        id="contentTypeID"
                        name="contentTypeID"
                        value="19000010023" />
            </div>
            <div className="formField">
                <label for="seriesID">Series ID:</label>
                    <input
                        type="text"
                        id="seriesID"
                        name="seriesID"
                        value="10846290217" />
            </div>
            <div className="formField">
                <label for="title">Series Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value="The Bandalorian" />
            </div>
            <div className="formField">
                <label for="genreID">Genre ID:</label>
                    <input
                        type="text"
                        id="genreID"
                        name="genreID"
                        value="17000203001" />
            </div>
            <div className="formField">
                <label for="genreName">Genre Name:</label>
                    <input
                        type="text"
                        id="genreName"
                        name="genreName"
                        value="Space Western" />
            </div>
        </form>
    );
}