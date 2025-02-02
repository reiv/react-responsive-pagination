import React, { useState } from 'react';
import Pagination from 'react-responsive-pagination';

export default function BootstrapLiveDemo({ totalPages = 120, ...props }) {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page) {
    setCurrentPage(page);
    // ... do something with `page`
  }

  return (
    <Pagination
      total={totalPages}
      current={currentPage}
      onPageChange={page => handlePageChange(page)}
      {...props}
    />
  );
}
