import "../App.css";
import React from "react";
import ContentTypesForm from "../Components/ContentTypesForm";
import ContentTypesTable from "../Components/ContentTypesTable";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {API} from '../Components/api';

export default function ContentTypes({ setContentToEdit }) {
    const [contents, setContents] = useState([]);
    const [content, setContent] = useState({ contentTypeID: "", seriesID: "", title: "", genreID: "", genreName: "" });

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setContent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const loadContents = async () => {
        const response = await fetch(`${API}/contents`);
        const data = await response.json();
        setContents(data.contentTypes);
    }

    const addContent = async () => {
        const response = await fetch(`${API}/contents`, {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the content");
        } else {
            alert(`Failed to add content, status code = ${response.status}`);
        }
        loadContents();
    }

    const filterContents = async () => {
        let header = {};
        let url = `${API}/contents`;
        for (const [key, value] of Object.entries(content)) {
            if (value !== "") {
                header[key] = value;
            }
        }
        url += '?' + (new URLSearchParams(header)).toString()
        const response = await fetch(url);
        const data = await response.json();
        setContents(data.contents);
    }

    const editContent = async (contentToEdit) => {
        setContentToEdit(contentToEdit);
        let url = `${API}/contents/${contentToEdit.contentID}`;
        navigate(url);
    }

    const deleteContent = async (_id) => {
        const response = await fetch(`${API}/contents${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            alert('Successfully deleted content');
        } else {
            console.error(`Failed to delete content with id=${_id}, status code = ${response.status}`);
        }
        loadContents();
    }

    useEffect(() => {
        loadContents();
    }, [])

    return (
        <div className="page">
            <h2>ContentType Management:</h2>
            <ContentTypesForm content={content} handleChange={handleChange} />
            <button type='button' onClick={addContent}>ADD NEW CONTENT-TYPE</button>
            <button type='button' onClick={filterContents}>FILTER CONTENT-TYPES</button>
            <button type='button' onClick={loadContents}>CLEAR ALL FILTERS</button>
            <ContentTypesTable contents={contents} onDelete={deleteContent} onEdit={editContent}/>
        </div>
    );
}