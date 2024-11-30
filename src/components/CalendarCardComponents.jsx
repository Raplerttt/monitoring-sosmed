import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, startOfWeek, getDay, isSameDay, isValid, parseISO } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import axios from '../utils/axios'; // Ensure path is correct

// Create localizer with date-fns
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
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders from the server
  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true); // Set loading to true initially
      try {
        const token = sessionStorage.getItem('token'); // Get token from sessionStorage
        const response = await axios.get('order/get', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Fetched Orders:', response.data); // Check the structure of the response

        const eventsWithValidDates = response.data.map((event) => {
          const start = event.start ? parseISO(event.start) : null;
          const end = event.end ? parseISO(event.end) : null;

          if (!start || !isValid(start)) {
            console.warn(`No valid start date for event ${event.id}:`, event.start);
            return { ...event, start: new Date() }; // Fallback to current date if invalid
          }

          if (!end || !isValid(end)) {
            console.warn(`No valid end date for event ${event.id}:`, event.end);
            return { ...event, end: start }; // Default end to start date if invalid
          }

          return { ...event, start, end };
        });

        setEvents(eventsWithValidDates); // Set the events data into state
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to fetch orders');
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchOrders(); // Call the fetchOrders function
  }, []);

  // Event prop getter to style events in the calendar
  const eventPropGetter = (event) => ({
    style: {
      backgroundColor: '#ff4747', // Red color for events
      borderRadius: '5px',
      color: 'white',
    },
  });

  // Custom toolbar for navigation buttons
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

  // Handle date click to filter events for the selected date
  const handleDateClick = (date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date);
    
    const filteredEvents = events.filter((event) => {
      return isSameDay(event.start, date);
    });
    
    setSelectedEvents(filteredEvents); // Set events for the selected date
  };

  // Loading state
  if (isLoading) {
    return <p>Loading orders...</p>;
  }

  // Error handling state
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="shadow-lg rounded-2xl bg-white">
      {/* Header for Calendar */}
      <div
        className="rounded-t-2xl py-4 px-4 flex items-center"
        style={{
          backgroundImage: 'linear-gradient(109.6deg, rgba(217,67,67,1) 11.2%, rgba(242,106,75,1) 100.6%)',
        }}
      >
        <button
          type="button"
          className="border-0 bg-opacity-50 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i className="far fa-calendar-alt text-white"></i>
        </button>
        <h5 className="font-semibold text-white ml-3">Calendar</h5>
        <div className="ml-auto">
          <img
            src="https://centurion.id/order/assets/images/calendar-2.png"
            alt="Calendar Icon"
            style={{
              height: '50px',
              width: 'auto',
            }}
            className="p-1"
          />
        </div>
      </div>

      {/* Calendar Content */}
      <div className="p-4">
        <div className="bg-gray-200 rounded-lg">
          <Calendar
            localizer={localizer}
            events={selectedDate ? selectedEvents : events} // Use selected events if a date is chosen
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={eventPropGetter}
            style={{ height: 350 }}
            components={{
              toolbar: CustomToolbar,
            }}
            onSelectSlot={({ start }) => handleDateClick(start)} // Handle date click
            views={['month']} // Display the calendar in 'month' view
          />
        </div>

        {/* Display list of selected events */}
        <div id="event-container" className="mt-4">
          <p className="font-bold mb-2 text-gray-600">
            {selectedDate
              ? `Events for ${format(selectedDate, 'yyyy-MM-dd')}`
              : 'All Upcoming Events'}
          </p>
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {selectedDate ? (
              selectedEvents.length === 0 ? (
                <p>No events available for the selected date.</p>
              ) : (
                selectedEvents.map((event) => (
                  <li
                    key={event.id}
                    className="bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100"
                  >
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <p className="text-gray-500">
                      {event.start ? format(event.start, 'yyyy-MM-dd') : 'Invalid Date'}
                    </p>

                    {/* Show event details */}
                    <div className="text-sm text-gray-600 mt-2">
                      <p><strong>Service:</strong> {event.service}</p>
                      <p><strong>Order Type:</strong> {event.orderType}</p>
                      <p><strong>Details:</strong> {event.details}</p>

                      {/* Narrative File Link */}
                      {event.narrativeFile && (
                        <p>
                          <strong>Narrative File:</strong>{' '}
                          <a
                            href={event.narrativeFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                          >
                            View Narrative
                          </a>
                        </p>
                      )}

                      {/* Media File Link */}
                      {event.mediaFile && (
                        <p>
                          <strong>Media File:</strong>{' '}
                          <a
                            href={event.mediaFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                          >
                            View Media
                          </a>
                        </p>
                      )}
                    </div>
                  </li>
                ))
              )
            ) : (
              events.map((event) => (
                <li
                  key={event.id}
                  className="bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100"
                >
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className="text-gray-500">
                    {event.start ? format(event.start, 'yyyy-MM-dd') : 'Invalid Date'}
                  </p>

                  {/* Show event details */}
                  <div className="text-sm text-gray-600 mt-2">
                    <p><strong>Service:</strong> {event.service}</p>
                    <p><strong>Order Type:</strong> {event.orderType}</p>
                    <p><strong>Details:</strong> {event.details}</p>

                    {/* Narrative File Link */}
                    {event.narrativeFile && (
                      <p>
                        <strong>Narrative File:</strong>{' '}
                        <a
                          href={event.narrativeFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500"
                        >
                          View Narrative
                        </a>
                      </p>
                    )}

                    {/* Media File Link */}
                    {event.mediaFile && (
                      <p>
                        <strong>Media File:</strong>{' '}
                        <a
                          href={event.mediaFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500"
                        >
                          View Media
                        </a>
                      </p>
                    )}
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
