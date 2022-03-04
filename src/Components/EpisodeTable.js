import "../App.css";
import React from "react";
import {GrEdit, GrTrash} from "react-icons/gr";

export default function EpisodeTable( { episodes }) {
    return(
        <table>
            <caption>Episode Results:</caption>
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Series ID</th>
                    <th>Episode ID</th>
                    <th>Episode Title</th>
                    <th>Release Date</th>
                    <th>Previous Episode</th>
                    <th>Next Episode</th>
                    <th>Source File</th>
                </tr>
            </thead>
            <tbody>
                {episodes.map((episode, i) => <Episode episode={episode}
                    key={i} />)}
            </tbody>
        </table>
    );
}

function Episode({ episode }) {
    return (
        <tr>
            <td><GrEdit /></td>
            <td><GrTrash /></td>
            <td>{episode.seriesID}</td>
            <td>{episode.episodeID}</td>
            <td>{episode.episodeTitle}</td>
            <td>{episode.releaseDate}</td>
            <td>{episode.prevEpisode}</td>
            <td>{episode.nextEpisode}</td>
            <td>{episode.fileSource}</td>
        </tr>
    );
}
