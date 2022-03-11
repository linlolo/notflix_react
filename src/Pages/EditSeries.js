import "../App.css";
import React from "react";
import SeriesForm from "../Components/SeriesForm";
import { useNavigate } from 'react-router-dom';
// page to edit an existing Series.
// Pre-populate fields for `title`, `contentRating`.
// Table below to add/delete Episodes.

function EditSeries({ series, handleChange }) {
    const navigate = useNavigate();

    const updateSeries = async () => {
        let url = `/series/${series.seriesID}`
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
            <button type="button" className="formButton" onClick={updateSeries}>UPDATE EPISODE</button>
        </div>
    );
}

export default EditSeries;