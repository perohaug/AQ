import Select from 'react-select';
import React, { useState, useEffect, ReactNode } from 'react';
import DataFetcher, { ApiResponse } from './API/DataFetcher';
import { APIStandard } from './API/APIResponse';

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

// interface AQIStandard {
//   data: {
//     time: {
//       from: Date;
//       to: Date;
//       variables: {
//         AQI: {
//           units: string; // aqi standardisert
//           value: number;
//           pm10: number;
//           pm25: number;
//           no2: number;
//           o3: number;
//         };
//         cocncentrations: {
//           no2_concentration: {
//             value: number;
//             units: string;
//             origin?: {
//               no2_langtransport?: {
//                 value?: number;
//                 units?: string;
//               };
//               no2_sjosalt?: {
//                 value: number;
//                 units: string;
//               };
//               no2_eksos?: {
//                 value: number;
//                 units: string;
//               };
//               no2_veistov?: {
//                 value: number;
//                 units: string;
//               };
//               no2_skip?: {
//                 value: number;
//                 units: string;
//               };
//               no2_vedfyring?: {
//                 value: number;
//                 units: string;
//               };
//               no2_industri?: {
//                 value: number;
//                 units: string;
//               };
//             };
//           };
//           pm10_concentration: {
//             value: number;
//             units: string;
//             origin?: {
//               pm10_langtransport?: {
//                 value: number;
//                 units: string;
//               };
//               pm10_sjosalt?: {
//                 value: number;
//                 units: string;
//               };
//               pm10_eksos?: {
//                 value: number;
//                 units: string;
//               };
//               pm10_veistov?: {
//                 value: number;
//                 units: string;
//               };
//               pm10_skip?: {
//                 value: number;
//                 units: string;
//               };
//               pm10_vedfyring?: {
//                 value: number;
//                 units: string;
//               };
//               pm10_industri?: {
//                 value: number;
//                 units: string;
//               };
//             };
//           };
//           pm25_concentration: {
//             value: number;
//             units: string;
//             origin?: {
//               pm25_langtransport?: {
//                 value: number;
//                 units: string;
//               };
//               pm25_sjosalt?: {
//                 value: number;
//                 units: string;
//               };
//               pm25_eksos?: {
//                 value: number;
//                 units: string;
//               };
//               pm25_veistov?: {
//                 value: number;
//                 units: string;
//               };
//               pm25_skip?: {
//                 value: number;
//                 units: string;
//               };
//               pm25_vedfyring?: {
//                 value: number;
//                 units: string;
//               };
//               pm25_industri?: {
//                 value: number;
//                 units: string;
//               };
//             };
//           };
//           o3_concentration: {
//             value: number;
//             units: string;
//             origin?: {
//               o3_langtransport?: {
//                 value: number;
//                 units: string;
//               };
//               o3_eksos?: {
//                 value: number;
//                 units: string;
//               };
//               o3_skip?: {
//                 value: number;
//                 units: string;
//               };
//               o3_veistov?: {
//                 value: number;
//                 units: string;
//               };
//               o3_vedfyring?: {
//                 value: number;
//                 units: string;
//               };
//               o3_industri?: {
//                 value: number;
//                 units: string;
//               };
//             };
//           };
//         };
//       }[];
//     };
//   };
//   location: {
//     name: string;
//     path: string;
//     longitude: number;
//     latitude: number;
//     areacode: string;
//   };
//   stationID?: string;
// }

// interface AQIResponse {
//   meta: {
//     reftime: string;
//     location: {
//       name: string;
//       path: string;
//       longitude: string;
//       latitude: string;
//       areacode: string;
//     };
//     superlocation: {
//       name: string;
//       path: string;
//       longitude: string;
//       latitude: string;
//       areacode: string;
//       areaclass: string;
//       superareacode: string;
//     };
//     sublocations: [];
//   };
//   data: {
//     time: {
//       from: string;
//       to: string;
//       variables: {
//         AQI: {
//           value: number;
//           units: string;
//         };
//         no2_concentration: {
//           value: number;
//           units: string;
//         };
//         AQI_no2: {
//           value: number;
//           units: string;
//         };
//         no2_nonlocal_fraction: {
//           value: number;
//           units: string;
//         };
//         no2_local_fraction_traffic_exhaust: {
//           value: number;
//           units: string;
//         };
//         no2_local_fraction_shipping: {
//           value: number;
//           units: string;
//         };
//         no2_local_fraction_heating: {
//           value: number;
//           units: string;
//         };
//         no2_local_fraction_industry: {
//           value: number;
//           units: string;
//         };
//         pm10_concentration: {
//           value: number;
//           units: string;
//         };
//         AQI_pm10: {
//           value: number;
//           units: string;
//         };
//         pm10_nonlocal_fraction: {
//           value: number;
//           units: string;
//         };
//         pm10_nonlocal_fraction_seasalt: {
//           value: number;
//           units: string;
//         };
//         pm10_local_fraction_traffic_exhaust: {
//           value: number;
//           units: string;
//         };
//         pm10_local_fraction_traffic_nonexhaust: {
//           value: number;
//           units: string;
//         };
//         pm10_local_fraction_shipping: {
//           value: number;
//           units: string;
//         };
//         pm10_local_fraction_heating: {
//           value: number;
//           units: string;
//         };
//         pm10_local_fraction_industry: {
//           value: number;
//           units: string;
//         };
//         pm25_concentration: {
//           value: number;
//           units: string;
//         };
//         AQI_pm25: {
//           value: number;
//           units: string;
//         };
//         pm25_nonlocal_fraction: {
//           value: number;
//           units: string;
//         };
//         pm25_nonlocal_fraction_seasalt: {
//           value: number;
//           units: string;
//         };
//         pm25_local_fraction_traffic_exhaust: {
//           value: number;
//           units: string;
//         };
//         pm25_local_fraction_traffic_nonexhaust: {
//           value: number;
//           units: string;
//         };
//         pm25_local_fraction_shipping: {
//           value: number;
//           units: string;
//         };
//         pm25_local_fraction_heating: {
//           value: number;
//           units: string;
//         };
//         pm25_local_fraction_industry: {
//           value: number;
//           units: string;
//         };
//         o3_concentration: {
//           value: number;
//           units: string;
//         };
//         AQI_o3: {
//           value: number;
//           units: string;
//         };
//         o3_nonlocal_fraction: {
//           value: number;
//           units: string;
//         };
//       };
//     }[];
//   };
// }

