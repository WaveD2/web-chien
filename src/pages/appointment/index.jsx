import React, { useState, useEffect } from "react";
import AppointmentTable from "../../components/table";
import { Button } from "react-bootstrap";
import './style.css';
import PopupComponent from "../../components/popup";
import { createApi, getAllApi, deleteApi } from "../../supabaseService";
import PaginationComponent from "../../components/pagination";


export const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const itemsPerPage = 10;

  const fetchAppointments = async () => {
    setIsLoading(true);
    try {
      const { data, totalCount } = await getAllApi({
        from: "bookings",
        page: currentPage,
        pageSize: itemsPerPage
      });
      setAppointments(data);
      setTotalCount(totalCount);
    } catch (error) {
      console.error("Error fetching appointments:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [currentPage]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAppointment(null);
  };

  const handleSaveCustomer = async (newBookingData) => {
    try {
      await createApi({ data: newBookingData, from: "bookings" });
      fetchAppointments();
      handleCloseModal();
    } catch (error) {
      console.error("Error saving booking:", error.message);
    }
  };

  const handleDeleteCustomer = async (id) => {
    try {
      await deleteApi({ from: "bookings", id });
      fetchAppointments();
    } catch (error) {
      console.error("Error deleting booking:", error.message);
    }
  };

  const handleEditCustomer = (appointment) => {
    setSelectedAppointment(appointment);
    handleOpenModal();
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container p-header">
      <Button className="table_button mt-4 mb-4" onClick={handleOpenModal}>
        + Thêm Lịch Hẹn
      </Button>
      <PopupComponent
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveCustomer}
        title={selectedAppointment ? "Chỉnh Sửa Lịch Hẹn" : "Thêm Lịch Hẹn"}
        fields={[
          { name: "fullName", type: "text", label: "Họ và Tên", placeholder: "Nhập họ và tên", required: true },
          { name: "email", type: "text", label: "Email", placeholder: "Nhập email", required: true },
          { name: "phone", type: "text", label: "Số điện thoại", placeholder: "Nhập số điện thoại", required: true },
          { name: "bookingDate", type: "date", label: "Ngày hẹn", value: selectedAppointment?.bookingDate || "", required: true },
          {
            name: "serviceType", type: "select", label: "Dịch vụ", options: [
              { value: "", label: "Chọn kiểu chụp" },
              { value: "Chụp hình sự kiện", label: "Chụp hình sự kiện" },
              { value: "Chụp ảnh gia đình", label: "Chụp ảnh gia đình" },
              { value: "Chụp ảnh chân dung", label: "Chụp ảnh chân dung" }
            ], value: selectedAppointment?.serviceType || "", required: true,
            style: {
              padding: "6px 10px",
              color: "#fff"
            },
          },
          {
            name: "address", type: "textarea", label: "Địa chỉ", placeholder: "Nhập địa chỉ", value: selectedAppointment?.address || "", style: {
              marginTop: "10px"
            }
          }
        ]}
        initialData={selectedAppointment || {}}
      />
      <AppointmentTable
        isLoading={isLoading}
        rows={appointments}
        columns={["Tên", "SĐT", "Email", "Lịch Hẹn", "Dịch Vụ", "Địa Chỉ", "Chỉnh Sửa"]}
        onDelete={handleDeleteCustomer}
        onEdit={handleEditCustomer}
      />
      <PaginationComponent
        totalItems={totalCount}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Appointment;
