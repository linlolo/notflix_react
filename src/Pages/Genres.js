import '../App.css';
import React from "react";
import { useState, useEffect } from 'react';
import GenreForm from "../Components/GenreForm";
import GenreTable from "../Components/GenreTable";

export default function Genres() {
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState({ genreID: "", name: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setGenre(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const loadGenres = async () => {
        const response = await fetch('/genres');
        const data = await response.json();
        setGenres(data);
    }

    const addGenre = async () => {
        const newGenre = genre;
        const response = await fetch('/genres', {
            method: 'POST',
            body: JSON.stringify(newGenre),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the genre");
        } else {
            alert(`Failed to add genre, status code = ${response.status}`);
        }
    }

    useEffect(() => {
        loadGenres();
    }, [])

    return (
        <div className="page">
            <h2>Genre Management:</h2>
            <GenreForm genre={genre} handleChange={handleChange}/>
            <button type='button' onClick={addGenre}>ADD NEW GENRE</button>
            <button type='button'>FILTER GENRES</button>
            <button type='button'>CLEAR ALL FILTERS</button>
            <GenreTable genres={genres}/>
        </div>
    );
}