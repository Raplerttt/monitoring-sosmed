import React from 'react';

const RecentOrder = () => {
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
          <button
            className="btn btn-sm h-8 rounded-lg px-3 text-black flex items-center"
            id="btn-filter-order"
          >
            <i className="bi bi-sliders mr-1"></i> Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
