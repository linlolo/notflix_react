import React from "react";
import GenreForm from "../Components/GenreForm";
import { useNavigate, useLocation } from 'react-router-dom';
import {API} from '../Components/api';

export default function EditGenre({ genre, handleChange }) {
    const navigate = useNavigate();
    const { state } = useLocation();

    const updateGenre = async () => {
        genre.genreID = state.id;
        for (const field of Object.values(genre)) {
            if (field === "") {
                alert(`Please enter all fields`)
                return;
            };
        };
        let url = `${API}/genres/${genre.genreID}`
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

    return(
        <div className="page">
            <h3>Edit Genre Details:</h3>
            <p>Note: Genre ID cannot be changed.</p>
            <GenreForm genre={genre} handleChange={handleChange}/>
            <button type="button" onClick={updateGenre}>UPDATE GENRE</button>
        </div>
    );
}