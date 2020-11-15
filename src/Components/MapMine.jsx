import React from "react";
// import { Map, TileLayer } from "react-leaflet";
import {MapContainer, TileLayer} from 'react-leaflet'

const MapMine = () => {
  return (
    <MapContainer center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default React.memo(MapMine);
