import "../App.css";
import React from "react";
import ContentTypesForm from "../Components/ContentTypesForm";

export default function EditType() {
    return (
        <div className="page">
            <h3>Edit ContentType Details:</h3>
            <p>Note: ContentType ID cannot be changed.</p>
            <ContentTypesForm />
            <button type="button">UPDATE CONTENT-TYPE</button>
        </div>
    );
}