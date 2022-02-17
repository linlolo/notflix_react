import "../App.css";
import React from "react";
import SeriesForm from "../Components/SeriesForm";
// page to edit an existing Series.
// Pre-populate fields for `title`, `contentRating`.
// Table below to add/delete Episodes.

function EditSeries() {
    return(
        <div className="page">
            <h3>Edit Series details</h3>
            <p>Note: SeriesID cannot be changed.</p>
            <SeriesForm />
            <button type="button" className="formButton">UPDATE EPISODE</button>
        </div>
    );
}

export default EditSeries;