import React, { useEffect } from 'react';
import { Marker, Popup, MapContainer, TileLayer, useMap, LayerGroup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { aqMessage } from './../../screens/TextContent/aqMessageInfo';
import L, { LatLngBoundsExpression, LatLngExpression, map } from 'leaflet';
import { Station } from '../../screens/AQMap';

interface MyMapProps {
  latitude: number;
  longitude: number;
  station: string;
  AQI: string;
  allStations: Station[];
}

const ChangeView: React.FC<{ center: LatLngExpression; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const MyMap: React.FC<MyMapProps> = ({ latitude, longitude, station, AQI, allStations }) => {
  const coordinates: [number, number] = [longitude, latitude];
  const aqMessageValue = aqMessage[AQI];

  return (
    <MapContainer
      // style={{ height: 500 }}
      className="basis-1/3 m-auto z-0 h-[500px] bg-white border-2 border-gray-300 rounded-lg shadow-lg"
      center={coordinates}
      zoom={14}
      scrollWheelZoom={false}
    >
      <ChangeView center={coordinates} zoom={12} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        <Circle
          radius={100}
          center={coordinates}
          pathOptions={{
            fillColor: aqMessageValue.color,
            stroke: false,
            fillOpacity: 1,
          }}
        />
        <Circle
          radius={2000}
          center={coordinates}
          pathOptions={{
            fillColor: aqMessageValue.color,
            stroke: false,
            fillOpacity: 0.5,
          }}
        >
          <Popup>
            {station} har en luftkvalitet
            <br />
            som tilsier {aqMessageValue.risk.toLowerCase()}.
          </Popup>
        </Circle>
      </LayerGroup>
    </MapContainer>
  );
};

export default MyMap;
