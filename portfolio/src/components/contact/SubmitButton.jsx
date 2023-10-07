import React from 'react';

function SubmitButton({text, iconClassName}) {
    return (
        <button className="button button--flex contact__button-send">
            {text}
            <i className={iconClassName}></i>
        </button>
    );
}

export default SubmitButton;
