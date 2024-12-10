import React, { useState, useEffect } from "react";
import { Modal, Button, Col, Row } from "react-bootstrap";
import "./style.css";

const PopupComponent = ({ show, handleClose, handleSave, title, fields, initialData = {} }) => {
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => {
            return { ...acc, [field.name]: initialData[field.name] || "" };
        }, {})
    );

    useEffect(() => {
        setFormData(
            fields.reduce((acc, field) => {
                return { ...acc, [field.name]: initialData[field.name] || "" };
            }, {})
        );
    }, [initialData, fields]);

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        handleSave(formData);
        console.log("formData::", formData);

        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} className="popup">
            <Modal.Header closeButton className="popup-header">
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="popup-body">
                <Col lg="12" className="d-flex align-items-center">
                    <form className="contact__form w-100" onSubmit={handleSubmit} >
                        <Row>
                            {fields.map((field, index) => {
                                if (field.type === "textarea") {
                                    return (
                                        <Col lg="12" key={field.name}>
                                            <textarea
                                                style={field.style}
                                                className="form-control"
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                rows="5"
                                                value={formData[field.name]}
                                                onChange={(e) => handleChange(field.name, e.target.value)}
                                                required={field.required}
                                            />
                                        </Col>
                                    );
                                }
                                return (
                                    <Col lg="6" key={field.name}>
                                        {field.type === "select" ? (
                                            <select
                                                style={field.style}
                                                className="form-control w-100"
                                                name={field.name}
                                                value={formData[field.name]}
                                                onChange={(e) => handleChange(field.name, e.target.value)}
                                                required={field.required}
                                            >
                                                {field.options.map((option, idx) => (
                                                    <option value={option.value} key={idx}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                className="form-control w-100"
                                                type={field.type}
                                                name={field.name}
                                                style={field.style}
                                                placeholder={field.placeholder}
                                                value={formData[field.name]}
                                                onChange={(e) => handleChange(field.name, e.target.value)}
                                                required={field.required}
                                            />
                                        )}
                                    </Col>
                                );
                            })}
                        </Row>
                        <br />
                        <button className="btn" type="button" style={{ border: "1px solid #fff", color: "#fff", marginRight: "10px" }} onClick={handleClose}>
                            Đóng
                        </button>
                        <button className="btn" type="submit" style={{ border: "1px solid #fff", color: "#fff" }} >
                            {formData.loading ? "Đang gửi..." : "Xác nhận!"}
                        </button>
                    </form>
                </Col>
            </Modal.Body>
        </Modal >
    );
};

export default PopupComponent;
