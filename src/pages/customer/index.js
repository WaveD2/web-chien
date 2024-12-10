import React, { useState, useEffect, useCallback } from "react";
import AppointmentTable from "../../components/table";
import { Button } from "react-bootstrap";
import "./style.css";
import PopupComponent from "../../components/popup";
import { createApi, getAllApi, deleteApi, updateApi } from "../../supabaseService";
import PaginationComponent from "../../components/pagination";

export const CustomerMng = () => {
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const itemsPerPage = 10;

  const fetchAppointments = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, totalCount } = await getAllApi({
        from: "bookings",
        page: currentPage,
        pageSize: itemsPerPage,
      });
      setAppointments(data);
      setTotalCount(totalCount);
    } catch (error) {
      console.error("Error fetching appointments:", error.message);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAppointment(null);
  };

  const handleSaveCustomer = async (newBookingData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      if (selectedAppointment) {
        await updateApi({
          data: newBookingData,
          from: "bookings",
          id: selectedAppointment.id,
        });
      } else {
        await createApi({ data: newBookingData, from: "bookings" });
      }
      await fetchAppointments();
      handleCloseModal();
    } catch (error) {
      console.error("Error saving booking:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteCustomer = async (id) => {
    try {
      await deleteApi({ from: "bookings", id });
      await fetchAppointments();
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
        + Thêm Khách Hàng
      </Button>
      <PopupComponent
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveCustomer}
        title={selectedAppointment ? "Chỉnh Sửa Khách Hàng" : "Thêm Khách Hàng"}
        fields={[
          { name: "fullName", type: "text", label: "Họ và Tên", placeholder: "Nhập họ và tên", required: true },
          { name: "email", type: "text", label: "Email", placeholder: "Nhập email", required: true },
          { name: "phone", type: "text", label: "Số điện thoại", placeholder: "Nhập số điện thoại", required: true },
          { name: "bookingDate", type: "date", label: "Ngày hẹn", required: true },
          {
            name: "serviceType",
            type: "select",
            label: "Dịch vụ",
            options: [
              { value: "", label: "Chọn kiểu chụp" },
              { value: "Chụp hình sự kiện", label: "Chụp hình sự kiện" },
              { value: "Chụp ảnh gia đình", label: "Chụp ảnh gia đình" },
              { value: "Chụp ảnh chân dung", label: "Chụp ảnh chân dung" },
            ],
            required: true,
          },
          {
            name: "status",
            type: "select",
            label: "Trạng thái",
            options: [
              { value: "", label: "Chọn tiến trình" },
              { value: "Chờ xác nhận", label: "Chờ xác nhận" },
              { value: "Xác nhận", label: "Xác nhận" },
              { value: "Từ chối", label: "Từ chối" },
            ],
            required: true,
          },
          { name: "address", type: "textarea", label: "Địa chỉ", placeholder: "Nhập địa chỉ" },
        ]}
        initialData={selectedAppointment || {}}
      />
      <AppointmentTable
        isLoading={isLoading}
        rows={appointments}
        columns={["Tên", "SĐT", "Email", "Lịch Hẹn", "Dịch Vụ", "Địa Chỉ", "Trạng Thái", "Chỉnh Sửa"]}
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

export default CustomerMng;
