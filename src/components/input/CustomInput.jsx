import React from "react";
import { Form } from "react-bootstrap";
import "./style.css";

const CustomInput = ({ type, label, placeholder, value, onChange, style }) => {
    return (
        <Form.Group className="contact__form w-100" style={style}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="form-control"
            />
        </Form.Group>
    );
};

export default CustomInput;
