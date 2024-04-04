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
  };

  const handleCompareClickExit = async () => {
    setIsViewMore(false); // Close the compare section
    setCompareData(null);
    await fetchData(`https://api.met.no/weatherapi/airqualityforecast/0.1/?station=NO0102A`); // Fetch Trondheim data
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
          <p className="mt-4 ml-2 mr-2 text-3xl font-extralight">
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
              gas={gasConc}
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
                gas={gasConc}
                Bgas={gasConc2}
                showLungs={true}
                height={900}
                compare={true}
              />
              <div
                className="absolute top-1/2 left-1/3 mb-8 badge badge-lg text-xl text-white font-light px-[0.65em] pb-[0.8em] pt-[0.7em]"
                style={{ backgroundColor: '#FC8861', borderColor: '#FC8861' }}
              >
                {compareData.location.name}
              </div>
            </div>
          )}
        </div>

        <div className="absolute flex flex-col top-1/2 left-20 mt-16">
          <ParticleExplanation />
        </div>

        <div className="flex justify-center">
          <div className="flex items-center justify-center relative">
            {!isViewMore && (
              <div className="absolute top-1/2 mt-80 ml-80">
                <button
                  className="rounded-full bg-blue-800 text-white text-lg px-4 hover:scale-110 transition-transform duration-300 py-2 mt-20 font-extralight"
                  style={{ width: '160px', height: '160px', backgroundColor: '#FC8861' }}
                  onClick={handleCompareClick}
                >
                  Utforsk luften i andre byer!
                </button>
              </div>
            )}
            {isViewMore && (
              <div className="absolute top-1/4 mt-60 ml-60 transform mt-20">
                <div className="flex items-center mt-36">
                  <button
                    className="absolute ml-80 rounded-full bg-blue-800 text-white text-lg px-4 py-2 mb-10 hover:scale-110 transition-transform duration-300"
                    style={{ width: '60px', height: '60px', backgroundColor: '#FC8861' }}
                    onClick={handleCompareClickExit}
                  >
                    <p className="text-3xl mb-1">x</p>
                  </button>
                  <div className="flex items-center mt-24 ml-30">
                    <div className="relative flex itms-center inline-block ml-20">
                      <Select
                        className="rounded-full w-48"
                        options={allOptions}
                        placeholder="Skriv inn by.."
                        isSearchable={true}
                        onChange={(selectedOption) => setSelectedStation(selectedOption?.value || null)}
                        ref={inputRef}
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            borderRadius: '6rem', // Adjust the border-radius as needed
                          }),
                        }}
                      />
                      <button
                        style={{ backgroundColor: '#FC8861' }}
                        className="ml-2 rounded-full text-white py-2 px-4  hover:bg-opacity-90 focus:outline-none "
                        onClick={handleSubmit}
                      >
                        Søk
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
