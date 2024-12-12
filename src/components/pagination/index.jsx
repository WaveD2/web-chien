import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./style.css";

const PaginationComponent = ({
    totalItems = 100,   // tong so luong hang hien thi
    itemsPerPage = 10, // so luong hang hien thi
    currentPage = 1, // trang hien tai
    onPageChange, // ham duoc goi khi trang hien tai thay doi
}) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage); // tong so trang = tong so hang / so luong hang hien thi
    const [activePage, setActivePage] = useState(currentPage);

    // ham duoc goi khi thay doi page
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setActivePage(page);
            if (onPageChange) onPageChange(page);
        }
    };

    const renderPaginationItems = () => {
        let items = [];
        const maxPagesToShow = 5; // Số trang hiển thị tối đa

        const startPage = Math.max(1, activePage - 2);
        const endPage = Math.min(totalPages, activePage + 2);

        for (let page = startPage; page <= endPage; page++) {
            items.push(
                <Pagination.Item
                    key={page}
                    active={page === activePage}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </Pagination.Item>
            );
        }

        if (startPage > 1) {
            items.unshift(<Pagination.Ellipsis key="start-ellipsis" disabled />);
            items.unshift(
                <Pagination.Item key={1} onClick={() => handlePageChange(1)}>
                    1
                </Pagination.Item>
            );
        }

        if (endPage < totalPages) {
            items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
            items.push(
                <Pagination.Item key={totalPages} onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                </Pagination.Item>
            );
        }

        return items;
    };

    return (
        <div className="pagination-container">
            <Pagination>
                <Pagination.First
                    onClick={() => handlePageChange(1)}
                    disabled={activePage === 1}
                />
                <Pagination.Prev
                    onClick={() => handlePageChange(activePage - 1)}
                    disabled={activePage === 1}
                />
                {renderPaginationItems()}
                <Pagination.Next
                    onClick={() => handlePageChange(activePage + 1)}
                    disabled={activePage === totalPages}
                />
                <Pagination.Last
                    onClick={() => handlePageChange(totalPages)}
                    disabled={activePage === totalPages}
                />
            </Pagination>
        </div>
    );
};

export default PaginationComponent;
