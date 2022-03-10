import React from "react";
import EpisodeForm from "../Components/EpisodeForm";
import { useNavigate } from 'react-router-dom';
// page to edit an existing Episode.
// Pre-populate fields for `seriesID`, `episodeTitle`, `releaseDate`,
// `previousEpisode`, `nextEpisode`, `fileSource`.

function EditEpisode({ episode, handleChange, episodeDropdown }) {
    const navigate = useNavigate();

    const updateEpisode = async () => {
        let url = `/episodes/${episode.episodeID}`
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(episode),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited episode");
        } else {
            alert(`Failed to edit episode, status code = ${response.status}`);
        }
        navigate('/episodes')
    }

    return(
        <div className="page">
            <h3>Edit Episode details</h3>
            <p>Note: EpisodeID cannot be changed.</p>
            <EpisodeForm episode={episode} handleChange={handleChange} episodeDropdown={episodeDropdown}/>
            <button type="button" className="formButton" onClick={updateEpisode}>UPDATE EPISODE</button>
        </div>
    );
}

export default EditEpisode;