import React from "react";
import SeriesForm from "../Components/SeriesForm";
import { useNavigate, useLocation } from 'react-router-dom';
import {API} from '../Components/api';
// page to edit an existing Series.
// Pre-populate fields for `title`, `contentRating`.
// Table below to add/delete Series.

function EditSeries({ series, handleChange }) {
    const navigate = useNavigate();
    const state = useLocation();

    const updateSeries = async () => {
        series.seriesID = state.id;
        for (const field of Object.values(series)) {
            if (field === "") {
                alert(`Please enter all fields`)
                return;
            };
        };
        let url = `${API}/series/${series.seriesID}`
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(series),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited series");
        } else {
            alert(`Failed to edit series, status code = ${response.status}`);
        }
        navigate('/series')
    }
    
    return(
        <div className="page">
            <h3>Edit Series details</h3>
            <p>Note: SeriesID cannot be changed.</p>
            <SeriesForm series={series} handleChange={handleChange}/>
            <button type="button" className="formButton" onClick={updateSeries}>UPDATE SERIES</button>
        </div>
    );
}

export default EditSeries;