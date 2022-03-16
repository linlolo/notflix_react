import '../App.css';
import React from "react";
import GenreForm from "../Components/GenreForm";
import GenreTable from "../Components/GenreTable";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {API} from '../Components/api';

export default function Genres( { setGenreToEdit }) {
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState({});
    const reqFields = [ 'genreName' ];

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setGenre(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const loadGenres = async () => {
        const response = await fetch(`${API}/genres`);
        const data = await response.json();
        setGenres(data.genres);
    }

    const addGenre = async () => {
        for (const field of reqFields) {
            if (!(field in genre) || (genre[field] === "")) {
                alert('Please enter all required fields');
                return;
            }
        }
        const response = await fetch(`${API}/genres`, {
            method: 'POST',
            body: JSON.stringify(genre),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the genre");
        } else {
            alert(`Failed to add genre, status code = ${response.status}`);
        }
        loadGenres();
    }

    const filterGenres = async () => {
        let header = {};
        let url = `${API}/genres`;
        for (const [key, value] of Object.entries(genre)) {
            if (value !== "") {
                header[key] = value;
            }
        }
        url += '?' + (new URLSearchParams(header)).toString()
        const response = await fetch(url);
        const data = await response.json();
        setGenres(data.genres);
    }

    const editGenre = async (genreToEdit) => {
        setGenreToEdit(genreToEdit);
        let url = `/genres/${genreToEdit.genreID}`;
        navigate(url, {state: {id: genreToEdit.genreID}});
    }

    const deleteGenre = async (_id) => {
        const response = await fetch(`${API}/genres/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            alert('Successfully deleted genre');
        } else {
            console.error(`Failed to delete genre with id=${_id}, status code = ${response.status}`);
        }
        loadGenres();
    }

    useEffect(() => {
        loadGenres();
    }, [])

    return (
        <div className="page">
            <h2>Genre Management:</h2>
            <GenreForm genre={genre} handleChange={handleChange}/>
            <button type='button' onClick={addGenre}>ADD NEW GENRE</button>
            <button type='button' onClick={filterGenres}>FILTER GENRES</button>
            <button type='button' onClick={loadGenres}>CLEAR ALL FILTERS</button>
            <GenreTable genres={genres} onDelete={deleteGenre} onEdit={editGenre}/>
        </div>
    );
}