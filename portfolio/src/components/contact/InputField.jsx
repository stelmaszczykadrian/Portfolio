import React from 'react';

function InputField({label, type, name, placeholder}) {
    return (
        <div className="contact__form-div">
            <label className="contact__form-tag">{label}</label>
            <input type={type} name={name} className="contact__form-input" placeholder={placeholder}/>
        </div>
    );
}

export default InputField;
