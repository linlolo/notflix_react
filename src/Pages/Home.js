import '../App.css';
import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <h1>NotFlix</h1>
            <p>Welcome to the NotFlix Administrative Control System.
                What would you like to do today?</p>
            <Link to="customers">
                <button className="textNavButton">Manage Customers and Subscriptions</button>
            </Link>
            <Link to="content">
                <button className="textNavButton">Manage Series and Episodes</button>
            </Link>
        </div>
    );
}