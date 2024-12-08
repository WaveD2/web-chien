import React from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import "./style.css";

const AppointmentTable = ({ rows, columns }) => {
    return (
        <Table responsive className="table mt-3">
            <thead className="text-center">
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((appointment, index) => (
                    <tr key={index} className="text-center align-middle">
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.service}</td>
                        <td>{appointment.address}</td>
                        <td>
                            <Button variant="primary" size="sm" className="me-2">Sửa</Button>
                            <Button variant="danger" size="sm">Xóa</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AppointmentTable;
