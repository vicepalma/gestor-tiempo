import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, setHours, setMinutes, setSeconds } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import esLocale from "date-fns/locale/es";
import BackToDashboardButton from "./BackToDashboardButton";

const locales = {
    "es-CL": esLocale,
  };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

type Event = {
  title: string;
  start: Date;
  end: Date;
};

const CalendarView: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Estudiar",
      start: new Date(2024, 10, 18, 9, 0), // 18 Nov 2024, 9:00 AM
      end: new Date(2024, 10, 18, 10, 30), // 18 Nov 2024, 10:30 AM
    },
  ]);

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const title = prompt("Ingrese el nombre de la tarea:");
    if (title) {
      setEvents((prev) => [...prev, { title, start, end }]);
    }
  };

  // Configurar horario visible
  const minTime = setSeconds(setMinutes(setHours(new Date(), 8), 0), 0); // 8:00 AM
  const maxTime = setSeconds(setMinutes(setHours(new Date(), 20), 0), 0); // 8:00 PM

  return (
    <div >
      <h1 className="text-2xl font-bold mb-4">Gestor de Horarios</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        selectable
        onSelectSlot={handleSelectSlot}
        culture="es-CL"
        min={minTime} // Inicio del horario: 8:00 AM
        max={maxTime} // Fin del horario: 8:00 PM
      />
       <BackToDashboardButton />  
    </div>
  );
};

export default CalendarView;
