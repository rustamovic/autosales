import React from "react";
// import { Map, TileLayer } from "react-leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

const MapMine = () => {
  return (
    <div style={{ height: "800px", width: "100%", }}>
      <MapContainer center={[45.4, -75.7]} zoom={12} style={{height: '100%', width: '100%'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default React.memo(MapMine);
