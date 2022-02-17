import "../App.css";
import React from "react";
import GenreForm from "../Components/GenreForm";

export default function EditGenre() {
    return (
        <div className="page">
            <h3>Edit Genre Details:</h3>
            <p>Note: Genre ID cannot be changed.</p>
            <GenreForm />
            <button type="button">UPDATE GENRE</button>
        </div>
    );
}