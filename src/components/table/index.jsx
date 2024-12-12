import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import "./style.css";
import Loading from "../loading/loading";
import { truncateText } from "../../until";


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
                                    {/* Ten */}
                                    <td>{truncateText(appointment.fullName, 20)}</td>
                                    {/* Sdt */}
                                    <td>{truncateText(appointment.phone, 15)}</td>
                                    {/* Email */}
                                    <td>{truncateText(appointment.email, 25)}</td>
                                    {/* Lich Hen */}
                                    <td>{appointment.bookingDate}</td>
                                    {/* Dich Vu */}
                                    <td>{truncateText(appointment.serviceType, 20)}</td>
                                    {/* Dia chi */}
                                    <td>{truncateText(appointment.address, 30)}</td>
                                    {/* trang thai */}
                                    {columns.includes("Trạng Thái") && (
                                        <td>{truncateText(appointment.status, 10)}</td>
                                    )}
                                    {/* chinh sua */}
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
