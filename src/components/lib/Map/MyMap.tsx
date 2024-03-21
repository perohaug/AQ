import React, { useEffect } from 'react';
import { Marker, Popup, MapContainer, TileLayer, useMap, LayerGroup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { aqMessage } from './../../screens/TextContent/aqMessageInfo';
import L, { LatLngExpression } from 'leaflet';

interface MyMapProps {
  latitude: number;
  longitude: number;
  station: string;
  AQI: string;
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
  const aqMessageValue = aqMessage[AQI];

  return (
    <MapContainer
      style={{ height: 500, zIndex: 1, width: '70%' }}
      className="overflow-auto m-auto "
      center={coordinates}
      zoom={14}
      scrollWheelZoom={false}
    >
      <ChangeView center={coordinates} zoom={13} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        {/* <Circle
            radius={1000}
            center={coordinates}
            pathOptions={{
              // fillColor: `linear-gradient(${aqMessageValue.color}, #ffffff);`,
              fillColor: aqMessageValue.color,
              // color: aqMessageValue.color,
              stroke: false,
              fillOpacity: 0.3,
            }}
          />
          <Circle
            radius={1200}
            center={coordinates}
            pathOptions={{
              // fillColor: `linear-gradient(${aqMessageValue.color}, #ffffff);`,
              fillColor: aqMessageValue.color,
              // color: aqMessageValue.color,
              stroke: false,
              fillOpacity: 0.3,
            }}
          />
          <Circle
            radius={500}
            center={coordinates}
            pathOptions={{
              // fillColor: `linear-gradient(${aqMessageValue.color}, #ffffff);`,
              fillColor: aqMessageValue.color,
              color: aqMessageValue.color,
              stroke: false,
              fillOpacity: 0.6,
            }}
          />
          <Circle
            radius={1500}
            center={coordinates}
            pathOptions={{
              // fillColor: `linear-gradient(${aqMessageValue.color}, #ffffff);`,
              fillColor: aqMessageValue.color,
              // color: aqMessageValue.color,
              stroke: false,
              fillOpacity: 0.3,
            }}
          /> */}
        <Circle
          radius={100}
          center={coordinates}
          pathOptions={{
            // fillColor: `linear-gradient(${aqMessageValue.color}, #ffffff);`,
            fillColor: aqMessageValue.color,
            // color: aqMessageValue.color,
            stroke: false,
            // fillOpacity: ,
            fillOpacity: 1,
          }}
        />
        <Circle
          radius={2000}
          center={coordinates}
          pathOptions={{
            // fillColor: `linear-gradient(${aqMessageValue.color}, #ffffff);`,
            fillColor: aqMessageValue.color,
            // color: aqMessageValue.color,
            stroke: false,
            // fillOpacity: ,
            fillOpacity: 0.5,
          }}
        >
          <Popup>
            {station} har en luftkvalitet
            <br />
            som tilsier {aqMessageValue.risk.toLowerCase()}.
          </Popup>
        </Circle>
        {/* <Marker opacity={0.6} position={coordinates}>
            <Popup>
              {station} har en luftkvalitet
              <br />
              som tilsier {aqMessageValue.risk.toLowerCase()}.
            </Popup>
          </Marker> */}
      </LayerGroup>
    </MapContainer>
  );
};

export default MyMap;
