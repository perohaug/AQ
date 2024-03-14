import MyMap from '../lib/Map/MyMap';
import { Head } from '../shared/Head';

function AQMap(lat: number, lon: number, station: string, AQI: number) {
  return (
    <div>
      <Head title="TOP PAGE" />
      <MyMap latitude={lat} longitude={lon} station={station} AQI={AQI} />
    </div>
  );
}

export default AQMap;
