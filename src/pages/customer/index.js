import React, { useState, useEffect, useCallback } from "react";
import AppointmentTable from "../../components/table";
import { Button } from "react-bootstrap";
import "./style.css";
import PopupComponent from "../../components/popup";
import { createApi, getAllApi, deleteApi, updateApi } from "../../supabaseService";
import PaginationComponent from "../../components/pagination";

export const CustomerMng = () => {
  const [appointments, setAppointments] = useState([]); // bien luu gia tri cua toan bo du lieu
  const [showModal, setShowModal] = useState(false); // bien luu trang thai cua popup
  const [isLoading, setIsLoading] = useState(false); // bien luu trang thai cua loading
  const [isSubmitting, setIsSubmitting] = useState(false); // bien luu trang thai cua submit
  const [totalCount, setTotalCount] = useState(0); // bien luu so luong du lieu
  const [currentPage, setCurrentPage] = useState(1); // bien luu trang hien tai
  const [selectedAppointment, setSelectedAppointment] = useState(null); // bien luu gia tri ma duoc chon
  const itemsPerPage = 10; // gia tri row hien thi mac dinh

  // ham nay goi getAllApi de lay toan bo du lieu trong db bookings
  const fetchAppointments = useCallback(async () => {
    setIsLoading(true);
    try {
      // api lay toan bo du lieu theo page 
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

  // goi api be tu fetchAppointments de lay du lieu
  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  // mo popup
  const handleOpenModal = () => setShowModal(true);

  // dong popup
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAppointment(null);
  };

  // ham cap nhat thong tin-gia tri moi len BE -> cap nhat vao DB
  const handleSaveCustomer = async (newBookingData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      if (selectedAppointment) {
        // goi api de update du lieu
        await updateApi({
          data: newBookingData,
          from: "bookings",
          id: selectedAppointment.id,
        });
      } else {
        // goi api de tao moi du lieu
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

  // ham call api BE de xoa du lieu
  const handleDeleteCustomer = async (id) => {
    try {
      // xoa 1 du lieu
      await deleteApi({ from: "bookings", id });
      // goi lai api de lay toan bo du lieu moi
      await fetchAppointments();
    } catch (error) {
      console.error("Error deleting booking:", error.message);
    }
  };

  // ham goi api BE de cap nhat gia tri moi
  const handleEditCustomer = (appointment) => {
    setSelectedAppointment(appointment);
    handleOpenModal();
  };

  // ham thay doi trang page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container p-header">
      <Button className="table_button mt-4 mb-4" onClick={handleOpenModal}>
        + Thêm Khách Hàng
      </Button>
      <PopupComponent
        show={showModal} //showModal = true => open va nguoc lai false la dong
        handleClose={handleCloseModal}
        handleSave={handleSaveCustomer}
        // neu selectedAppointment co gia tri thi hien thi chinh sua khach hang, nguoc lai thi them khach hang
        title={selectedAppointment ? "Chỉnh Sửa Khách Hàng" : "Thêm Khách Hàng"}
        // cac truong hien thi trong popup
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
        //giá trị mặc định khởi tạo 
        initialData={selectedAppointment || {}}
      />
      <AppointmentTable
        // loading
        isLoading={isLoading} // true = loading
        // gia tri hien thi o table
        rows={appointments}
        // cac cot hien thi o table
        columns={["Tên", "SĐT", "Email", "Lịch Hẹn", "Dịch Vụ", "Địa Chỉ", "Trạng Thái", "Chỉnh Sửa"]}
        onDelete={handleDeleteCustomer} // ham xoa khach hang
        onEdit={handleEditCustomer}  // ham chinh sua khach hang
      />
      <PaginationComponent
        totalItems={totalCount} // tong so luong items
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CustomerMng;
