import useDataFetcher, { ApiResponse } from '../lib/API/DataFetcher';
import { Popup, MapContainer, TileLayer, useMap, LayerGroup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { aqMessage } from './../screens/TextContent/aqMessageInfo';
import { LatLngExpression, LeafletMouseEvent, circle } from 'leaflet';
import Select from 'react-select';
import { Head } from '../shared/Head';
import { useEffect, useRef, useState } from 'react';
import { stdconcentrations } from '../lib/API/APIResponse';
import MainPollutants2 from './MainPollutants2';
import HealthRiskModal from './HealthRiskModal';

interface otherOpt {
  value: string;
  label: string;
}

export interface StationValues {
  station: string;
  highestPoll: string;
  origin: stdconcentrations;
  location: string;
  AQI: string;
}

interface PositionData {
  latitude: number;
  longitude: number;
  AQI: string;
  station: string;
  eoi: string;
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
  const [stations, setStations] = useState<Station[]>([]);
  const [isViewMore, setIsViewMore] = useState(false);
  const [selectedStation, setSelectedStation] = useState<string | null>('NO0102A');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const aqValue = data?.data.time[0].variables.AQI.text;
  const aqColor = aqValue ? aqMessage[aqValue].color : 'low';

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  const handleClick = async (station: string) => {
    console.log('click', isViewMore);
    setIsViewMore(!isViewMore);
    fetchData(`https://api.met.no/weatherapi/airqualityforecast/0.1/?station=${station}`);
    if (isViewMore) {
      console.log('clicked', station);
    } else {
      return null;
    }
  };

  const ChangeView: React.FC<{ center: LatLngExpression; zoom: number }> = ({ center, zoom }) => {
    const map = useMap();
    useEffect(() => {
      map.flyTo(center, zoom);
    }, [center, zoom, map]);
    return null;
  };

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="flex flex-col items-center">
        <div className="mb-10 flex flex-row ">
          <h1 className="text-5xl rock-3d-logo">
            <b>JegPuster</b>
          </h1>
          <p className="mt-3 ml-2 mr-2 text-4xl font-extralight">
            i {data && data.location.name !== 'E6-Tiller' ? data.location.name : 'Trondheim'}
          </p>
          <div className="mr-10 cursor-pointer">
            <div className="mr-3">
              <svg width={80} height={80} onClick={openModal}>
                <circle
                  cx={40}
                  cy={40}
                  r={20}
                  fill={aqColor}
                  opacity={0.5}
                  style={{ animation: 'expandShrink 1s infinite alternate' }}
                />
                <circle cx={40} cy={40} r={25} fill={aqColor} />
              </svg>
              <style>
                {`
                @keyframes expandShrink {
                  0% {
                    r: 30; // Initial radius
                  }
                  50% {
                    r: 35; // Maximum radius
                  }
                  100% {
                    r: 40; // Back to the initial radius
                  }
                }
                `}
              </style>
            </div>
            {isModalOpen && <HealthRiskModal closeModal={closeModal} />}
          </div>
        </div>

        <div className="text-center text-xl font-light">
          <b className="font-medium">Obs!</b> Kartet gir ikke en nøyaktig representasjon av luftkvalitet, men er en
          generell indikasjon
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 mb-4">
        <div className="flex flex-row mb-4">
          <Select
            className="rounded-full w-80 text-xl"
            options={allOptions}
            placeholder="Skriv inn sted.."
            isSearchable={true}
            onChange={(selectedOption) => setSelectedStation(selectedOption?.value || null)}
            ref={inputRef}
            styles={{
              control: (provided) => ({
                ...provided,
                borderRadius: '6rem',
              }),
              input: (provided) => ({
                ...provided,
                color: 'grey',
              }),
              placeholder: (provided) => ({
                ...provided,
                color: 'grey',
              }),
              singleValue: (provided) => ({
                ...provided,
                color: 'grey',
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: 'grey',
              }),
              indicatorSeparator: (provided) => ({
                ...provided,
                backgroundColor: 'none',
              }),
            }}
          />

          <button
            className="text-xl ml-3 p-3 rounded-full text-white mr-auto py-2 px-4 hover:bg-opacity-90 focus:outline-none bg-[#fb5607]"
            onClick={handleSubmit}
          >
            Søk
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-center ml-20">
        <div className="font-extralight text-2xl mr-20">
          <div
            className="mt-10 mb-16 badge badge-lg text-white text-2xl font-extralight px-[0.65em] pb-[0.8em] pt-[0.7em] whitespace-nowrap"
            style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
          >
            Utforsk luftkvalitet i kartet
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-8">1. Skriv inn sted i søkefeltet </p>
            <p className="mb-8">eller</p>
            <p>2. Trykk på punktene i kartet </p>
          </div>
        </div>
        <MapContainer
          className="basis-2/3 m-auto z-0 h-[500px] bg-white  rounded-2xl"
          center={[data?.location.longitude || 69, data?.location.latitude || 10]}
          zoom={14}
          scrollWheelZoom={false}
        >
          <ChangeView center={[data?.location.longitude || 69, data?.location.latitude || 12]} zoom={11.5} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LayerGroup>
            <Circle
              radius={100}
              center={[data?.location.longitude || 69, data?.location.latitude || 13]}
              pathOptions={{
                fillColor: aqMessage[data?.data.time[0].variables.AQI.text || 'low'].color,
                stroke: false,
                fillOpacity: 1,
              }}
            />
            <Circle
              radius={1000}
              center={[data?.location.longitude || 12.1, data?.location.latitude || 69]}
              pathOptions={{
                fillColor: aqMessage[data?.data.time[0].variables.AQI.text || 'low'].color,
                stroke: false,
                fillOpacity: 0.7,
              }}
            ></Circle>
          </LayerGroup>
          <LayerGroup>
            {stations.map((station, index) => (
              <Circle
                key={index}
                center={[station.latitude, station.longitude]}
                radius={450}
                pathOptions={{
                  fillColor: aqMessage[station.eoi || 'high']?.color || 'black',
                  stroke: false,
                  fillOpacity: 0,
                }}
                eventHandlers={{ click: (event: LeafletMouseEvent) => handleClick(station.eoi) }}
              >
                <Circle
                  key={index}
                  center={[station.latitude, station.longitude]}
                  radius={350}
                  pathOptions={{
                    fillColor: aqMessage[station.eoi || 'high']?.color || 'black',
                    stroke: false,
                    fillOpacity: 0.8,
                  }}
                />
              </Circle>
            ))}
          </LayerGroup>
        </MapContainer>
        {data && (
          <div className="mt-10">
            <MainPollutants2
              highestPoll={data?.dominantPollutant}
              origin={data?.data.time[0].variables.concentrations}
              location={data.location.name}
            ></MainPollutants2>
          </div>
        )}
      </div>
    </>
  );
}

export default AQMap;
