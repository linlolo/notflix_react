import '../App.css';
import React from "react";
import SeriesForm from "../Components/SeriesForm";
import SeriesTable from "../Components/SeriesTable";
import { useState, useEffect } from 'react';

export default function Series() {
    const [series, setSeries] = useState([]);
    const [oneSeries, setOneSeries] = useState({ seriesID: "", title: "", rating: "" });
    
    const handleChange = e => {
        const { name, value } = e.target;
        setOneSeries(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const loadSeries = async () => {
        const response = await fetch('/series');
        const data = await response.json();
        setSeries(data);
    }

    const addSeries = async () => {
        const newSeries = oneSeries;
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

    useEffect(() => {
        loadSeries();
    }, [])

    return (
        <div className="page">
            <h2>Series Management</h2>
            <SeriesForm series={oneSeries} handleChange={handleChange}/>
            <button type='button' onClick={addSeries}>ADD NEW SERIES</button>
            <button type='button'>FILTER SERIES</button>
            <button type='button'>CLEAR ALL FILTERS</button>
            <SeriesTable series={series}/>
        </div>
    );
}