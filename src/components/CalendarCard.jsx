import React from 'react';

const CalendarCard = () => {
  return (
    <div className="shadow-lg rounded-2xl bg-white">
      {/* Header Calendar */}
      <div
        className="rounded-t-2xl py-4 px-4 flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(109.6deg, rgba(217,67,67,1) 11.2%, rgba(242,106,75,1) 100.6%)',
        }}
      >
        {/* Icon Button */}
        <button
          type="button"
          className="border-0 bg-opacity-50 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i className="far fa-calendar-alt text-white"></i>
        </button>

        {/* Title */}
        <h5 className="font-semibold text-white ml-3">Calendar</h5>

        {/* Calendar Image */}
        <div className="ml-auto">
          <img
            src="https://centurion.id/order/assets/images/calendar-2.png"
            alt="Calendar Icon"
            style={{
              height: '50px',   // Membatasi tinggi gambar
              width: 'auto',    // Menjaga proporsi gambar tetap terjaga
            }}
            className="p-1"
          />
        </div>
      </div>

      {/* Calendar Content */}
      <div className="p-4">
        {/* Placeholder Calendar */}
        <div
          id="calendar"
          className="bg-gray-200 h-48 rounded-lg flex items-center justify-center"
        >
          <span className="text-gray-500">Calendar Placeholder</span>
        </div>

        {/* Event List */}
        <div id="event-container" className="mt-4">
          <p className="font-bold mb-2 text-gray-600">Upcoming Events</p>
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {/* Event Items */}
            {[...Array(5)].map((_, index) => (
              <li
                key={index}
                className="bg-gray-50 p-2 rounded-lg shadow-sm flex items-center"
              >
                <div className="text-gray-700 text-sm font-semibold flex-1">
                  <div className="flex items-center">
                    <span className="bg-red-600 h-2 w-2 rounded-full mr-2"></span>
                    <p className="truncate">Event {index + 1} - Description</p>
                  </div>
                  <p className="text-gray-400 text-xs">10:00 AM - 11:00 AM</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
