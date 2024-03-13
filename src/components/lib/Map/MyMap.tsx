// // import React, { useEffect, useState } from 'react';
// // import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
// // import { Map } from 'leaflet';
// // import HeatmapLayer from './HeatmapLayer'; // Import your custom component

// // type LeafletMap = Map; // Define a custom type alias for clarity

// // const MyMap: React.FC = () => {
// //   const [mapRef, setMapRef] = useState<LeafletMap | null>(null);

// //   // Your data with latitude and longitude (replace with your actual data)
// //   const heatmapData = [
// //     [50.5, 30.5, 0.2], // lat, lng, intensity
// //     [50.6, 30.4, 0.5],
// //     // ... more data points
// //   ];

// //   useEffect(() => {
// //     if (mapRef) {
// //       const heatmapLayer = HeatmapLayer({
// //         latlngs: heatmapData,
// //         radius: 25, // Set the radius to 25 km
// //         max: 1, // Adjust the maximum intensity value as needed
// //       });
// //       // new HeatmapLayer({
// //       //   points: heatmapData,
// //       //   radius: 20, // Set the radius to 20 km
// //       //   max: 1, // Adjust the maximum intensity value as needed
// //       //   // Define your custom color palette here (e.g., gradient colors)
// //       //   gradient: {
// //       //     0.4: 'blue',
// //       //     0.6: 'green',
// //       //     0.8: 'yellow',
// //       //     1.0: 'red',
// //       //   },
// //       // });
// //       mapRef.addLayer(heatmapLayer);
// //     }
// //   }, [mapRef, heatmapData]);

// //   return (
// //     <MapContainer
// //       center={[initialLat, initialLon]}
// //       zoom={10}
// //       style={{ height: '100vh', width: '100%' }}
// //       whenCreated={setMapRef}
// //     >
// //       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
// //       {/* Add the HeatmapLayer component */}
// //       <HeatmapLayer points={heatmapData} radius={20} max={1} gradient={/* Your gradient */} />
// //       <LayersControl position="bottomright">{/* ... your existing LayersControl ... */}</LayersControl>
// //     </MapContainer>
// //   );
// // };

// // export default MyMap;

// // MyMap.tsx

// import L, { LatLngBounds } from 'leaflet';
// import React, { useState } from 'react';
// import { Map } from 'leaflet';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';

// interface MyMapProps {
//   latitude: number;
//   longitude: number;
// }
// type LeafletMap = Map; // Define a custom type alias for clarity

// const MyMap: React.FC<MyMapProps> = ({ latitude, longitude }) => {
//   // Use the provided latitude and longitude as the center coordinates
//   const [mapRef, setMapRef] = useState<LeafletMap | null>(null);
//   const coordinates: [number, number] = [latitude, longitude];
//   // const map = L.map('map').setView(coordinates, 13);

//   return (
//     <MapContainer center={coordinates} zoom={13} className="w-1/2 max-h-80">
//       {/* Add a tile layer (e.g., OpenStreetMap) */}
//       {/* <Map id="mapId" center={coordinates} zoom={13}> */}
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       ></TileLayer>
//       {/* </Map> */}
//       {/* Add a marker at the specified coordinates */}
//       <Marker position={coordinates} />
//     </MapContainer>
//   );
// };

// export default MyMap;

import L, { LatLngBounds } from 'leaflet';
import React, { useState } from 'react';
import { Map } from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

interface MyMapProps {
  latitude: number;
  longitude: number;
}

const MAP_TILE = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

const MyMap: React.FC<MyMapProps> = ({ latitude, longitude }) => {
  type LeafletMap = Map; // Define a custom type alias for clarity
  const mapRef = React.useRef<L.Map | null>(null);

  // Use the provided latitude and longitude as the center coordinates
  const coordinates: [number, number] = [latitude, longitude];
  console.log(coordinates);
  console.log(mapRef);

  return (
    <MapContainer
      center={coordinates}
      zoom={14} // Adjust zoom level as needed
      // style={{ height: '100px', width: '80%' }} // Adjust height as needed
    >
      {/* <div id="map" /> */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates} />
    </MapContainer>
  );
};

export default MyMap;
