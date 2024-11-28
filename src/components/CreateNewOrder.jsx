import React from "react";
import { FaUser, FaCalendarAlt, FaServicestack, FaFileAlt, FaFileUpload, FaFileImage } from "react-icons/fa";

const CreateNewOrder = ({ togglePopup }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Create New Order</h2>
        <button
          onClick={togglePopup}
          className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
        >
          &times;
        </button>
      </div>
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bagian Kiri */}
          <div className="space-y-6">
            {/* Client Name */}
            <div>
              <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
                <FaUser size={20} />
                <span>Client Name <span className="text-red-500">*</span></span>
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 border rounded-lg focus:ring-blue-500 focus:outline-none text-lg"
                placeholder="Enter client name"
                required
              />
            </div>

            {/* Date */}
            <div>
            <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
          <FaCalendarAlt size={20} />
          <span>
            Date & Time <span className="text-red-500">*</span>
          </span>
        </label>
        <input
          type="datetime-local"
          className="w-full px-5 py-3 border rounded-lg focus:ring-blue-500 focus:outline-none text-lg"
          required
            />
            </div>

            {/* Services */}
            <div>
                <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
                <FaServicestack size={20} />
                <span>
                    Services <span className="text-red-500">*</span>
                </span>
                </label>
                <div className="relative">
                <select
                    className="w-full px-5 py-3 border rounded-lg focus:ring-blue-500 focus:outline-none text-lg appearance-none pr-10"
                    required
                >
                    <option value="" disabled selected>
                    Select a service
                    </option>
                    <option value="service1">Youtube</option>
                    <option value="service2">Instagram</option>
                </select>
                <span className="absolute top-1/2 right-6 transform -translate-y-1/2 pointer-events-none">
                    <svg
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M0 0L5 5L10 0H0Z"
                        fill="#4B5563"
                    />
                    </svg>
                </span>
                </div>
            </div>
            {/* Order Type */}
            <div>
        <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
          <FaFileAlt size={20} />
          <span>
            Order Type <span className="text-red-500">*</span>
          </span>
        </label>
        <div className="flex space-x-6 mt-2">
          {/* Trial Service Button */}
          <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer">
            <input
              type="radio"
              id="trialService"
              name="orderType"
              value="trial"
              className="h-5 w-5 text-blue-500 border-gray-300 focus:ring-blue-500"
              required
            />
            <label
              htmlFor="trialService"
              className="text-lg font-medium text-gray-700"
            >
              Trial Service
            </label>
          </div>

          {/* Full Service Button */}
          <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer">
            <input
              type="radio"
              id="fullService"
              name="orderType"
              value="full"
              className="h-5 w-5 text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="fullService"
              className="text-lg font-medium text-gray-700"
            >
              Full Service
            </label>
          </div>
        </div>
      </div>

          </div>

          {/* Bagian Kanan */}
          <div className="space-y-6">
            {/* Details */}
            <div>
              <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
                <FaFileAlt size={20} />
                <span>Details <span className="text-red-500">*</span></span>
              </label>
              <textarea
                className="w-full px-5 py-3 border rounded-lg focus:ring-blue-500 focus:outline-none text-lg"
                placeholder="Enter order details"
                rows="6"
                required
              />
            </div>

            {/* Narrative File */}
            <div>
              <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
                <FaFileUpload size={20} />
                <span>Narrative File (Optional)</span>
              </label>
              <input
                type="file"
                className="w-full px-5 py-3 border rounded-lg focus:ring-blue-500 focus:outline-none text-lg"
              />
            </div>

            {/* Media File */}
            <div>
              <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
                <FaFileImage size={20} />
                <span>Media File from Google Drive (Optional)</span>
              </label>
              <input
                type="url"
                className="w-full px-5 py-3 border rounded-lg focus:ring-blue-500 focus:outline-none text-lg"
                placeholder="Paste Google Drive link"
              />
            </div>
          </div>
        </div>

        {/* Tombol */}
        <div className="flex justify-end space-x-4">
        <button
            type="button"
            onClick={togglePopup}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-900 text-base font-medium transition-all"
            >
            Cancel
        </button>

          <button
            type="submit"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-blue-300 hover:text-blue-900 text-base font-medium transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewOrder;
