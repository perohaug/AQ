import useDataFetcher, { ApiResponse } from '../lib/API/DataFetcher';
import { Popup, MapContainer, TileLayer, useMap, LayerGroup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { aqMessage } from './../screens/TextContent/aqMessageInfo';
import { LatLngExpression, LeafletMouseEvent, circle } from 'leaflet';
import Select from 'react-select';
import { Head } from '../shared/Head';
import { useEffect, useRef, useState } from 'react';
import { stdconcentrations } from '../lib/API/APIResponse';
import MainPollutants from './AQDetail/MainPollutants';

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
  const { fetchData: fetchData2, status: status2, data: data2, error: error2 }: ApiResponse = useDataFetcher();
  const [stations, setStations] = useState<Station[]>([]);
  const [isViewMore, setIsViewMore] = useState(false);
  const [stationValue, setStationValue] = useState<StationValues[]>([]);
  const [positionValue, setPositionValue] = useState<PositionData[]>([]);
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
    // const fetchStationValues = async (station: string) => {
    //   if (!station || !stations.length) return;
    //   const stationObj = stations.find((s) => s.eoi === station);
    //   if (!stationObj) return;
    //   const url = `https://api.met.no/weatherapi/airqualityforecast/0.1/?station=${station}`;
    //   await fetchData2(url);
    //   setStationValue((prevValues) => ({
    //     ...prevValues,
    //     station: data2?.location.areacode || 'Error',
    //     highestPoll: data2?.dominantPollutant || 'low',
    //     origin: data2?.data.time[0].variables.concentrations || undefined,
    //     location: data2?.location.name || 'Error',
    //     AQI: data2?.data.time[0].variables.AQI.text || 'low',
    //   }));
    // };
    fetchStations();
    handleSubmit();
    addData(allOptions);
    // fetchStationValues(stations);
    // stations.map((station) => fetchStationValues(station.eoi));
    // console.log(stationValue);

    // fetchStationValues(stations);
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

  async function addData(objects: otherOpt[]): Promise<PositionData[]> {
    const posStations: PositionData[] = await Promise.all(
      objects.map(async (station) => {
        console.log('station:', station);
        if (station.value?.startsWith('NO') || validStations.includes(station.value || '')) {
          console.log('selectedStation:', station.value);
          console.log('InputRef:', inputRef);
          await fetchData2(`https://api.met.no/weatherapi/airqualityforecast/0.1/?station=${station.value}`);
        } else {
          await fetchData2(
            `https://api.waqi.info/feed/${station.value}/?token=22f37ad5c0fae31b55ee3304697b74c44a1a4cd0`,
          );
        }
        if (data2) {
          setPositionValue((prevValues) => [
            {
              ...prevValues,
              latitude: data2.location.latitude,
              longitude: data2.location.longitude,
              AQI: data2.data.time[0].variables.AQI.text,
              station: data2.location.name,
              eoi: data2.location.areacode,
            },
          ]);
        } else {
          setPositionValue((prevValues) => [
            {
              ...prevValues,
              latitude: 10.37172,
              longitude: 63.35781,
              AQI: 'low',
              station: 'Error',
              eoi: 'Error',
            },
          ]);
        }
      }),
    );
    // setPositionValue(posStations);
    console.log('posStations:', posStations);
    return positionValue && posStations;
  }
  console.log('skjer her', positionValue);

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
              options={allOptions}
              placeholder="Skriv inn by.."
              isSearchable={true}
              onChange={(selectedOption) => setSelectedStation(selectedOption?.value || null)}
              ref={inputRef}
            />
            <button
              className="p-3 rounded-full text-white mr-auto py-2 px-4 hover:bg-opacity-90 focus:outline-none bg-[#fb5607]"
              onClick={handleSubmit}
            >
              Søk
            </button>
          </div>
          <div className="flex flex-wrap mt-5 display-inline w-full">
            {/* <MyMap
              latitude={data?.location.latitude || 12.1}
              longitude={data?.location.longitude || 69}
              // station={data?.location.areacode || 'Error'}
              station={data?.location.name || 'Error'}
              AQI={data?.data.time[0].variables.AQI.text || 'low'}
              allStations={stations}
              stationValues={stationValue}
            /> */}
            <MapContainer
              className="basis-1/3 m-auto z-0 h-[500px] bg-white border-2 border-gray-300 rounded-lg shadow-lg"
              center={[data?.location.longitude || 12.1, data?.location.latitude || 69]}
              zoom={14}
              scrollWheelZoom={false}
            >
              <ChangeView center={[data?.location.longitude || 12.1, data?.location.latitude || 69]} zoom={12} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LayerGroup>
                <Circle
                  radius={100}
                  center={[data?.location.longitude || 12.1, data?.location.latitude || 69]}
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
                    radius={200}
                    pathOptions={{
                      fillColor: aqMessage[station.eoi || 'high']?.color || 'black',
                      stroke: false,
                      fillOpacity: 1,
                    }}
                    eventHandlers={{ click: (event: LeafletMouseEvent) => handleClick(station.eoi) }}
                  ></Circle>
                ))}
                {/* {positionValue &&
                  positionValue.map((objects, index) => (
                    <Circle
                      key={index}
                      center={[objects.latitude, objects.longitude]}
                      radius={100}
                      pathOptions={{
                        fillColor: aqMessage[objects.AQI].color,
                        stroke: false,
                        fillOpacity: 1,
                      }}
                      eventHandlers={{ click: (event: LeafletMouseEvent) => handleClick(objects.eoi) }}
                    ></Circle>
                  ))} */}
              </LayerGroup>
            </MapContainer>
            {data && (
              <div className="absolute">
                <h1>{data.location.name}</h1>
                <MainPollutants
                  highestPoll={data?.dominantPollutant}
                  origin={data?.data.time[0].variables.concentrations}
                  location={data.location.name}
                ></MainPollutants>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AQMap;
