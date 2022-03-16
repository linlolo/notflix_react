import "../App.css";
import React from "react";
import GenreForm from "../Components/GenreForm";
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import {API} from '../Components/api';
=======
import { useNavigate, useLocation } from 'react-router-dom';
>>>>>>> updateDelete

export default function EditGenre({ genre, handleChange }) {
    const navigate = useNavigate();
    const { state } = useLocation();

    const updateGenre = async () => {
<<<<<<< HEAD
        let url = `${API}/genres/${genre.genreID}`
=======
        genre.genreID = state.id;
        for (const field of Object.values(genre)) {
            if (field === "") {
                alert(`Please enter all fields`)
                return;
            };
        };
        let url = `/genres/${genre.genreID}`
>>>>>>> updateDelete
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(genre),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited genre");
        } else {
            alert(`Failed to edit genre, status code = ${response.status}`);
        }
        navigate('/genres')
    }

    return (
        <div className="page">
            <h3>Edit Genre Details:</h3>
            <p>Note: Genre ID cannot be changed.</p>
            <GenreForm genre={genre} handleChange={handleChange}/>
            <button type="button" onClick={updateGenre}>UPDATE GENRE</button>
        </div>
    );
}