import "../App.css";
import React from "react";
import EpisodeForm from "../Components/EpisodeForm";
import EpisodeTable from "../Components/EpisodeTable";
import { useState, useEffect } from 'react';

export default function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    const [episode, setEpisode] = useState({ seriesID: "", episodeID: "", episodeTitle: "", releaseDate: "", prevEpisode: "", nextEpisode: "", fileSource: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setEpisode(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const loadEpisodes = async () => {
        const response = await fetch('/episodes');
        const data = await response.json();
        setEpisodes(data);
    }

    const addEpisode = async () => {
        const newEpisode = episode;
        const response = await fetch('/episodes', {
            method: 'POST',
            body: JSON.stringify(newEpisode),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the episode");
        } else {
            alert(`Failed to add episode, status code = ${response.status}`);
        }
    }

    useEffect(() => {
        loadEpisodes();
    }, [])

    return (
        <div className="page">
            <h2>Episode Management</h2>
            <EpisodeForm episode={episode} handleChange={handleChange}/>
            <button type="button" onClick={addEpisode}>ADD NEW EPISODE</button>
            <button type="button">FILTER EPISODES</button>
            <button type="button">CLEAR ALL FILTERS</button>
            <EpisodeTable episodes={episodes}/>
        </div>
    );
}