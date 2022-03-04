import "../App.css";
import React from "react";
import ContentTypesForm from "../Components/ContentTypesForm";
import ContentTypesTable from "../Components/ContentTypesTable";
import { useState, useEffect } from 'react';

export default function ContentTypes() {
    const [contents, setContents] = useState([]);
    const [content, setContent] = useState({ contentTypeID: "", seriesID: "", title: "", genreID: "", genreName: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setContent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const loadContents = async () => {
        const response = await fetch('/contents');
        const data = await response.json();
        setContents(data);
    }

    const addContent = async () => {
        const newContent = content;
        const response = await fetch('/contents', {
            method: 'POST',
            body: JSON.stringify(newContent),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the content");
        } else {
            alert(`Failed to add content, status code = ${response.status}`);
        }
    }

    useEffect(() => {
        loadContents();
    }, [])

    return (
        <div className="page">
            <h2>ContentType Management:</h2>
            <ContentTypesForm content={content} handleChange={handleChange} />
            <button type='button' onClick={addContent}>ADD NEW CONTENT-TYPE</button>
            <button type='button'>FILTER CONTENT-TYPES</button>
            <button type='button'>CLEAR ALL FILTERS</button>
            <ContentTypesTable contents={contents}/>
        </div>
    );
}