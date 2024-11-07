import React, { useState } from 'react';
import FilterOrderModal from './FilterOrderModal';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="btn-open-filter">
        Open Filter
      </button>
      <FilterOrderModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ParentComponent;
