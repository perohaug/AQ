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
        {/* {allStations.map((station) => (
          <Circle
            center={[station.latitude, station.longitude]}
            key={station.eoi}
            radius={2000}
            pathOptions={{
              stroke: false,
              fillColor: aqMessageValue.color,
              fillOpacity: 0.2,
            }}
          >
            Mulig å lage en clickable marker?
            <Circle
              radius={90}
              center={[station.latitude, station.longitude]}
              key={station.eoi}
              pathOptions={{
                fillColor: aqMessageValue.color,
                // color: aqMessageValue.color,
                stroke: false,
                fillOpacity: 1,
              }}
            />
            <Popup>
              {station.name} har en luftkvalitet
              <br />
              som tilsier {aqMessage[AQI].risk.toLowerCase()}.
            </Popup>
          </Circle>
        ))} */}

        <Circle
          radius={100}
          center={coordinates}
          pathOptions={{
            fillColor: aqMessageValue.color,
            // color: aqMessageValue.color,
            stroke: false,
            fillOpacity: 1,
          }}
        />
        <Circle
          radius={2000}
          center={coordinates}
          pathOptions={{
            fillColor: aqMessageValue.color,
            // color: aqMessageValue.color,
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

{
  /* <Circle
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
          /> */
}
