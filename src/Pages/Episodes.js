import "../App.css";
import React from "react";
import EpisodeForm from "../Components/EpisodeForm";
import EpisodeTable from "../Components/EpisodeTable";

export default function Episodes() {
    return (
        <div>
            <h2>Episode Management</h2>
            <EpisodeForm />
            <button type="button">ADD NEW EPISODE</button>
            <button type="button">FILTER EPISODES</button>
            <button type="button">CLEAR ALL FILTERS</button>
            <EpisodeTable />
        </div>
    );
}