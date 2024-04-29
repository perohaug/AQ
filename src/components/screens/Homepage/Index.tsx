import { useContext, useEffect, useRef, useState } from 'react';
import { Head } from '~/components/shared/Head';
import BouncingSVGElements from '~/components/lib/BouncingSVGElements';
import useDataFetcher, { ApiResponse } from '~/components/lib/API/DataFetcher';
import AqMessage from './AqMessage';
import UserGroups from './UserGroups';
import PopUp from '../PopUp';
import { aqMessage } from '../TextContent/aqMessageInfo';
// import { useStation, useStationUpdate } from '~/components/contexts/StationContext';
import { useStationContext } from '~/components/contexts/StationContext';
import BackButton from '~/components/router/BackButton';
import { APIStandard } from '~/components/lib/API/APIResponse';

function Index() {
  const { fetchData, status, data, error }: ApiResponse = useDataFetcher();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testingData, setTestingData] = useState<APIStandard | null>(null);
  const [testingData2, setTestingData2] = useState<APIStandard | null>(null);
  const aqValue = data?.data.time[0].variables.AQI.text || 'low';

  function highData(test: APIStandard) {
    const highTest: APIStandard = {
      ...test,
      data: {
        time: [
          {
            from: test.data.time[0].from,
            to: test.data.time[0].to,
            variables: {
              AQI: {
                text: 'high',
                value: 100,
                pm10: undefined,
                pm25: undefined,
                no2: undefined,
                o3: undefined,
              },
              concentrations: test.data.time[0].variables.concentrations,
            },
          },
        ],
      },
    };
    setTestingData2(highTest);
  }

  const aqMessageValue = aqMessage[aqValue];
  const inputRef: any = useRef();

  const handleSubmit = async () => {
    await fetchData(`https://api.met.no/weatherapi/airqualityforecast/0.1/?station=NO0102A`);
    // await fetchData(`highTest`);
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
          <h1 className="text-9xl rock-3d-logo">JegPuster</h1>

          <AqMessage aqValue={data?.data.time[0].variables.AQI.text} location={data?.location.name} />
          <UserGroups aqValue={data?.data.time[0].variables.AQI.text} />
        </div>

        <p className="text-xl font-extralight mt-48 ml-4">
          Besøk
          <a className="font-medium" href="https://luftkvalitet.miljodirektoratet.no/" rel="stylesheet">
            Miljødirektoret
          </a>
          for mer detaljer om luftkvalitet{' '}
        </p>
      </div>
    </>
  );
}

export default Index;
