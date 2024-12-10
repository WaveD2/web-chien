import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import "./style.css";
import Loading from "../loading/loading";

const AppointmentTable = ({ rows, columns, isLoading = true, onDelete, onEdit }) => {
    return (
        <div className="appointment-container">
            <div className="table-wrapper">
                <Table className="appointment-table">
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} className="text-center sticky-header">
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <tbody>
                            {rows.map((appointment, index) => (
                                <tr key={index}>
                                    <td>{appointment.fullName}</td>
                                    <td>{appointment.phone}</td>
                                    <td>{appointment.email}</td>
                                    <td>{appointment.bookingDate}</td>
                                    <td>{appointment.serviceType}</td>
                                    <td>{appointment.address}</td>
                                    {columns.includes("Trạng Thái") && <td>{appointment.status}</td>}
                                    <td className="action-buttons">
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            className="me-2"
                                            onClick={() => onEdit(appointment)}
                                        >
                                            Sửa
                                        </Button>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => onDelete(appointment.id)}
                                        >
                                            Xóa
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </Table>
            </div>
        </div>
    );
};

export default AppointmentTable;
