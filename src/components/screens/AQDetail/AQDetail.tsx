import { useEffect, useRef, useState } from 'react';
import { Head } from '../../shared/Head';
import AirFlowSVG from '../../svgs/AirFlowSVG';
import HumanBody from '../../svgs/HumanBodySVG';
import ParticleExplanation from './ParticleExplanation';
import { aqMessage } from '../TextContent/aqMessageInfo';
import useDataFetcher, { ApiResponse } from '~/components/lib/API/DataFetcher';
import BouncingSVGElements from '~/components/lib/BouncingSVGElements';
import Select from 'react-select';
import { APIStandard, stdconcentration, stdconcentrations } from '~/components/lib/API/APIResponse';
import MainPollutants from './MainPollutants';
import HealthRiskModal from '../HealthRiskModal';
import { Link } from 'react-router-dom';

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
function LearnMore() {
  const [isClicked, setIsClicked] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { fetchData: fetchData, status: status, data: data, error: error }: ApiResponse = useDataFetcher();
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<string | null>('NO0102A');
  const [isViewMore, setIsViewMore] = useState(false);
  const [compareData, setCompareData] = useState<APIStandard | null>(null);

  const aqValue = data?.data.time[0].variables.AQI.text;
  const aqColor = aqValue ? aqMessage[aqValue].color : 'low';

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

  const handleCompareClick = async () => {
    setCompareData(data);
    setIsViewMore(!isViewMore);
    if (isViewMore) {
      setCompareData(null);
      await fetchData(`https://api.met.no/weatherapi/airqualityforecast/0.1/?station=NO0102A`);
    }
  };

  const gasConc: number =
    +(data?.data.time[0].variables.AQI.no2 as number) + +(data?.data.time[0].variables.AQI.o3 as number);
  console.log('kai:', compareData);
  const gasConc2: number =
    +(compareData?.data.time[0].variables.AQI.no2 as number) + +(compareData?.data.time[0].variables.AQI.o3 as number);

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="bg-background relative">
        <div className="flex flex-row justify-center mb-10">
          <h1 className="text-5xl rock-3d-logo">
            {' '}
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
                  fill={aqColor} // Adjust opacity as needed (0.3 for example)
                  opacity={0.5}
                  style={{ animation: 'expandShrink 1s infinite alternate' }}
                />
                {/* Tinier circle */}
                <circle cx={40} cy={40} r={25} fill={aqColor} /> {/* Adjust the radius as needed */}
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
        <div className="absolute top-1/2 mt-28 ">
          <AirFlowSVG aqColor={aqColor} />
        </div>
        <div className="absolute left-0 w-full flex justify-center items-center">
          {!isViewMore && (
            <BouncingSVGElements
              pm10={data?.data.time[0].variables.AQI.pm10}
              pm25={data?.data.time[0].variables.AQI.pm25}
              gas={data?.data.time[0].variables.AQI.o3}
              nogas={data?.data.time[0].variables.AQI.no2}
              showLungs={true}
              height={900}
              compare={false}
            />
          )}
          {isViewMore && compareData && (
            <div>
              <BouncingSVGElements
                pm10={data?.data.time[0].variables.AQI.pm10}
                Bpm10={compareData.data.time[0].variables.AQI.pm10}
                pm25={data?.data.time[0].variables.AQI.pm25}
                Bpm25={compareData.data.time[0].variables.AQI.pm25}
                // gas={gasConc}
                gas={data?.data.time[0].variables.AQI.o3}
                nogas={data?.data.time[0].variables.AQI.no2}
                // nogas={gasConc}
                Bgas={compareData.data.time[0].variables.AQI.o3}
                Bnogas={compareData.data.time[0].variables.AQI.no2}
                showLungs={true}
                height={900}
                compare={true}
              />
            </div>
          )}
        </div>

        <div className="absolute flex flex-col top-1/2 left-20 mt-16">
          <ParticleExplanation />
        </div>

        <div className="flex justify-center">
          <div className="flex items-center justify-center relative">
            <div className="absolute top-1/2 mt-60 ml-80">
              <button
                className="ml-20 rounded-full bg-blue-800 text-white text-2xl px-4 hover:scale-110 transition-transform duration-300 py-2 mt-20 font-extralight"
                style={{ width: '160px', height: '160px', backgroundColor: '#fb5607' }}
                onClick={handleCompareClick}
              >
                Utforsk luften i andre byer!
              </button>
            </div>

            {/* Search city */}
            {isViewMore && (
              <>
                <div className="absolute top-1/2 mt-80 flex flex-row justify-between space-x-32">
                  <div
                    className="badge badge-lg text-xl text-white font-light px-[0.65em] pb-[0.8em] pt-[0.7em] mr-0 mt-44 mr-14"
                    style={{ backgroundColor: '#192E54', borderColor: '#192E54', whiteSpace: 'nowrap' }}
                  >
                    {compareData?.location.name.split(',')[0]}
                  </div>
                  <div
                    className=" badge badge-lg text-xl text-white font-light px-[0.65em] pb-[0.8em] pt-[0.7em] mt-44"
                    style={{ backgroundColor: '#192E54', borderColor: '#192E54', whiteSpace: 'nowrap' }}
                  >
                    {data?.location.name.split(',')[0]}
                  </div>
                </div>
                <div className="absolute top-1/4 left-1/4 ml-72 mt-80 transform">
                  <div className="flex flex-col items-center mt-40 ml-30">
                    <div className="relative flex itmes-center inline-block ml-20 text-xl">
                      <Select
                        className="rounded-full w-60"
                        options={allOptions}
                        placeholder="Skriv inn by.."
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
                            color: 'grey', // Set color for input text
                          }),
                          placeholder: (provided) => ({
                            ...provided,
                            color: 'grey', // Set color for placeholder text
                          }),
                          singleValue: (provided) => ({
                            ...provided,
                            color: 'grey', // Set color for selected option text
                          }),
                          dropdownIndicator: (provided) => ({
                            ...provided,
                            color: 'grey', // Set color for dropdown indicator
                          }),
                          indicatorSeparator: (provided) => ({
                            ...provided,
                            backgroundColor: 'none', // Set color for indicator separator
                          }),
                        }}
                      />
                      <button
                        style={{ backgroundColor: '#fb5607' }}
                        className="ml-2 rounded-full text-white py-2 px-4  hover:bg-opacity-90 focus:outline-none hover:scale-110 transition-transform duration-300 "
                        onClick={handleSubmit}
                      >
                        Søk
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="">
            {data && aqMessage[data.data.time[0].variables.AQI.text] && (
              <MainPollutants
                highestPoll={data.dominantPollutant}
                origin={data.data.time[0].variables.concentrations}
                location={data.location.name}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnMore;
