import React from 'react';

const Services = () => {
  return (
    <div
      className="shadow-lg rounded-2xl mb-4"
      style={{
        backgroundImage:
          'radial-gradient(circle 1292px at -13.6% 51.7%, rgba(255, 239, 204, 1) 0%, rgba(255, 228, 181, 1) 51.5%, rgba(255, 252, 247, 1) 88.6%)',
      }}
    >
      <div className="p-4">
        <div className="flex items-center gap-4">
          <div>
            <img
              src="https://centurion.id/order/assets/images/serv.png"
              alt="Service"
              className="w-24"
            />
          </div>
          <div className="pr-2">
            <h5 className="font-semibold text-black whitespace-nowrap leading-none mb-2">
              List of Services
            </h5>
            <p className="m-0 text-sm text-black text-opacity-75 leading-snug">
              View the services and limitations of the available platforms
            </p>
          </div>
          <div className="ml-auto">
            <button className="btn btn-sm rounded-lg text-black bg-red-500 bg-opacity-25 px-7">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
