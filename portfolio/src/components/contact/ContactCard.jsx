import React from 'react';

function ContactCard({iconClassName, title, link, buttonText}) {
    return (
        <div className="contact__card">
            <i className={iconClassName}></i>
            <h3 className="contact__card-title">{title}</h3>
            <a href={link} className="contact__button">
                {buttonText} <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
        </div>
    );
}

export default ContactCard;
