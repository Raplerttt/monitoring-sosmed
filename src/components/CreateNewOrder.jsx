import React, { useState } from "react";
import axios from "../utils/axios"; // Import axios
import { FaUser, FaCalendarAlt, FaServicestack, FaFileAlt, FaFileUpload, FaFileImage } from "react-icons/fa";

const CreateNewOrder = ({ togglePopup }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    date: "",
    service: "",
    orderType: "",
    details: "",
    narrativeFile: null,  // File object for upload
    mediaFile: "",  // URL for Google Drive
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0], // handle file uploads
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    // Ensure the local date is correctly formatted as "YYYY-MM-DD HH:mm"
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = formatDate(formData.date);

    // Creating the payload with the form data in JSON format
    const orderData = {
      clientName: formData.clientName,
      date: formattedDate,
      service: formData.service,
      orderType: formData.orderType,
      details: formData.details,
      narrativeFile: formData.narrativeFile ? formData.narrativeFile.name : null, // Send filename if available
      mediaFile: formData.mediaFile, // Send the URL
    };

    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        alert("You must be logged in.");
        return;
      }

      // Send the request to the server as JSON
      const response = await axios.post("order/submit", orderData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Order created:", response.data);
      togglePopup(); // Close popup on success
    } catch (error) {
      console.error("Error creating order:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        alert(`Failed to create order: ${error.response.data.message || error.response.data}`);
      } else {
        alert("An error occurred while submitting the order.");
      }
    }
  };

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
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side form */}
          <div className="space-y-6">
            {/* Client Name */}
            <div>
              <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
                <FaUser size={20} />
                <span>Client Name <span className="text-red-500">*</span></span>
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                className="w-full px-5 py-3 border rounded-lg focus:ring-blue-500 focus:outline-none text-lg"
                placeholder="Enter client name"
                required
              />
            </div>

            {/* Date */}
            <div>
              <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
                <FaCalendarAlt size={20} />
                <span>Date & Time <span className="text-red-500">*</span></span>
              </label>
              <input
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-5 py-3 border rounded-lg focus:ring-blue-500 focus:outline-none text-lg"
                required
              />
            </div>

            {/* Services */}
            <div>
              <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
                <FaServicestack size={20} />
                <span>Services <span className="text-red-500">*</span></span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-5 py-3 border rounded-lg focus:ring-blue-500 focus:outline-none text-lg"
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="service1">Youtube</option>
                <option value="service2">Instagram</option>
              </select>
            </div>

            {/* Order Type */}
            <div>
              <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
                <FaFileAlt size={20} />
                <span>Order Type <span className="text-red-500">*</span></span>
              </label>
              <div className="flex space-x-6 mt-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="orderType"
                    value="trial"
                    onChange={handleChange}
                    checked={formData.orderType === "trial"}
                    className="h-5 w-5 text-blue-500 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <label className="text-lg font-medium text-gray-700">Trial Service</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="orderType"
                    value="full"
                    onChange={handleChange}
                    checked={formData.orderType === "full"}
                    className="h-5 w-5 text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <label className="text-lg font-medium text-gray-700">Full Service</label>
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="space-y-6">
            {/* Details */}
            <div>
              <label className="flex items-center space-x-3 text-lg font-medium text-gray-700">
                <FaFileAlt size={20} />
                <span>Details <span className="text-red-500">*</span></span>
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
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
                name="narrativeFile"
                onChange={handleChange}
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
                name="mediaFile"
                value={formData.mediaFile}
                onChange={handleChange}
                className="w-full px-5 py-3 border rounded-lg focus:ring-blue-500 focus:outline-none text-lg"
                placeholder="Paste Google Drive link"
              />
            </div>
          </div>
        </div>

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
