import React, { useEffect, useState } from 'react';
import DataStandard from '../lib/API/Hooks';
import { APIStandard } from '../lib/API/APIResponse';
import { ApiResponse } from '../lib/API/DataFetcher';

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

function TEst() {
  const [url, setUrl] = useState<string>('');
  const [APIdata, setAPIData] = useState<ApiResponse[]>([]);
  const [station, setStation] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const [aqiDescriptions, setAqiDescriptions] = useState<any>({});

  useEffect(() => {
    const fetchAqiDescriptions = async () => {
      try {
        const res = await fetch('https://api.met.no/weatherapi/airqualityforecast/0.1/aqi_description');
        const data = await res.json();
        setAqiDescriptions(data.variables.AQI);
        console.log('AQI descriptions:', aqiDescriptions.aqis[0].description_NO);
        console.log('AQI descriptions:', aqiDescriptions.aqis[1].description_NO);
        console.log('Data:', data.variables.AQI);
        APIdata[0].data = aqiDescriptions.aqis[0].description_NO;
      } catch (error) {
        console.error('Error fetching AQI descriptions:', error);
      }
    };
    fetchAqiDescriptions();
  }, []);

  return (
    <div className="">
      <h1>{'hei'}</h1>
    </div>
  );
}

export default TEst;
