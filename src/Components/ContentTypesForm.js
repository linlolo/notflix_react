import "../App.css";
import React from "react";

export default function ContentTypesForm() {
    return (
        <form>
            <div className="formField">
                <label>ContentType ID:
                    <input
                        type="text"
                        id="contentTypeID"
                        name="contentTypeID"
                        value="19000010023" />
                </label>
            </div>
            <div className="formField">
                <label>Series ID:
                    <input
                        type="text"
                        id="seriesID"
                        name="seriesID"
                        value="10846290217" />
                </label>
            </div>
            <div className="formField">
                <label>Series Title:
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value="The Bandalorian" />
                </label>
            </div>
            <div className="formField">
                <label>Genre ID:
                    <input
                        type="text"
                        id="genreID"
                        name="genreID"
                        value="17000203001" />
                </label>
            </div>
            <div className="formField">
                <label>Genre Name:
                    <input
                        type="text"
                        id="genreName"
                        name="genreName"
                        value="Space Western" />
                </label>
            </div>
        </form>
    );
}