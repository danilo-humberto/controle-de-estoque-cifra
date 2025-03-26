import React, { useEffect, useState } from "react";
import "./Home.css";
import Cards from "../../assets/cards/Cards";
import { Package, Users, Voicemail } from "lucide-react";
import Statistic from "../../assets/statistic/Statistic";

const Home = () => {
  const currentHour = new Date().getHours();
  const [horas, setHoras] = useState(new Date().getHours());
  const [minutos, setMinutos] = useState(
    String(new Date().getMinutes()).padStart(2, "0")
  );
  let greeting = "";

  if (currentHour >= 6 && currentHour < 12) {
    greeting = "Bom dia";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Boa tarde";
  } else {
    greeting = "Boa noite";
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
      setHoras(agora.getHours());
      setMinutos(String(agora.getMinutes()).padStart(2, "0"));
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="container-home">
      <div className="container-home-content">
        <div>
          <div className="container-home-content-header">
            <div>
              <img
                src="https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg"
                alt="usuario"
              />
            </div>
            <p>{greeting}, Eduardo Assunção</p>
          </div>
        </div>
        <div className="container-home-content-cards">
          <div>
            <Cards
              span="Funcionários"
              icon={<Users size={40} />}
              color="var(--sky-700)"
              hoverColor="var(--sky-800)"
            />
            <Cards
              span="Equipamentos"
              icon={<Package size={40} />}
              color="var(--emerald-700)"
              hoverColor="var(--emerald-800)"
            />
            <Cards
              span="Linhas"
              icon={<Voicemail size={40} />}
              color="var(--pink-700)"
              hoverColor="var(--pink-800)"
            />
          </div>
          <div className="container-home-content-cards-hours">
            <div>
              <div>
                <span>{horas}</span>
                <p>Horas</p>
              </div>
              <span>:</span>
              <div>
                <span>{minutos}</span>
                <p>Minutos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-home-content-dash">
            <div>teste1</div>
            <div><Statistic /></div>
          </div>
      </div>
    </div>
  );
};

export default Home;
