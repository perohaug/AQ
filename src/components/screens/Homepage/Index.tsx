import { useRef } from 'react';
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
    await fetchData(inputRef.current.value);
  };

  return (
    <>
      <Head title="TOP PAGE" />
      <PopUp />
      <div className="min-h-screen max-w-screen bg-background">
        <div className="text-center items-center">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 className="text-9xl rock-3d-logo">JegPuster</h1>
          </div>
          <AqMessage />
          <UserGroups />
        </div>
      </div>
    </>
  );
}

export default Index;
