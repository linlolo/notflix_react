import React from "react";
import EpisodeForm from "../Components/EpisodeForm";
import { useNavigate, useLocation } from 'react-router-dom';
import {API} from '../Components/api';
// page to edit an existing Episode.
// Pre-populate fields for `seriesID`, `episodeTitle`, `releaseDate`,
// `previousEpisode`, `nextEpisode`, `fileSource`.

function EditEpisode({ episode, handleChange, episodeDropdown }) {
    const navigate = useNavigate();
    const { state } = useLocation();

    const updateEpisode = async () => {
        episode.episodeID = state.id;
        for (const field of Object.values(episode)) {
            console.log(field);
            if (field === "") {
                alert(`Please enter all fields`)
                return;
            };
        };
        let url = `${API}/episodes/${episode.episodeID}`
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