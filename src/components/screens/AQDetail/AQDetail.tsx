import { useEffect, useRef, useState } from 'react';
import { Head } from '../../shared/Head';
import AirFlowSVG from '../../svgs/AirFlowSVG';
import HumanBody from '../../svgs/HumanBodySVG';
import ParticleExplanation from './ParticleExplanation';
import MainPollutants from './MainPollutants';
import { aqMessage } from '../TextContent/aqMessageInfo';
import useDataFetcher, { ApiResponse } from '~/components/lib/API/DataFetcher';
import BouncingSVGElements from '~/components/lib/BouncingSVGElements';
import Select from 'react-select';

interface otherOpt {
  value: string;
  // eoi: string;
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
  const [city, setCity] = useState('Bangkok');

  const currentAQ = aqMessage['moderate'];

  const { fetchData, status, data, error }: ApiResponse = useDataFetcher();
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const [isViewMore, setIsViewMore] = useState(false);

  useEffect(() => {
    fetchData('Bangkok');
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
  }, [fetchData]);

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

  const dominantPollutant = data?.dominantPollutant;

  console.log(data?.location);

  const handleSubmit = async () => {
    setCity(inputRef.current.value);
    if (selectedStation?.startsWith('NO') || validStations.includes(selectedStation || '')) {
      console.log('selectedStation:', selectedStation);
      console.log('InputRef:', inputRef);
      await fetchData(`https://api.met.no/weatherapi/airqualityforecast/0.1/?station=${selectedStation}`);
    } else {
      await fetchData(`https://api.waqi.info/feed/${selectedStation}/?token=22f37ad5c0fae31b55ee3304697b74c44a1a4cd0`);
    }
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      handleSubmit();
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

  //const handleSvgClick = () => {
  //  setIsClicked(!isClicked); // Toggle the state when the SVG is clicked
  // };

  const handleCompareClick = () => {
    setIsViewMore(!isViewMore);
  };

  const handleCompareClickExit = async () => {
    setCity('Bangkok');
    setIsViewMore(false); // Close the compare section
    await fetchData('Bangkok'); // Fetch Trondheim data
  };

  return (
    <>
      <Head title="TOP PAGE" />

      <div className="bg-background relative">
        <div className="absolute top-1/2 mt-20">
          <AirFlowSVG />
        </div>
        <div className="absolute left-0 w-full flex justify-center items-center">
          <BouncingSVGElements
            pm10={data?.data.time[0].variables.AQI.pm10}
            pm25={data?.data.time[0].variables.AQI.pm25}
            showLungs={true}
            height={900}
          />
        </div>

        <div className="absolute flex flex-col top-1/2 left-20 mt-16">
          <ParticleExplanation />
        </div>

        <div className="flex justify-center">
          <div className="flex items-center justify-center relative">
            {!isViewMore && (
              <div className="absolute top-1/2 mt-80 ml-80">
                <button
                  className="rounded-full bg-blue-800 text-white text-lg px-4 hover:scale-110 transition-transform duration-300 py-2 mt-20"
                  style={{ width: '160px', height: '160px', backgroundColor: '#FC8861' }}
                  onClick={handleCompareClick}
                >
                  Sammenlign luften i Trondheim med andre byer
                </button>
              </div>
            )}

            {/* Search city */}
            {isViewMore && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-20">
                <div className="flex items-center mt-80">
                  <button
                    className="ml-20 absolute rounded-full bg-blue-800 text-white text-lg px-4 py-2 mb-20 hover:scale-110 transition-transform duration-300"
                    style={{ width: '60px', height: '60px', backgroundColor: '#FC8861' }}
                    onClick={handleCompareClickExit}
                  >
                    <p className="text-3xl mb-1">x</p>
                  </button>
                  <div className="flex items-center mt-20 ml-20">
                    <div
                      className="badge badge-lg text-xl text-white font-light px-[0.9em] pb-[0.8em] pt-[0.7em] top-1/2 mr-6"
                      style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
                    >
                      Trondheim
                    </div>

                    <div className="relative flex itms-center inline-block ml-20">
                      <Select
                        className="rounded-lg w-48"
                        options={
                          allOptions
                          //   stations.map((station) => ({
                          //   value: station.eoi,
                          //   label: station.name + ', ' + station.delomrade.name + ', ' + station.kommune.name,
                          // }))
                        }
                        placeholder="Skriv inn by.."
                        isSearchable={true}
                        onChange={(selectedOption) => setSelectedStation(selectedOption?.value || null)}
                        ref={inputRef}
                      />
                      <button
                        style={{ backgroundColor: '#FC8861' }}
                        className="ml-2 rounded-full text-white py-2 px-4  hover:bg-opacity-90 focus:outline-none "
                        onClick={handleSubmit}
                      >
                        Søk
                      </button>
                    </div>
                    {/*data && (
                      <div>
                        <p> AQI: {data.data.time[0].variables.AQI.value}</p>
                        <p>
                          total value={data.data.time[0].variables.concentrations.PM10.origin?.langtransport?.value}
                        </p>
                        <p>Status her da? ={status}</p>
                      </div>
                    )}*/}
                  </div>
                </div>
              </div>
            )}
            {/*<div className=" mt-40">
              <svg width="70" height="70" onClick={handleSvgClick}>
                <circle cx="35" cy="35" r="35" fill="#192E54" />
                <text x="50%" y="50%" textAnchor="middle" fill="#FFFFFF" fontSize="24" dy=".3em">
                  ?
                </text>
              </svg>
              {isClicked && <div className="absolute z-20 text-grey-900">Trang?</div>}
            </div>*/}
          </div>
          {currentAQ != aqMessage['low'] && <MainPollutants data={data} city={city} />}
        </div>
      </div>
    </>
  );
}

export default LearnMore;
