import { useState, useEffect } from 'react';

export const useTime = () => {
  const [time, setTime] = useState({
    horas: String(new Date().getHours()).padStart(2, "0"),
    minutos: String(new Date().getMinutes()).padStart(2, "0")
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
      setTime({
        horas: String(agora.getHours()).padStart(2, "0"),
        minutos: String(agora.getMinutes()).padStart(2, "0")
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};