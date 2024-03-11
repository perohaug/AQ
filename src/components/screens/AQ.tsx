import React, { ReactElement, useState, useEffect } from 'react';
import { Head } from '~/components/shared/Head';
import AQI from '~/components/lib/AQI';
import GraphComponent from '~/components/lib/GraphComponent';
import { ApiResponse } from '../lib/API/DataFetcher';
import useDataFetcher from '../lib/API/DataFetcher';

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

const AQPage: React.FC = () => {
  const [userInput, setUserInput] = useState<string>(''); // State to store user input
  const { fetchData, status, data, error }: ApiResponse = useDataFetcher();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleButtonClick = async () => {
    await fetchData(userInput);
  };

  return (
    <>
      <Head title={'Air Quality representation'}></Head>
      <div className="grid">
        <div className="text-center p-8">
          <input
            value={userInput}
            onChange={onInputChange}
            type="text"
            className=" w-1/2 border-2"
            placeholder="Enter user input"
          />
          <button onClick={handleButtonClick}>Fetch Data</button>
        </div>
        <p> AQI: {data?.data.time[0].variables.AQI.value}</p>
        <p> Lokasjon: {data?.location.name}</p>
        {/* Display data here using apiData */}
        <div className="flex justify-center mb-4 p-4 overflow-auto">
          <AQI />
          <AQI />
        </div>
        <div className="flex justify-center items-center mb-4 p-4">
          <GraphComponent />
          <GraphComponent />
        </div>
      </div>
    </>
  );
};

export default AQPage;
