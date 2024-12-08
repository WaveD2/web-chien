import React from "react";
import AppointmentTable from "../../components/table";
import { Button } from "react-bootstrap";

export const Appointment = () => {
  const appointments = [
    { id: "KH 01", name: "Nguyễn Văn A", phone: "012323443535", date: "30/12/2024", service: "Ảnh cưới", address: "123 Nguyễn Trãi- TX- HN" },
    { id: "KH 02", name: "Nguyễn Văn A", phone: "012323443535", date: "30/12/2024", service: "Ảnh sản phẩm", address: "123 Nguyễn Trãi- TX- HN" },
    { id: "KH 03", name: "Nguyễn Văn A", phone: "012323443535", date: "30/12/2024", service: "Ảnh gia đình", address: "123 Nguyễn Trãi- TX- HN" },
    { id: "KH 04", name: "Nguyễn Văn A", phone: "012323443535", date: "30/12/2024", service: "Ảnh thời trang", address: "123 Nguyễn Trãi- TX- HN" },
    { id: "KH 05", name: "Nguyễn Văn A", phone: "012323443535", date: "30/12/2024", service: "Ảnh Tốt Nghiệp", address: "123 Nguyễn Trãi- TX- HN" },
  ];
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Quản lý lịch hẹn</h1>
      <Button variant="success" className="mb-3">
        + Thêm Lịch Hẹn
      </Button>
      <AppointmentTable rows={appointments} columns={[
        "Tên",
        "SĐT",
        "Lịch Hẹn",
        "Dịch Vụ",
        "Địa Chỉ",
        "Chỉnh Sửa",
      ]} />
    </div>
  );
}

export default Appointment;
