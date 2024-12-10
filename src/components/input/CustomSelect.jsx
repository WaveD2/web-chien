import React from "react";
import { Form } from "react-bootstrap";
import "./style.css";

const CustomSelect = ({ label, options, value, onChange }) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="custom-select"
            >
                <option value="">Chọn...</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    );
};

export default CustomSelect;
