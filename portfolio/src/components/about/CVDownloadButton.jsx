import React from "react";

const CVDownloadButton = ({ CV, iconClassName }) => {
    return (
        <a download="" href={CV} className="button button--flex about__button-download">
            Download CV
            <i className={iconClassName}></i>
        </a>
    );
};

export default CVDownloadButton;
