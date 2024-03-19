import { useEffect, useRef } from 'react';
import { Head } from '~/components/shared/Head';
import BouncingSVGElements from '~/components/lib/BouncingSVGElements';
import useDataFetcher, { ApiResponse } from '~/components/lib/API/DataFetcher';
import AqMessage from './AqMessage';
import UserGroups from './UserGroups';
import PopUp from '../PopUp';

function Index() {
  const { fetchData, status, data, error }: ApiResponse = useDataFetcher();

  const inputRef: any = useRef();

  const handleSubmit = async () => {
    await fetchData('https://api.met.no/weatherapi/airqualityforecast/0.1/?station=NO0102A');
    // await fetchData('https://api.waqi.info/feed/bangkok/?token=22f37ad5c0fae31b55ee3304697b74c44a1a4cd0');
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <Head title="TOP PAGE" />
      <PopUp />
      <div className="min-h-screen max-w-screen bg-background">
        <div className="text-center items-center">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 className="text-9xl rock-3d-logo">JegPuster</h1>
          </div>
          <AqMessage aqValue={data?.data.time[0].variables.AQI.text} />
          <UserGroups aqValue={data?.data.time[0].variables.AQI.text} />
        </div>
      </div>
    </>
  );
}

export default Index;
