import React from 'react';

const Reporting = () => {
  return (
    <div className="col-md-5 col-12 mt-4 md:mt-0">
      <div
        className="shadow-lg rounded-2xl mb-4 hidden md:block"
        style={{
          backgroundImage:
            'radial-gradient(circle 1086px at 1.1% 96.2%, rgba(1,44,66,1) 0%, rgba(163,221,253,1) 53.6%)',
        }}
      >
        <div className="p-4 relative flex items-center gap-4">
          <div>
            <h5 className="font-semibold text-gray-800 whitespace-nowrap leading-none">
              Reporting
            </h5>
            <p className="m-0 text-sm text-gray-600 leading-none">
              Create a report based on your orders
            </p>
            <a
              href="https://centurion.id/order/reporting"
              className="text-reset text-decoration-none"
            >
              <button className="btn btn-sm rounded-lg text-white bg-orange bg-opacity-75 px-3 mt-2">
                Create Report
              </button>
            </a>
          </div>
          <div className="ml-auto flex items-center justify-center">
            <img
              src="https://centurion.id/order/assets/images/reporting2.png"
              alt="Reporting"
              className="w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;
