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

const AQI: React.FC = () => {
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
  const { fetchData, status, data, error }: ApiResponse = DataFetcher();
  // const { status, data, error }: ApiResponse = DataFetcher(
  //   'https://api.waqi.info/feed/bali/?token=22f37ad5c0fae31b55ee3304697b74c44a1a4cd0',
  // );
  // const { status, data, error }: ApiResponse = DataFetcher(
  //   `https://api.met.no/weatherapi/airqualityforecast/0.1/?station=NO0060A`,
  // );
  // const { status, data, error }: ApiResponse = DataFetcher(
  //   `https://api.met.no/weatherapi/airqualityforecast/0.1/?station=NO0060A`,
  // );

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
      { variable: 'AQI_pm10', name: 'PM₁₀', sub: 10, value: data.data.time[0].variables.AQI_pm10.value },
      { variable: 'AQI_pm25', name: 'PM₂.₅', sub: 2.5, value: data.data.time[0].variables.AQI_pm25.value },
      { variable: 'AQI_o3', name: 'O₃', sub: 3, value: data.data.time[0].variables.AQI_o3.value },
      { variable: 'AQI_no2', name: 'NO₂', sub: 2, value: data.data.time[0].variables.AQI_no2.value },
    ];
    console.log('Verdier for pollutants:', pollutants);
    const dominantPollutant = pollutants.reduce((prev, current) => (prev.value > current.value ? prev : current));

    return dominantPollutant.name;
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
      <div className="block flex-row justify-end">
        {data?.data.time[0].variables.AQI.pm25}
        <br />
        {data?.location.name}
        <br />
        Transport: {data?.data.time[0].variables.concentrations.PM10.origin?.langtransport?.value}
        {data?.data.time[0].variables.concentrations.PM10.origin?.langtransport?.units}, vedfyring:{' '}
        {data?.data.time[0].variables.concentrations.PM10.origin?.veistov?.value}
        {data?.data.time[0].variables.concentrations.PM10.origin?.veistov?.units}
        {data?.data.time[0].variables.concentrations.PM10.origin?.vedfyring?.value}
        {data?.data.time[0].variables.concentrations.PM10.origin?.industri?.units}
        <br />
        {data?.data.time[0].variables.concentrations.O3.origin?.vedfyring?.value}
        {data?.data.time[0].variables.concentrations.PM10.origin?.industri?.units}
        Dato: {data?.data.time[0].from.toDateString()}
        <br />
        Med standardisering: {data?.data.time[0].variables.AQI.no2}| Uten standardisering:{' '}
        {data?.data.time[0].variables.concentrations.NO2.value}
        <br />
        Med standardisering: {data?.data.time[0].variables.AQI.pm25}| Uten standardisering:{' '}
        {data?.data.time[0].variables.concentrations.PM25.value}
        {data?.location.latitude}
        {data?.location.longitude}
        <br />
        {data?.dominantPollutant}
        <div>{status}</div>
        <div>{data?.location.latitude}</div>
        <div>{data?.location.longitude}</div>
      </div>
    </>
  );
};

export default AQI;
