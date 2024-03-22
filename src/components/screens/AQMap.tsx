import useDataFetcher, { ApiResponse } from '../lib/API/DataFetcher';
import MyMap from '../lib/Map/MyMap';
import Select from 'react-select';
import { Head } from '../shared/Head';
import { useEffect, useRef, useState } from 'react';

interface otherOpt {
  value: string;
  label: string;
}

export interface Station {
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
  latitude: number;
  longitude: number;
}

function AQMap() {
  const { fetchData, status, data, error }: ApiResponse = useDataFetcher();
  const { fetchData: fetchData2, status: status2, data: data2, error: error2 }: ApiResponse = useDataFetcher();
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<string | null>('NO0102A');
  // const [isViewMore, setIsViewMore] = useState(false);

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
      <div>
        <div>
          <div className="text-center ">
            <h1 className="p-8 text-4xl">Her kan du se hvordan luftkvaliteten er i ditt område.</h1>
          </div>
          <div className="text-center text-xl">
            <i>
              <b>Disclaimer:</b> Kartet viser ikke en helt presis representasjon av luften, men gir en indikasjon.
            </i>
          </div>
        </div>
        <div className="">
          <div className="flex text-center items-center justify-content ">
            <Select
              className="rounded-full py-2 px-4 text-black ml-auto w-1/2 hover:bg-opacity-90 focus:outline-none z-10"
              // className="p-3 rounded-full w-1/3 m-auto"
              options={allOptions}
              placeholder="Skriv inn by.."
              isSearchable={true}
              onChange={(selectedOption) => setSelectedStation(selectedOption?.value || null)}
              ref={inputRef}
            />
            <button
              className="p-3 rounded-full text-white mr-auto py-2 px-4 hover:bg-opacity-90 focus:outline-none bg-[#FC8861]"
              onClick={handleSubmit}
            >
              Søk
            </button>
          </div>
          <div className="flex flex-wrap mt-5 display-inline w-full">
            {/* <div className="flex"> */}
            <MyMap
              latitude={data?.location.latitude || 12.1}
              longitude={data?.location.longitude || 69}
              station={data?.location.name || 'Error'}
              AQI={data?.data.time[0].variables.AQI.text || 'low'}
              allStations={stations}
            />
            {/* </div> */}
            {/* <div className="flex"> */}
            <MyMap
              latitude={2.1}
              longitude={9}
              station={data?.location.name || 'NO0102A'}
              AQI={data?.data.time[0].variables.AQI.text || 'low'}
              allStations={stations}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AQMap;
