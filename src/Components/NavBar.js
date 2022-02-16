import React from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/customers">Customers</Link>
                </li>
                <li>
                    <Link to="/series">Series</Link>
                </li>
                <li>
                    <Link to="/episodes">Episodes</Link>
                </li>
                <li>
                    <Link to="/subscriptions">Subscriptions</Link>
                </li>
                <li>
                    <Link to="/genres">Genres</Link>
                </li>
                <li>
                    <Link to="/types">ContentTypes</Link>
                </li>
            </ul>
        </nav>
    );
}