function AQI() {
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const [aqiData, setAqiData] = useState<
    {
      domPoll: string;
      color: string | undefined;
      descriptionNO: string;
      datetime: string;
      value: number;
    }[]
  >([]);
  const [aqiDescriptions, setAqiDescriptions] = useState<any>({});
  const { status, data, error }: ApiResponse = DataFetcher(
    'https://api.met.no/weatherapi/airqualityforecast/0.1/?station=NO0060A',
  );

  useEffect(() => {
    const fetchAqiDescriptions = async () => {
      try {
        const res = await fetch('https://api.met.no/weatherapi/airqualityforecast/0.1/aqi_description');
        const data = await res.json();
        setAqiDescriptions(data.variables.AQI);
      } catch (error) {
        console.error('Error fetching AQI descriptions:', error);
      }
    };

    fetchAqiDescriptions();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedStation) {
        try {
          const res = await fetch(`https://api.met.no/weatherapi/airqualityforecast/0.1/?station=${selectedStation}`);
          const data = await res.json();
          console.log('Data:', data);

          const dominantPollutant = getDominantPollutant(data);

          const aqiDataArray = data.data.time.map(
            (timeEntry: { from: string | number | Date; variables: { AQI: { value: any } } }) => {
              const formattedDatetime = new Date(timeEntry.from).toLocaleString('no-NO', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                hour12: false,
              });

              const roundedAqi = parseFloat(timeEntry.variables?.AQI?.value || 0).toFixed(2);

              return {
                datetime: formattedDatetime,
                value: roundedAqi,
                descriptionNO: aqiDescriptions.aqis.find((aqi: any) => roundedAqi <= aqi.to)?.description_NO,
                color: aqiDescriptions.aqis.find((aqi: any) => roundedAqi <= aqi.to)?.color,
                domPoll: dominantPollutant,
              };
            },
          );

          setAqiData(aqiDataArray);
          console.log(`${dominantPollutant} is the dominant pollutant right now`);
        } catch (error) {
          console.error('Error fetching and sorting data:', error);
        }
      }
    };

    fetchData();
  }, [selectedStation, aqiDescriptions]);

  const getDominantPollutant = (data: any) => {
    const pollutants = [
      { variable: 'AQI_pm10', name: 'PM', sub: 10, value: data.data.time[0].variables.AQI_pm10.value },
      { variable: 'AQI_pm25', name: 'PM', sub: 2.5, value: data.data.time[0].variables.AQI_pm25.value },
      { variable: 'AQI_o3', name: 'O', sub: 3, value: data.data.time[0].variables.AQI_o3.value },
      { variable: 'AQI_no2', name: 'NO', sub: 2, value: data.data.time[0].variables.AQI_no2.value },
    ];
    console.log('Verdier for pollutants:', pollutants);
    const dominantPollutant = pollutants.reduce((prev, current) => (prev.value > current.value ? prev : current));
    const dompollEl = (
      <>
        {dominantPollutant.name}
        <sub>{dominantPollutant.sub}</sub>
      </>
    );

    return dominantPollutant.name + dominantPollutant.sub;
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
  }, []);

  const [fetchedData, setFetchedData] = useState<APIStandard | null>(null);

  const handleDataFetched = (data: APIStandard) => {
    setFetchedData(data);
  };

  return (
    <>
      <div className="block w-1/4 h-100 m-3 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">AQI values of:</div>
        <Select
          className="mt-2 mb-2"
          options={stations.map((station) => ({
            value: station.eoi,
            label: station.name + ', ' + station.delomrade.name + ', ' + station.kommune.name,
          }))}
          placeholder="Choose a station"
          isSearchable={true}
          onChange={(selectedOption) => setSelectedStation(selectedOption?.value || null)}
        />
        <div className="font-normal text-sm text-gray-900 dark:text-gray-400 h-80 overflow-auto">
          <ul>
            {aqiData.map((aqiEntry) => (
              <li key={aqiEntry.datetime} /* style={{ background: aqiEntry.color }} */>
                {aqiEntry.datetime}: <b style={{ color: aqiEntry.color }}>{aqiEntry.value}</b> -{' '}
                {aqiEntry.descriptionNO}, det er mest av {aqiEntry.domPoll}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {data?.data.time.from.toTimeString()}
        {data?.location.path}
      </div>
    </>
  );
}

export default AQI;
