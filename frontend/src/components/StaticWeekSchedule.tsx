import React, { useState } from "react";
import BackToDashboardButton from "./BackToDashboardButton";

type Event = {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
  title: string;
};

const StaticWeekSchedule: React.FC = () => {
  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const [events, setEvents] = useState<Event[]>([]);

  const handleAddEvent = (day: string) => {
    const title = prompt(`Ingrese el título del evento para ${day}:`);
    const startTime = prompt("Ingrese la hora de inicio (HH:mm):");
    const endTime = prompt("Ingrese la hora de término (HH:mm):");

    if (title && startTime && endTime) {
      const newEvent: Event = {
        id: events.length + 1,
        day,
        startTime,
        endTime,
        title,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Horario Semanal Genérico</h1>
      <div className="flex space-x-4">
      {daysOfWeek.map((day) => (
          <div key={day} className="flex-1 w-32 h-24 bg-gray-300 rounded-xl">
            <h2 className="font-bold text-lg">{day}</h2>
            <button
              className="mt-2 p-1 bg-blue-500 text-white rounded"
              onClick={() => handleAddEvent(day)}
            >
              Agregar Evento
            </button>
            <ul className="mt-4">
              {events
                .filter((event) => event.day === day)
                .map((event) => (
                  <li key={event.id} className="bg-gray-100 p-2 mb-2 rounded shadow">
                    <p className="font-bold">{event.title}</p>
                    <p>
                      {event.startTime} - {event.endTime}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <BackToDashboardButton />
    </div>
  );
};

export default StaticWeekSchedule;
