import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CalendarView from "./components/CalendarView";
import StaticWeekCalendar from "./components/StaticWeekCalendar";
import StaticWeekSchedule from "./components/StaticWeekSchedule";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendarview" element={<CalendarView />} />
        <Route path="/staticweekcalendar" element={<StaticWeekCalendar />} />
        <Route path="/staticweekschedule" element={<StaticWeekSchedule />} />
      </Routes>
    </Router>
  );
};

export default App;
