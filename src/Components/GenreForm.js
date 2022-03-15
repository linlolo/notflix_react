import "../App.css";
import React from "react";

export default function GenreForm( { genre, handleChange }) {
    return(
        <form>
            <div className="formField">
                <label htmlFor="genreName">Genre Name:</label>
                    <input
                        type="text"
                        id="genreName"
                        name="genreName"
                        value={genre.genreName}
                        placeholder="Genre Name"
                        onChange={handleChange} />
            </div>
        </form>
    );
}