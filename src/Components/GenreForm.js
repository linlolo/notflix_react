import "../App.css";
import React from "react";

export default function GenreForm( { genre, handleChange }) {
    return (
        <form>
            <div className="formField">
                <label for="genreID">Genre ID:</label>
                    <input
                        type="text"
                        id="genreID"
                        name="genreID"
                        value={genre.genreID}
                        placeholder="17000203001"
                        onChange={handleChange} />
            </div>
            <div className="formField">
                <label for="genreName">Genre Name:</label>
                    <input
                        type="text"
                        id="genreName"
                        name="genreName"
                        value={genre.name}
                        placeholder="Space Western"
                        onChange={handleChange} />
            </div>
        </form>
    );
}