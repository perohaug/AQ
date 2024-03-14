// import React, { Component, useEffect, useState } from 'react';
// import { Marker, Popup, MapContainer, TileLayer, useMapEvents, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L, { LatLngExpression } from 'leaflet';

// interface MyMapProps {
//   latitude: number;
//   longitude: number;
//   station: string;
//   AQI: number;
// }

// const MyMap: React.FC<MyMapProps> = ({ latitude, longitude, station, AQI }) => {
//   const coordinates: [number, number] = [longitude, latitude];
//   console.log(coordinates);

//   return (
//     <MapContainer
//       style={{ height: 536 }}
//       className="overflow-auto"
//       center={coordinates}
//       zoom={12}
//       scrollWheelZoom={true}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={coordinates}>
//         <Popup>
//           {station} har en
//           <br />
//           luftkvalitet på {AQI}/5
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default MyMap;

import React, { useEffect } from 'react';
import { Marker, Popup, MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';

interface MyMapProps {
  latitude: number;
  longitude: number;
  station: string;
  AQI: number;
}

const ChangeView: React.FC<{ center: LatLngExpression; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const MyMap: React.FC<MyMapProps> = ({ latitude, longitude, station, AQI }) => {
  const coordinates: [number, number] = [longitude, latitude];

  return (
    <MapContainer
      style={{ height: 536 }}
      className="overflow-auto"
      center={coordinates}
      zoom={12}
      scrollWheelZoom={true}
    >
      <ChangeView center={coordinates} zoom={15} />
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
  );
};

export default MyMap;
