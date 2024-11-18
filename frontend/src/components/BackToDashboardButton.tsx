import React from "react";
import { useNavigate } from "react-router-dom";

const BackToDashboardButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Volver al Dashboard
    </button>
  );
};

export default BackToDashboardButton;
