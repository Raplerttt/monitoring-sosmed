import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, startOfWeek, getDay, isSameDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import ikon panah

// Membuat lokalizer dengan date-fns
const locales = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse: (dateString) => new Date(dateString),
  startOfWeek,
  getDay,
  locales,
});

const CalendarCard = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    // Menambahkan event secara dinamis
    const upcomingEvents = [...Array(5)].map((_, index) => ({
      title: `Event ${index + 1} - Description`,
      start: new Date(2024, 10, 7 + index, 0, 0), // Set hanya tanggal, jam diatur ke 00:00
      end: new Date(2024, 10, 7 + index, 23, 59), // Set end time di 23:59 untuk seluruh hari
    }));

    setEvents(upcomingEvents);
  }, []);

  // Fungsi untuk menandai tanggal yang memiliki acara dengan titik merah
  const eventPropGetter = (event) => ({
    style: {
      backgroundColor: '#ff4747', // Warna merah untuk event
    },
  });

  // Custom toolbar untuk mengganti tombol navigasi
  const CustomToolbar = ({ label, onNavigate }) => (
    <div className="flex justify-between items-center py-2 px-4 bg-gradient-to-r rounded-t-lg text-black">
      <button
        onClick={() => onNavigate('PREV')}
        className="flex items-center justify-center bg-transparent text-black p-2 rounded-full"
      >
        <FaArrowLeft />
      </button>
      <span className="font-semibold text-lg">{label}</span>
      <button
        onClick={() => onNavigate('NEXT')}
        className="flex items-center justify-center bg-transparent text-black p-2 rounded-full"
      >
        <FaArrowRight />
      </button>
    </div>
  );

  // Fungsi untuk menangani klik pada tanggal
  const handleDateClick = (date) => {
    setSelectedDate(date); // Menyimpan tanggal yang dipilih
    // Filter event berdasarkan tanggal yang dipilih
    const filteredEvents = events.filter((event) => isSameDay(event.start, date));
    console.log("Filtered Events:", filteredEvents); // Cek filtered events
    setSelectedEvents(filteredEvents); // Menyimpan event yang difilter
  };

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
              height: '50px', // Membatasi tinggi gambar
              width: 'auto',  // Menjaga proporsi gambar tetap terjaga
            }}
            className="p-1"
          />
        </div>
      </div>

      {/* Calendar Content */}
      <div className="p-4">
        {/* Calendar Component */}
        <div className="bg-gray-200 rounded-lg">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={eventPropGetter} // Menambahkan titik merah
            style={{ height: 350 }}
            components={{
              toolbar: CustomToolbar, // Menggunakan toolbar kustom dengan tombol panah
            }}
            onSelectSlot={({ start }) => {
              console.log("Selected Date:", start); // Cek tanggal yang dipilih
              handleDateClick(start); // Panggil fungsi untuk menangani klik tanggal
            }} 
            views={['month']} // Hanya tampilan bulanan tanpa waktu
          />
        </div>

        {/* Event List */}
        <div id="event-container" className="mt-4">
          <p className="font-bold mb-2 text-gray-600">
            {selectedDate
              ? `Events for ${format(selectedDate, 'MMMM dd, yyyy')}`
              : 'Upcoming Events'}
          </p>
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {/* Event Items */}
            {selectedEvents.length > 0 ? (
              selectedEvents.map((event, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-2 rounded-lg shadow-sm flex items-center"
                >
                  <div className="text-gray-700 text-sm font-semibold flex-1">
                    <div className="flex items-center">
                      <span className="bg-red-600 h-2 w-2 rounded-full mr-2"></span>
                      <p className="truncate">{event.title}</p>
                    </div>
                    {/* Menampilkan hanya tanggal */}
                    <p className="text-gray-400 text-xs">
                      {format(event.start, 'MMMM dd, yyyy')}
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No events for this date.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
