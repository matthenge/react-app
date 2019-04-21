import React from "react";
import propTypes from "prop-types";

const Input = ({label, text, type, id, placeholder, handleChange}) => (
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input
            type={type}
            className="form-control"
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
            required
        />
    </div>
);

Input.propTypes = {
    label: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired,
    handleChange: propTypes.func
};

export default Input;