import React from "react";

export const TimeCard = ({ horas, minutos }) => (
  <div className="bg-yellow-400 w-48 2xl:h-24 xl:h-20 rounded-lg select-none flex items-center justify-center font-bold gap-4">
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center mt-2">
        <span className="text-xl">{horas}</span>
        <p className="text-xs uppercase font-light">Horas</p>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex flex-col items-center mt-2">
        <span className="text-xl">{minutos}</span>
        <p className="text-xs uppercase font-light">Minutos</p>
      </div>
    </div>
  </div>
);
