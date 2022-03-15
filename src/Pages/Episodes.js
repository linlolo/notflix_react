import "../App.css";
import React from "react";
import EpisodeForm from "../Components/EpisodeForm";
import EpisodeTable from "../Components/EpisodeTable";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {API} from '../Components/api';
import moment from "moment";

export default function Episodes({ setEpisodeToEdit, setEpisodeDropdown, episodeDropdown }) {
    const [episodes, setEpisodes] = useState([]);
    const [episode, setEpisode] = useState({ seriesID: "", episodeID: "", episodeTitle: "", releaseDate: "", prevEpisode: "", nextEpisode: "", fileSource: "" });

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === "seriesID") {
            getSeriesEpisodes(value);
        }
        setEpisode(prevState => ({...prevState, [name]: value}));
    };

    const loadEpisodes = async () => {
        const response = await fetch(`${API}/episodes`);
        const data = await response.json();
        setEpisodes(data.episodes);
    }

    const addEpisode = async () => {
        const response = await fetch(`${API}/episodes`, {
            method: 'POST',
            body: JSON.stringify(episode),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the episode");
        } else {
            alert(`Failed to add episode, status code = ${response.status}`);
        }
        loadEpisodes();
    }
    
    const filterEpisodes = async () => {
        let header = {};
        let url = `${API}/episodes`;
        for (const [key, value] of Object.entries(episode)) {
            if (value !== "") {
                header[key] = value;
            }
        }
        url += '?' + (new URLSearchParams(header)).toString()
        const response = await fetch(url);
        const data = await response.json();
        setEpisodes(data.episodes);
    }

    const editEpisode = async (episodeToEdit) => {
        episodeToEdit.releaseDate = moment(episodeToEdit.releaseDate).format("YYYY-MM-DD");
        getSeriesEpisodes(episodeToEdit.seriesID);
        setEpisodeToEdit(episodeToEdit);
        let url = `${API}/episodes/${episodeToEdit.episodeID}`;
        navigate(url);
    }

    const deleteEpisode = async (_id) => {
        const response = await fetch(`${API}/episodes/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            alert('Successfully deleted episode');
        } else {
            console.error(`Failed to delete episode with id=${_id}, status code = ${response.status}`);
        }
        loadEpisodes();
    }

    const getSeriesEpisodes = async (seriesID) => {
        let url = `${API}/episodes?seriesID=${episode.seriesID}`;
        const response = await fetch(url);
        const data = await response.json();
        let tempList = [{ value: null, label:'Null' }];
        for (const episode of data.episodes.values()) {
            tempList.push({value: episode.episodeTitle, label: episode.episodeTitle});
        }
        setEpisodeDropdown(tempList);
    }

    const loadSeriesEpisodes = async () => {

    }

    useEffect(async () => {
        await loadEpisodes();
        loadSeriesEpisodes();
    }, [])

    return (
        <div className="page">
            <h2>Episode Management</h2>
            <EpisodeForm episode={episode} handleChange={handleChange} episodeDropdown={episodeDropdown}/>
            <button type="button" onClick={addEpisode}>ADD NEW EPISODE</button>
            <button type="button" onClick={filterEpisodes}>FILTER EPISODES</button>
            <button type="button" onClick={loadEpisodes}>CLEAR ALL FILTERS</button>
            <EpisodeTable episodes={episodes} onDelete={deleteEpisode} onEdit={editEpisode}/>
        </div>
    );
}