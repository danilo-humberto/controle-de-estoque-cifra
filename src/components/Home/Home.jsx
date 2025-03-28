import React, { useEffect, useState } from "react";
import "./Home.css";
import Cards from "../../assets/cards/Cards";
import { Package, Users, Voicemail } from "lucide-react";
import Statistic from "../../assets/statistic/Statistic";
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
    <div className="container-home">
      <div className="container-home-content">
        <div className="container-home-content-cards">
          <div>
            <Link to="/funcionarios">
              <Cards
                span="Funcionários"
                icon={<Users size={40} />}
                color="var(--sky-700)"
                hoverColor="var(--sky-800)"
                onClick={() => navigate("/funcionarios")}
              />
            </Link>
            <Link to="/equipamentos">
              <Cards
                span="Equipamentos"
                icon={<Package size={40} />}
                color="var(--emerald-700)"
                hoverColor="var(--emerald-800)"
                route="/equipamentos"
              />
            </Link>
            <Link to="/linhas">
              <Cards
                span="Linhas"
                icon={<Voicemail size={40} />}
                color="var(--pink-700)"
                hoverColor="var(--pink-800)"
                route="/linhas"
              />
            </Link>
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
          <div>
            <Statistic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
