import MyMap from '../lib/Map/MyMap';
import { Head } from '../shared/Head';

function AQMap(lat: number, lon: number, station: string, AQI: number) {
  return (
    <>
      <Head title="TOP PAGE" />
      <div>
        <MyMap latitude={lat} longitude={lon} station={station} AQI={AQI} />
      </div>
    </>
  );
}

export default AQMap;
