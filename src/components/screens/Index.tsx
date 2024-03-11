import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { Head } from '~/components/shared/Head';
import BouncingSVGElements from '~/components/lib/BouncingSVGElements';
import useDataFetcher, { ApiResponse } from '../lib/API/DataFetcher';

function Index() {
  const { fetchData, status, data, error }: ApiResponse = useDataFetcher();

  const inputRef: any = useRef();

  const handleSubmit = async () => {
    await fetchData(inputRef.current.value);
  };

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="min-h-screen max-w-screen">
        <div className="text-center items-center">
          <div className="p-8">
            <h1 className="text-9xl rock-3d-logo">
              JegPuster<b>Ikke</b>
            </h1>
            <div className="grid justify-center items-center p-8">
              <div className="text-center p-8">
                <input ref={inputRef} type="text" className=" w-1/2 border-2" placeholder="Enter user input" />
                <button onClick={handleSubmit}>Search for Data</button>
              </div>
              <p> AQI: {data?.data.time[0].variables.AQI.value}</p>
              <p> Lokasjon: {data?.location.name}</p>
              <p>pm25={data?.data.time[0].variables.AQI.pm25}</p>
              <p>pm10={data?.data.time[0].variables.AQI.pm10}</p>
              <div className="">
                <BouncingSVGElements
                  pm25={data?.data.time[0].variables.AQI.pm25}
                  pm10={data?.data.time[0].variables.AQI.pm10}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
