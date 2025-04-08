import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import estadosBrasil from "@/constants/estadosBrasil.json";
import {ESTADOS_SELECIONADOS, MAP_CENTER, MAP_ZOOM} from "./utils/constants"
import {estadoStyle} from "./utils/mapStyles"

const Map = () => {

  return (
    <div className="w-full h-full text-[var(--gray-300)]">
      <h2 className="text-center text-lg font-semibold">
        Localização dos Equipamentos
      </h2>
      <div className="w-full h-[90%] mt-6">
        <MapContainer
          zoom={MAP_ZOOM}
          center={MAP_CENTER}
          className="w-full h-full rounded-md"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution="&copy; OpenStreetMap contributors & CartoDB"
            noWrap={true}
            tileSize={256}
          />
          <GeoJSON 
            data={estadosBrasil}
            style={(feature) => estadoStyle(feature, ESTADOS_SELECIONADOS)}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
