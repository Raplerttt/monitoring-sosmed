import React, { useState } from 'react';

const FilterOrderModal = ({ isOpen, onClose }) => {
  const [orderName, setOrderName] = useState('');
  const [clientName, setClientName] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [orderType, setOrderType] = useState('');

  const handleReset = () => {
    setOrderName('');
    setClientName('');
    setOrderDate('');
    setOrderStatus('');
    setOrderType('');
  };

  const handleApplyFilter = () => {
    // Lakukan logika untuk menerapkan filter
    console.log('Filter Applied:', { orderName, clientName, orderDate, orderStatus, orderType });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`} tabIndex="-1" id="modal-filter-order">
      <div className="modal-dialog modal-md max-w-full sm:max-w-md sm:w-full mx-auto">
        <div className="modal-content bg-white shadow-lg rounded-lg">
          <div className="modal-header flex justify-between items-center p-4 border-b">
            <h5 className="modal-title text-lg font-semibold">Filter Order</h5>
            <button
              type="button"
              className="btn-close text-gray-500 hover:text-gray-700"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div className="modal-body p-4">
            <div className="space-y-4">
              {/* Order Name */}
              <div>
                <label htmlFor="r_title" className="block text-sm font-medium text-gray-700">Order Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                  name="r_title"
                  value={orderName}
                  onChange={(e) => setOrderName(e.target.value)}
                  placeholder="Order name.."
                />
              </div>

              {/* Client Name */}
              <div>
                <label htmlFor="c_name" className="block text-sm font-medium text-gray-700">Client Name</label>
                <input
                  type="text"
                  placeholder="Client name.."
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>

              {/* Order Date */}
              <div>
                <label htmlFor="r_date" className="block text-sm font-medium text-gray-700">Order Date</label>
                <input
                  type="text"
                  name="r_date"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                  placeholder="Select date.."
                  value={orderDate}
                  onChange={(e) => setOrderDate(e.target.value)}
                />
              </div>

              {/* Order Status */}
              <div>
                <label htmlFor="r_status" className="block text-sm font-medium text-gray-700">Order Status</label>
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-1">
                    <input
                      className="form-radio"
                      type="radio"
                      value=""
                      id="fr-status-all"
                      name="r_status"
                      checked={orderStatus === ''}
                      onChange={() => setOrderStatus('')}
                    />
                    <label htmlFor="fr-status-all" className="text-sm text-gray-700">All</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input
                      className="form-radio"
                      type="radio"
                      value="in_verified,verified,ongoing"
                      id="fr-status-in_verified,verified,ongoing"
                      name="r_status"
                      checked={orderStatus === 'in_verified,verified,ongoing'}
                      onChange={() => setOrderStatus('in_verified,verified,ongoing')}
                    />
                    <label htmlFor="fr-status-in_verified,verified,ongoing" className="text-sm text-gray-700">Ongoing</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input
                      className="form-radio"
                      type="radio"
                      value="completed"
                      id="fr-status-completed"
                      name="r_status"
                      checked={orderStatus === 'completed'}
                      onChange={() => setOrderStatus('completed')}
                    />
                    <label htmlFor="fr-status-completed" className="text-sm text-gray-700">Completed</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input
                      className="form-radio"
                      type="radio"
                      value="rejected,canceled"
                      id="fr-status-rejected,canceled"
                      name="r_status"
                      checked={orderStatus === 'rejected,canceled'}
                      onChange={() => setOrderStatus('rejected,canceled')}
                    />
                    <label htmlFor="fr-status-rejected,canceled" className="text-sm text-gray-700">Canceled</label>
                  </div>
                </div>
              </div>

              {/* Order Type */}
              <div>
                <label htmlFor="r_type" className="block text-sm font-medium text-gray-700">Order Type</label>
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-1">
                    <input
                      className="form-radio"
                      type="radio"
                      value=""
                      id="fr-type-all"
                      name="r_type"
                      checked={orderType === ''}
                      onChange={() => setOrderType('')}
                    />
                    <label htmlFor="fr-type-all" className="text-sm text-gray-700">All</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input
                      className="form-radio"
                      type="radio"
                      value="trial"
                      id="fr-type-trial"
                      name="r_type"
                      checked={orderType === 'trial'}
                      onChange={() => setOrderType('trial')}
                    />
                    <label htmlFor="fr-type-trial" className="text-sm text-gray-700">Trial</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input
                      className="form-radio"
                      type="radio"
                      value="full"
                      id="fr-type-full"
                      name="r_type"
                      checked={orderType === 'full'}
                      onChange={() => setOrderType('full')}
                    />
                    <label htmlFor="fr-type-full" className="text-sm text-gray-700">Full <i className="fas fa-splotch opacity-50 ps-1 fs-11px text-warning"></i></label>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer flex justify-between items-center p-4 border-t">
            <button
              type="button"
              className="btn btn-lighter-green text-success btn-sm fs-13px btn-reset-filter-order rounded-lg px-4 py-2"
              onClick={handleReset}
            >
              Reset Filter
            </button>
            <button
              type="button"
              className="btn btn-light-green btn-sm fs-13px text-white btn-apply-filter-order rounded-lg px-4 py-2"
              onClick={handleApplyFilter}
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOrderModal;
