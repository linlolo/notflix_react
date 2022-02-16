import '../App.css';
import React from "react";
import SeriesForm from "../Components/SeriesForm";
import SeriesTable from "../Components/SeriesTable";

export default function Series() {
    return (
        <div className="content">
            <h2>Series Management</h2>
            <SeriesForm />
            <button type='button'>ADD NEW SERIES</button>
            <button type='button'>FILTER SERIES</button>
            <button type='button'>CLEAR ALL FILTERS</button>
            <SeriesTable />
        </div>
    );
}