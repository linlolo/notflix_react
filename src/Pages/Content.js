import '../App.css';
import React from "react";
import {Link} from "react-router-dom";

export default function Content() {
    return (
        <div className="content">
            <h2>Series Management</h2>
            <Link to="addSeries">
                <button type='button'>ADD A NEW SERIES</button>
            </Link>
        </div>
    );
}