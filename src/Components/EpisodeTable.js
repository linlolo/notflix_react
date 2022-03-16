import "../App.css";
import React from "react";
import {GrEdit, GrTrash} from "react-icons/gr";
import moment from "moment";

export default function EpisodeTable( { episodes, onDelete, onEdit }) {
    return(
        <table>
            <caption>Episode Results:</caption>
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Series ID</th>
                    <th>Ep ID</th>
                    <th>Episode Title</th>
                    <th>Release Date</th>
                    <th>Prev Ep</th>
                    <th>Next Ep</th>
                    <th>Source File</th>
                </tr>
            </thead>
            <tbody>
                {episodes.map((episode, i) => <Episode episode={episode} onDelete={onDelete} onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

function Episode({ episode, onDelete, onEdit }) {
    return (
        <tr>
            <td><GrEdit className="button" onClick={() => onEdit(episode)}/></td>
            <td><GrTrash className="button" onClick={() => onDelete(episode)}/></td>
            <td>{episode.seriesID}</td>
            <td>{episode.episodeID}</td>
            <td>{episode.episodeTitle}</td>
            <td>{moment(episode.releaseDate).format("YYYY-MM-DD")}</td>
            <td>{episode.previousEpisode}</td>
            <td>{episode.nextEpisode}</td>
            <td>{episode.fileSource}</td>
        </tr>
    );
}
