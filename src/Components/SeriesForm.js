import "../App.css";
import React from "react";
import { useState } from 'react';

export default function SeriesForm() {
    const [seriesID, setSeriesID] = useState('');
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const addSeries = async () => {
        const newSeries = { seriesID, title, rating };
        const response = await fetch('/series', {
            method: 'POST',
            body: JSON.stringify(newSeries),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the series");
        } else {
            alert(`Failed to add series, status code = ${response.status}`);
        }
    }

    return(
        <div>
            <form>
                <div className="formField">
                    <label for="seriesID">Series ID:</label>
                        <input
                            type="text"
                            id="seriesID"
                            name="seriesID"
                            value={seriesID}
                            placeholder="10846290217"
                            onChange={e => setSeriesID(e.target.value)} />
                </div>
                <div className="formField">
                    <label for="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            placeholder="The Bandalorian"
                            onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="formField">
                    <label for="contentRating">Rating:</label>
                        <select
                            name="Content Rating"
                            id="contentRating"
                            onChange={e => setRating(e.target.value)}>
                            <option value ="G: General Audience" > G: General Audience </option>
                            <option value="PG: Parental Guidance Suggested"> PG: Parental Guidance Suggested </option>
                            <option value="PG13: Parents Strongly Cautioned" selected> PG13: Parental Guidance Strongly Cautioned </option>
                            <option value="R: Restricted"> R: Restricted </option>
                            <option value="NC-17: Adults Only"> NC-17: Adults Only </option>
                        </select>
                </div>
            </form>
            <button type='button' onClick={addSeries}>ADD NEW SERIES</button>
            <button type='button'>FILTER SERIES</button>
            <button type='button'>CLEAR ALL FILTERS</button>
        </div>
        
    );
}