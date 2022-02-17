import "../App.css";
import React from "react";
import ContentTypesForm from "../Components/ContentTypesForm";
import ContentTypesTable from "../Components/ContentTypesTable";

export default function ContentTypes() {
    return (
        <div className="page">
            <h2>ContentType Management:</h2>
            <ContentTypesForm />
            <button type='button'>ADD NEW CONTENT-TYPE</button>
            <button type='button'>FILTER CONTENT-TYPES</button>
            <button type='button'>CLEAR ALL FILTERS</button>
            <ContentTypesTable />
        </div>
    );
}