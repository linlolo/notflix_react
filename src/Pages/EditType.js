import "../App.css";
import React from "react";
import ContentTypesForm from "../Components/ContentTypesForm";
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import {API} from '../Components/api';
=======
import { useNavigate, useLocation } from 'react-router-dom';
>>>>>>> updateDelete

export default function EditType({ content, handleChange }) {
    const navigate = useNavigate();
    const state = useLocation();
    
    const updateContent = async () => {
<<<<<<< HEAD
        let url = `${API}/contents/${content.contentTypeID}`
=======
        content.episodeID = state.id;
        for (const field of Object.values(content)) {
            console.log(field);
            if (field === "") {
                alert(`Please enter all fields`)
                return;
            };
        };
        let url = `/contents/${content.contentTypeID}`
>>>>>>> updateDelete
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited content");
        } else {
            alert(`Failed to edit content, status code = ${response.status}`);
        }
        navigate('/contents')
    }

    return (
        <div className="page">
            <h3>Edit ContentType Details:</h3>
            <p>Note: ContentType ID cannot be changed.</p>
            <ContentTypesForm content={content} handleChange={handleChange}/>
            <button type="button" onClick={updateContent}>UPDATE CONTENT-TYPE</button>
        </div>
    );
}