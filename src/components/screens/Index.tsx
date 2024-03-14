import { useEffect, useRef, useState } from 'react';
import { Head } from '~/components/shared/Head';
import BouncingSVGElements from '~/components/lib/BouncingSVGElements';
import useDataFetcher, { ApiResponse } from '../lib/API/DataFetcher';
import Select from 'react-select';
import MyMap from '../lib/Map/MyMap';

interface otherOpt {
  value: string;
  label: string;
}

interface Station {
  name: string;
  eoi: string;
  grunnkrets: {
    name: string;
    areacode: string;
  };
  delomrade: {
    name: string;
    areacode: string;
  };
  kommune: {
    name: string;
    areacode: string;
  };
}

function Index() {
  const { fetchData, status, data, error }: ApiResponse = useDataFetcher();
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<string | null>('NO0060A');

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const res = await fetch('https://api.met.no/weatherapi/airqualityforecast/0.1/stations');
        const data = await res.json();
        setStations(data);
      } catch (error) {
        console.error('Error fetching stations:', error);
      }
    };
    fetchStations();
    handleSubmit();
  }, []);

  const inputRef: any = useRef();
  const validStations = [
    'Loallme',
    'NedreLa',
    'OlavVga',
    'Omkjori',
    'Ringsak',
    'Schanch',
    'Seljest',
    'Solheim',
    'Vahlsko',
    'Vollapa',
  ];

  const handleSubmit = async () => {
    if (selectedStation?.startsWith('NO') || validStations.includes(selectedStation || '')) {
      console.log('selectedStation:', selectedStation);
      console.log('InputRef:', inputRef);
      await fetchData(`https://api.met.no/weatherapi/airqualityforecast/0.1/?station=${selectedStation}`);
    } else {
      await fetchData(`https://api.waqi.info/feed/${selectedStation}/?token=22f37ad5c0fae31b55ee3304697b74c44a1a4cd0`);
    }
  };
  const listWithOtherOptions: otherOpt[] = [
    {
      value: 'amsterdam',
      label: 'Amsterdam, Netherlands',
    },
    {
      value: 'madrid',
      label: 'Madrid, Spain',
    },
    {
      value: 'los angeles',
      label: 'Los Angles, USA',
    },
    {
      value: 'bali',
      label: 'Ghusuri, Howrah, India',
    },
    {
      value: 'jakarta',
      label: 'Jakarta, Indonesia',
    },
    {
      value: 'bangkok',
      label: 'Bangkok, Thailand',
    },
    {
      value: 'copenhagen',
      label: 'København, Denmark',
    },
    {
      value: 'bern',
      label: 'Bern, Switzerland',
    },
  ];

  const allOptions = [
    ...stations.map((station) => ({
      value: station.eoi,
      label: station.name + ', ' + station.delomrade.name + ', ' + station.kommune.name,
    })),
    ...listWithOtherOptions,
  ];

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="min-h-screen max-w-screen">
        <div className="text-center items-center">
          <div className="p-8">
            <h1 className="text-9xl rock-3d-logo">
              JegPuster<b>Ikke</b>
            </h1>
            <div className="grid justify-center items-center p-8">
              <div className="text-center p-8">
                <Select
                  className="mt-2 mb-2"
                  options={allOptions}
                  placeholder="Choose a station"
                  isSearchable={true}
                  onChange={(selectedOption) => setSelectedStation(selectedOption?.value || null)}
                  ref={inputRef}
                />

                <button onClick={handleSubmit}>Search for Data</button>
              </div>
              {data && (
                <div>
                  {' '}
                  <p> AQI: {data.data.time[0].variables.AQI.value}</p>
                  <p> Lokasjon: {data.location.name}</p>
                  <p>pm25={data.data.time[0].variables.AQI.pm25}</p>
                  <p>pm25={data.data.time[0].variables.concentrations.PM25.value}</p>
                  <p>pm10={data.data.time[0].variables.AQI.pm10}</p>
                  <p>pm25={data.data.time[0].variables.concentrations.PM10.value}</p>
                  <p>no2={data.data.time[0].variables.AQI.no2}</p>
                  <p>pm25={data.data.time[0].variables.concentrations.NO2.value}</p>
                  <p>o3={data.data.time[0].variables.AQI.o3}</p>
                  <p>pm25={data.data.time[0].variables.concentrations.O3.value}</p>
                  <p>Dominant pollutant={data.dominantPollutant}</p>
                  <p>Dominant industri={data.topContributors?.pm10.industri}</p>
                  <p>Dominant veistov={data.topContributors?.pm10.veistov}</p>
                  <p>Dominant langtransport={data.topContributors?.pm10.langtransport}</p>
                  <p>total value={data.data.time[0].variables.concentrations.PM10.value}</p>
                  <p>total value={data.data.time[0].variables.concentrations.PM10.origin?.langtransport?.value}</p>
                  <p>Status her da? ={status}</p>
                </div>
              )}
              {/* <div className="">
                <BouncingSVGElements
                  pm25={data?.data.time[0].variables.AQI.pm25}
                  pm10={data?.data.time[0].variables.AQI.pm10}
                />
              </div> */}
            </div>
            {data?.location && (
              <div className="">
                <MyMap
                  latitude={data.location.latitude}
                  longitude={data.location.longitude}
                  AQI={data.data.time[0].variables.AQI.value}
                  station={data.location.name}
                />
              </div>
            )}
            <div id="map"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
