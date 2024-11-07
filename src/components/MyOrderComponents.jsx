import React from 'react';

const MyOrder = () => {
  return (
    <div className="relative shadow-lg rounded-2xl bg-red-400/70 p-6 text-black">
      <div className="flex items-center space-x-4">
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-centerr rounded-full bg-light-blue/50 text-light border-none"
        >
          <i className="fas fa-dolly-flatbed text-light text-sm"></i>
        </button>
        <h3 className="text-lg font-semibold leading-10">My Orders</h3>
        <img
          src="https://centurion.id/order/assets/images/bg4.svg"
          alt="background"
          className="absolute top-0 right-0 opacity-25 w-48"
        />
      </div>
      <div className="flex justify-start mt-6 gap-10" id="stack-order-summary">
        <div className="text-center">
          <p className="text-lg font-semibold text-black order-ongoing">0</p>
          <small className="text-black opacity-50">Ongoing</small>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-black order-completed">0</p>
          <small className="text-black opacity-50">Completed</small>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-black order-canceled">0</p>
          <small className="text-black opacity-50">Canceled</small>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
