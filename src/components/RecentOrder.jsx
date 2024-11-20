import {React, useState} from 'react';
import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";

const RecentOrder = () => {
  const [isAscending, setIsAscending] = useState(true); // Default: A-Z

  const handleFilterClick = () => {
    setIsAscending((prevState) => !prevState); 
  };
  return (
    <div className="shadow-lg rounded-2xl mt-4 bg-white text-black">
      <div
        className="p-4 rounded-t-2xl"
        style={{
          backgroundImage:
            'radial-gradient(circle 343px at 46.3% 47.5%, rgba(242,242,242,1) 0%, rgba(241,241,241,1) 72.9%)',
        }}
      >
        <div className="flex justify-between items-center">
          <p className="m-0 font-bold text-black leading-8">Recent Order</p>
          <div className="flex items-center"> {/* Wrapper untuk tombol dan teks */}
            <p className="text-black">Filter</p>
        <button
          className="btn btn-sm h-8 rounded-lg px-2 text-black flex items-center"
          id="btn-filter-order"
          onClick={handleFilterClick} // Add the click handler
        >
          <i className="bi bi-sliders"></i>
          {isAscending ? <FaSortAlphaDown /> : <FaSortAlphaUpAlt />}
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
