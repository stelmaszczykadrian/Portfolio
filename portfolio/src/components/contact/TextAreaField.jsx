import React from 'react';

function TextAreaField({label, name, placeholder, cols, rows}) {
    return (
        <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag">{label}</label>
            <textarea name={name} cols={cols} rows={rows} className="contact__form-input" placeholder={placeholder}/>
        </div>
    );
}

export default TextAreaField;
