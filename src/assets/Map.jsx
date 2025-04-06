import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import estadosBrasil from "../data/estadosBrasil.json";

const Map = () => {
  const estados = ["PE", "SE", "AL", "RN"];

  const estiloEstado = (feature) => {
    return {
      fillColor: estados.includes(feature.id) ? "blue" : "black",
      weight: 0,
      opacity: 0,
      fillOpacity: 0.3,
    };
  };

  return (
    <div className="w-full h-full text-[var(--gray-300)]">
      <h2 className="text-center text-lg font-semibold">
        Localização dos Equipamentos
      </h2>
      <div className="w-full h-[90%] mt-6">
        <MapContainer
          zoom={6}
          center={[-8, -40]}
          className="w-full h-full rounded-md"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution="&copy; OpenStreetMap contributors & CartoDB"
            noWrap={true}
            tileSize={256}
          />
          <GeoJSON data={estadosBrasil} style={estiloEstado}/>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
