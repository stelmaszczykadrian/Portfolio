import React from "react";

export default function ServiceItem({ iconClass, description }){
    return(
        <li>
            <i className={`uil uil-check service__list-icon ${iconClass}`}></i>
            <p>{description}</p>
        </li>

)};
