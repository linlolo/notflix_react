import React from "react";
import EpisodeForm from "../Components/EpisodeForm";
// page to edit an existing Episode.
// Pre-populate fields for `seriesID`, `episodeTitle`, `releaseDate`,
// `previousEpisode`, `nextEpisode`, `fileSource`.

function EditEpisode() {
    return(
        <div className="page">
            <h3>Edit Episode details</h3>
            <p>Note: EpisodeID cannot be changed.</p>
            <EpisodeForm />
            <button type="button" className="formButton">UPDATE EPISODE</button>
        </div>
    );
}

export default EditEpisode;