import React, { useState, useEffect } from "react";
import { Modal, Button, Col, Row } from "react-bootstrap";
import "./style.css";

const PopupComponent = ({ show, handleClose, handleSave, title, fields, initialData = {} }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave(formData);
    };

    return (
        <Modal show={show} onHide={handleClose} className="popup">
            <Modal.Header closeButton className="popup-header">
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="popup-body">
                <form className="contact__form" onSubmit={handleSubmit}>
                    <Row>
                        {fields.map((field) => {
                            const { name, type, placeholder, style, required, options, label } = field;
                            if (type === "textarea") {
                                return (
                                    <Col lg="12" key={name}>
                                        <textarea
                                            className="form-control"
                                            style={style}
                                            name={name}
                                            placeholder={placeholder}
                                            rows="5"
                                            value={formData[name] || ""}
                                            onChange={(e) => handleChange(name, e.target.value)}
                                            required={required}
                                        />
                                    </Col>
                                );
                            }

                            return (
                                <Col lg="6" key={name}>
                                    {type === "select" ? (
                                        <select
                                            className="form-control"
                                            style={{ ...style, padding: '0.5rem 1rem', marginBottom: "16px" }}
                                            name={name}
                                            value={formData[name] || ""}
                                            onChange={(e) => handleChange(name, e.target.value)}
                                            required={required}
                                        >
                                            {options.map((option) => (
                                                <option value={option.value} key={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            className="form-control"
                                            style={style}
                                            type={type}
                                            name={name}
                                            placeholder={placeholder}
                                            value={formData[name] || ""}
                                            onChange={(e) => handleChange(name, e.target.value)}
                                            required={required}
                                        />
                                    )}
                                </Col>
                            );
                        })}
                    </Row>
                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="secondary" onClick={handleClose} className="me-2">
                            Đóng
                        </Button>
                        <Button type="submit" variant="primary">
                            Xác nhận
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default PopupComponent;
