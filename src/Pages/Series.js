import '../App.css';
import React from "react";
import SeriesForm from "../Components/SeriesForm";
import SeriesTable from "../Components/SeriesTable";
import { useState, useEffect } from 'react';

export default function Series() {
    const [series, setSeries] = useState([]);

    const loadSeries = async () => {
        const response = await fetch('/series');
        const data = await response.json();
        setSeries(data);
    }

    useEffect(() => {
        loadSeries();
    }, [])

    return (
        <div className="page">
            <h2>Series Management</h2>
            <SeriesForm />
            <SeriesTable series={series}/>
        </div>
    );
}