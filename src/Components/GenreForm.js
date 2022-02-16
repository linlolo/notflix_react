import "../App.css";
import React from "react";

export default function GenreForm() {
    return (
        <form>
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