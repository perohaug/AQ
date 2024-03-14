import React, { Component, useEffect, useState } from 'react';
import { Marker, Popup, MapContainer, TileLayer, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';

interface MyMapProps {
  latitude: number;
  longitude: number;
  station: string;
  AQI: number;
}

const MyMap: React.FC<MyMapProps> = ({ latitude, longitude, station, AQI }) => {
  // Use the provided latitude and longitude as the center coordinates
  // const map = useMap();

  const coordinates: [number, number] = [longitude, latitude];
  console.log(coordinates);

  // useEffect(() => {
  //   if (map) {
  //     // Update markers, popups, or other map elements here
  //     map.setView(coordinates, 13);
  //     // ...other updates as needed
  //   }
  // }, [coordinates, map]);

  // Re-center the map using a Leaflet method like flyTo or setView
  return (
    <div id="map" className=" w-full">
      <MapContainer
        style={{ height: 536 }}
        className="overflow-auto"
        center={coordinates}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            {station} har en
            <br />
            luftkvalitet på {AQI}/5
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
