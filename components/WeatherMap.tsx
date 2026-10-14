"use client";

import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapResizer() {
  const map = useMap();
  useEffect(() => {
    const timeout = window.setTimeout(() => map.invalidateSize(), 150);
    return () => window.clearTimeout(timeout);
  }, [map]);
  return null;
}

export default function WeatherMap() {
  const center: [number, number] = [-7.424, 109.239];
  return (
    <div className="map-wrap">
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="leaflet-map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapResizer />
        <CircleMarker center={center} radius={9} pathOptions={{ color: "#ffffff", weight: 3, fillColor: "#16845b", fillOpacity: 1 }}>
          <Popup><b>METEORA · Titik A</b><br />Koordinat contoh Purwokerto<br />-7.4240, 109.2390</Popup>
        </CircleMarker>
        <CircleMarker center={[-7.438, 109.252]} radius={7} pathOptions={{ color: "#ffffff", weight: 2, fillColor: "#3297e8", fillOpacity: 1 }}>
          <Popup><b>Titik B · Kebun Pengamatan</b><br />Lokasi contoh, ubah sesuai lokasi nyata.</Popup>
        </CircleMarker>
      </MapContainer>
      <div className="map-legend"><span><i className="legend-pin-a" /> Titik A · Stasiun</span><span><i className="legend-pin-b" /> Titik B · Kebun</span></div>
    </div>
  );
}
