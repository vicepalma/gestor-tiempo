import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, addDays, setHours, setMinutes, setSeconds } from "date-fns";
import esLocale from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BackToDashboardButton from "./BackToDashboardButton";

// Configuración de locales
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

// Tipo para los eventos
type Event = {
  title: string;
  start: Date;
  end: Date;
};

const StaticWeekCalendar: React.FC = () => {
  // Fijar la semana estática (del lunes al domingo)
  const staticWeekStart = new Date(2024, 0, 1); // Lunes 1 de enero de 2024
  const staticWeekEnd = addDays(staticWeekStart, 6); // Domingo de la misma semana

  // Configurar horario visible
  const minTime = setSeconds(setMinutes(setHours(new Date(), 8), 0), 0); // 8:00 AM
  const maxTime = setSeconds(setMinutes(setHours(new Date(), 20), 0), 0); // 8:00 PM

  const [events, setEvents] = useState<Event[]>([
    {
      title: "Estudiar",
      start: setHours(setMinutes(staticWeekStart, 0), 9), // Lunes 9:00 AM
      end: setHours(setMinutes(staticWeekStart, 30), 10), // Lunes 10:30 AM
    },
    {
      title: "Gimnasio",
      start: setHours(setMinutes(addDays(staticWeekStart, 1), 0), 14), // Martes 2:00 PM
      end: setHours(setMinutes(addDays(staticWeekStart, 1), 0), 15), // Martes 3:00 PM
    },
  ]);

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const title = prompt("Ingrese el nombre del evento:");
    if (title) {
      setEvents((prev) => [...prev, { title, start, end }]);
    }
  };

  // Personalización del Toolbar (Título General)
  const CustomToolbar = () => {
    return null; // Elimina el título del rango de fechas
  };

  // Personalización del Encabezado de Días
  const CustomDayHeader = ({ date }: { date: Date }) => {
    const dayNameMap: { [key: string]: string } = {
      Sunday: "Domingo",
      Monday: "Lunes",
      Tuesday: "Martes",
      Wednesday: "Miércoles",
      Thursday: "Jueves",
      Friday: "Viernes",
      Saturday: "Sábado",
    };

    const dayName = dayNameMap[format(date, "EEEE")] || format(date, "EEEE");
    return <div>{dayName}</div>;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Semana Estática</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        views={["week"]}
        selectable
        onSelectSlot={handleSelectSlot}
        culture="es-CL"
        components={{
          toolbar: CustomToolbar, // Eliminar título del rango de fechas
          week: { header: CustomDayHeader }, // Personalizar encabezado de días en la vista semanal
        }}
        min={minTime} // Inicio del horario: 8:00 AM
        max={maxTime} // Fin del horario: 8:00 PM
        date={staticWeekStart} // Fija el rango inicial de la semana
      />
      <BackToDashboardButton />
    </div>
  );
};

export default StaticWeekCalendar;
