// import React, { useRef, useEffect, useState } from 'react';
// import { Popup, MapContainer, TileLayer, useMap, LayerGroup, Circle } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { aqMessage } from './../../screens/TextContent/aqMessageInfo';
// import { LatLngExpression, LeafletMouseEvent, circle } from 'leaflet';
// import { Station, StationValues } from '../../screens/AQMap';
// import useDataFetcher, { ApiResponse } from '../../lib/API/DataFetcher';
// import { APIStandard, stdconcentrations } from '../API/APIResponse';

// interface MyMapProps {
//   latitude: number;
//   longitude: number;
//   station: string;
//   AQI: string;
//   allStations: Station[];
//   stationValues: StationValues[];
// }

// const ChangeView: React.FC<{ center: LatLngExpression; zoom: number }> = ({ center, zoom }) => {
//   const map = useMap();
//   useEffect(() => {
//     map.flyTo(center, zoom);
//   }, [center, zoom, map]);
//   return null;
// };

// const MyMap: React.FC<MyMapProps> = ({ latitude, longitude, station, AQI, allStations, stationValues }) => {
//   const coordinates: [number, number] = [longitude, latitude];
//   const [isViewMore, setIsViewMore] = useState(false);
//   const aqMessageValue = aqMessage[AQI];
//   const [stationData, setStationData] = useState<APIStandard | null>(null);
//   const [stationInfo, setStationInfo] = useState<{
//     [key: string]: { highestPoll: string; origin: stdconcentrations; location: string; AQI: string };
//   }>({});
//   const { fetchData, status, data, error }: ApiResponse = useDataFetcher();

//   const validStations = [
//     'Loallme',
//     'NedreLa',
//     'OlavVga',
//     'Omkjori',
//     'Ringsak',
//     'Schanch',
//     'Seljest',
//     'Solheim',
//     'Vahlsko',
//     'Vollapa',
//   ];

//   const handleClick = async (station: string) => {
//     console.log('click', isViewMore);
//     setIsViewMore(!isViewMore);
//     if (isViewMore) {
//       console.log('clicked', station);
//       fetchData(`https://api.met.no/weatherapi/airqualityforecast/0.1/?station=${station}`);
//       setStationData(data);
//       console.log(stationData);
//       return stationData;
//     } else {
//       setStationData(null);
//       console.log(stationData);
//       return null;
//     }
//   };
//   const fetchDataForStations = async () => {
//     const stationDataPromises = allStations.map(async (station) => {
//       const apiUrl =
//         station.eoi.startsWith('NO') || validStations.includes(station.eoi)
//           ? `https://api.met.no/weatherapi/airqualityforecast/0.1/?station=${station.eoi}`
//           : `https://api.waqi.info/feed/${station.eoi}/?token=22f37ad5c0fae31b55ee3304697b74c44a1a4cd0`;

//       try {
//         await fetchData(apiUrl);

//         if (data) {
//           const stationData = {
//             highestPoll: data.dominantPollutant,
//             origin: data.data.time[0].variables.concentrations,
//             location: data.location.name,
//             AQI: data.data.time[0].variables.AQI.text,
//           };
//           return { eoi: station.eoi, data: stationData };
//         }
//       } catch (error) {
//         console.error('Error fetching station info:', error);
//       }
//     });

//     const resolvedStationData = await Promise.all(stationDataPromises);
//     const updatedStationInfo: {
//       [key: string]: { highestPoll: string; origin: stdconcentrations; location: string; AQI: string };
//     } = resolvedStationData.reduce(
//       (acc, curr) => {
//         if (curr) {
//           acc[curr.eoi] = curr.data;
//         }
//         return acc;
//       },
//       {} as { [key: string]: { highestPoll: string; origin: stdconcentrations; location: string; AQI: string } },
//     );

//     setStationInfo(updatedStationInfo);
//   };

//   // useEffect(() => {
//   //   fetchDataForStations();
//   // }, []);

//   return (
//     <MapContainer
//       className="basis-1/3 m-auto z-0 h-[500px] bg-white border-2 border-gray-300 rounded-lg shadow-lg"
//       center={coordinates}
//       zoom={14}
//       scrollWheelZoom={false}
//     >
//       <ChangeView center={coordinates} zoom={12} />
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LayerGroup>
//         <Circle
//           radius={100}
//           center={coordinates}
//           pathOptions={{
//             fillColor: aqMessageValue.color,
//             stroke: false,
//             fillOpacity: 1,
//           }}
//         />
//         <Circle
//           radius={2000}
//           center={coordinates}
//           pathOptions={{
//             fillColor: aqMessageValue.color,
//             stroke: false,
//             fillOpacity: 0.5,
//           }}
//         >
//           <Popup>
//             {station} har en luftkvalitet
//             <br />
//             som tilsier {aqMessageValue.risk.toLowerCase()}.
//           </Popup>
//         </Circle>
//       </LayerGroup>
//       <LayerGroup>
//         {allStations.map((station, index) => (
//           <Circle
//             key={index}
//             center={[station.latitude, station.longitude]}
//             radius={100}
//             pathOptions={{
//               fillColor: aqMessage[stationInfo[station.eoi]?.AQI || 'high']?.color || 'pink',
//               stroke: false,
//               fillOpacity: 1,
//             }}
//             eventHandlers={{ click: (event: LeafletMouseEvent) => handleClick(station.eoi) }}
//           >
//             <Popup>
//               <div>
//                 <strong>{station.eoi},</strong>
//                 <strong> {station.name + ' ' + station.kommune.name}</strong>
//               </div>
//             </Popup>
//           </Circle>
//         ))}
//       </LayerGroup>
//     </MapContainer>
//   );
// };

// export default MyMap;
