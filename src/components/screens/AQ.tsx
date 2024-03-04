import React, { ReactElement, useEffect, useState } from 'react';
import { Head } from '~/components/shared/Head';
import AQI from '~/components/lib/AQI';
import GraphComponent from '~/components/lib/GraphComponent';
import { ApiResponse } from '../lib/API/DataFetcher';
import DataFetcher from '../lib/API/DataFetcher';
import DataStandard from '../lib/API/Hooks';

function AQPage() {
  return (
    <>
      <Head title={'Air Quality representation'}></Head>
      <div className="grid">
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
}

export default AQPage;
