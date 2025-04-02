import React, { useEffect, useState } from "react";
import Cards from "../assets/Cards";
import { Package, Users, Voicemail } from "lucide-react";
import Statistic from "../assets/Statistic";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [horas, setHoras] = useState(
    String(new Date().getHours()).padStart(2, "0")
  );
  const [minutos, setMinutos] = useState(
    String(new Date().getMinutes()).padStart(2, "0")
  );
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
      setHoras(String(agora.getHours()).padStart(2, "0"));
      setMinutos(String(agora.getMinutes()).padStart(2, "0"));
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="w-4/5 h-full px-4 pb-4 mt-4 mx-auto overflow-hidden">
      <div className="w-full h-full">
        <div className="w-full flex justify-between mt-4">
          <div className="flex gap-4">
            <Link to="/funcionarios">
              <Cards
                span="Funcionários"
                icon={<Users size={40} />}
                color="bg-sky-700 hover:bg-sky-800"
                onClick={() => navigate("/funcionarios")}
              />
            </Link>
            <Link to="/equipamentos">
              <Cards
                span="Equipamentos"
                icon={<Package size={40} />}
                color="bg-emerald-700 hover:bg-emerald-800"
                route="/equipamentos"
              />
            </Link>
            <Link to="/linhas">
              <Cards
                span="Linhas"
                icon={<Voicemail size={40} />}
                color="bg-pink-700 hover:bg-pink-800"
                route="/linhas"
              />
            </Link>
          </div>
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
        </div>

        <div className="mt-5 flex gap-4 h-5/6">
          <div className="bg-[var(--gray-700)] flex-[2] xl:h-[90%] 2xl:h-[96%] rounded-lg">
            teste1
          </div>
          <div className="bg-[var(--gray-700)] flex-1 xl:h-[90%] 2xl:h-[96%] rounded-lg">
            <Statistic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
