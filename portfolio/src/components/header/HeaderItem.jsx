import React from 'react';

const HeaderItem = ({ href, text, iconClass, active, setActiveNav }) => {
    const handleItemClick = () => {
        setActiveNav(href);
    };

    return (
        <li className="nav__item">
            <a
                href={href}
                onClick={handleItemClick}
                className={`nav__link ${active ? "active-link" : ""}`}
            >
                <i className={`uil ${iconClass} nav__icon`}></i>
                {text}
            </a>
        </li>
    );
};

export default HeaderItem;
