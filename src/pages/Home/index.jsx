import React from "react";
import { Package, Users, Voicemail } from "lucide-react";
import { useTime } from "./hooks/useTime";
import { NavCard } from "./components/HomeCards/NavCard";
import { TimeCard } from "./components/HomeCards/TimeCard";
import Map from "./components/HomeMap/index";
import Statistic from "./components/HomeStats/index";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const { horas, minutos } = useTime();
  const isSmallScreen = useMediaQuery({ maxWidth: 1550 });

  return (
    <div className="w-4/5 h-full px-4 pb-4 mt-4 mx-auto overflow-hidden">
      <div className="w-full h-full">
        <div className="w-full flex justify-between">
          <div className="flex gap-4">
            <NavCard
              span="Funcionários"
              icon={<Users size={40} />}
              color="bg-sky-700 hover:bg-sky-800"
              to="/funcionarios"
            />
            <NavCard
              span="Equipamentos"
              icon={<Package size={40} />}
              color="bg-emerald-700 hover:bg-emerald-800"
              to="/equipamentos"
            />
            <NavCard
              span="Linhas"
              icon={<Voicemail size={40} />}
              color="bg-pink-700 hover:bg-pink-800"
              to="/linhas"
            />
          </div>
          <TimeCard horas={horas} minutos={minutos} />
        </div>

        <div className="mt-5 flex gap-4 h-5/6">
          <div className={`bg-[var(--gray-700)] flex-[2] ${isSmallScreen ? "h-[95%]" : "h-full"} rounded-lg p-4`}>
            <Map />
          </div>
          <div className={`bg-[var(--gray-700)] flex-1 ${isSmallScreen ? "h-[95%]" : "h-full"} rounded-lg p-4`}>
            <Statistic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
