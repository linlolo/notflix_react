import React from "react";
import ContentTypesForm from "../Components/ContentTypesForm";
import ContentTypesTable from "../Components/ContentTypesTable";
import { useState, useEffect } from 'react';
import {API} from '../Components/api';

export default function ContentTypes() {
    const [contents, setContents] = useState([]);
    const [content, setContent] = useState({});
    const reqFields = ['seriesID', 'genreID'];

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
        for (const field of reqFields) {
            if (!(field in content) || (content[field] === "")) {
                alert('Please enter all required fields');
                return;
            }
        }
        const response = await fetch(`${API}/contents`, {
            method: 'POST',
            body: JSON.stringify({
                'seriesID': content.seriesID,
                'genreID': content.genreID,
            }),
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
        setContents(data.contentTypes);
    }

    const editContent = async () => {
        alert('To edit, simply delete and create a new entry');
        return;
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

    return(
        <div className="page">
            <h2>ContentType Management:</h2>
            <p>Note: Only Series ID and Genre ID are required to add entry</p>
            <ContentTypesForm content={content} handleChange={handleChange} />
            <button type='button' onClick={addContent}>ADD NEW CONTENT-TYPE</button>
            <button type='button' onClick={filterContents}>FILTER CONTENT-TYPES</button>
            <button type='button' onClick={loadContents}>CLEAR ALL FILTERS</button>
            <ContentTypesTable contents={contents} onDelete={deleteContent} onEdit={editContent}/>
        </div>
    );
}