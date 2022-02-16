import '../App.css';
import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <h1>NotFlix</h1>
            <p>Welcome to the NotFlix Administrative Control System.
                Please select one of the links above.</p>
        </div>
    );
}