import '../App.css';
import React from "react";
import GenreForm from "../Components/GenreForm";
import GenreTable from "../Components/GenreTable";

export default function Genres() {
    return (
        <div className="page">
            <h2>Genre Management:</h2>
            <GenreForm />
            <button type='button'>ADD NEW GENRE</button>
            <button type='button'>FILTER GENRES</button>
            <button type='button'>CLEAR ALL FILTERS</button>
            <GenreTable />
        </div>
    );
}