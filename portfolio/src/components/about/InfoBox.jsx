import React from 'react';

export default function InfoBox({ iconClass, title, subtitle }) {
    return (
        <div className="about__box">
            <i className={iconClass}></i>
            <h3 className="about__title">{title}</h3>
            <span className="about__subtitle">{subtitle}</span>
        </div>
    );
}
