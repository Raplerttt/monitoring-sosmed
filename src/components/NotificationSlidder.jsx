import React from 'react';
import '../style/slider.css'

const NotificationSlider = ({ toggleSlider, isOpen }) => {
  return (
    <div
      className={`fixed top-[1px] right-0 w-80 h-[calc(120vh-72px)] bg-white shadow-lg z-50 transform smooth-slider ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-red-400 text-white">
        <h2 className="text-lg font-bold">Notifications</h2>
        <button 
          onClick={toggleSlider}
          className="px-2 py-1 text-sm font-semibold bg-red-900 rounded hover:bg-red-300"
        >
          Close
        </button>
      </div>

      {/* Notifications */}
      <div className="p-4 space-y-3 overflow-y-auto">
        <div className="flex items-start space-x-4 bg-gray-100 rounded-lg p-3">
          <div className="h-8 w-8 rounded-full bg-blue-300 flex items-center justify-center text-blue-700 font-bold">
            N
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">New message from John</p>
            <p className="text-xs text-gray-500">2 minutes ago</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 bg-gray-100 rounded-lg p-3">
          <div className="h-8 w-8 rounded-full bg-green-300 flex items-center justify-center text-green-700 font-bold">
            S
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">System update completed</p>
            <p className="text-xs text-gray-500">1 hour ago</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 bg-gray-100 rounded-lg p-3">
          <div className="h-8 w-8 rounded-full bg-red-300 flex items-center justify-center text-red-700 font-bold">
            W
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Warning: Low disk space</p>
            <p className="text-xs text-gray-500">Yesterday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSlider;
