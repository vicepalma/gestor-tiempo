import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestor de Tiempo</h1>
      <nav>
        <ul className="list-disc ml-6">
          <li>
            <Link to="/calendarview" className="text-blue-500 underline">
              Ir a CalendarView
            </Link>
          </li>
          <li>
            <Link to="/staticweekcalendar" className="text-blue-500 underline">
              Ir a StaticWeekCalendar
            </Link>
          </li>
          <li>
            <Link to="/staticweekschedule" className="text-blue-500 underline">
              Ir a StaticWeekSchedule
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
