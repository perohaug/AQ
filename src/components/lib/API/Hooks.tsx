import { useState, useEffect } from 'react';
import { APIStandard, METResponse, WAQIResponse } from './APIResponse';
import { ApiResponse } from './DataFetcher';

// useApi1Data hook
const useApi1Data = (url: string): METResponse => {
  const [data, setData] = useState<METResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const apiData: METResponse = await response.json();
        setData(apiData);
      } catch (error) {
        setError('Error fetching data from API MET');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  if (loading) {
    // You might handle loading state here
    throw new Error('The data is still being loaded');
  }

  if (error) {
    // You might handle error state here
    throw new Error('Error fetching data from API MET');
  }

  return data as METResponse;
};

// useApi2Data hook
const useApi2Data = (url: string): WAQIResponse => {
  const [data, setData] = useState<WAQIResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const apiData: WAQIResponse = await response.json();
        setData(apiData);
      } catch (error) {
        setError('Error fetching data from WAQI');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  if (loading) {
    throw new Error('The data is still being loaded');
  }

  if (error) {
    throw new Error('Error fetching data from API WAQI');
  }

  return data as WAQIResponse;
};

// Your main component
const DataStandard = ({ url }: { url: string }): ApiResponse | null => {
  //   const [apiData, setApiData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (url.includes('met')) {
        try {
          const endpointAData: METResponse = await useApi1Data(url);
          console.log('endpointAData:', endpointAData);
          // Set the apiData state when data is available
          //   setApiData(endpointAData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      if (url.includes('waqi')) {
        try {
          const endpointBData: WAQIResponse = await useApi2Data(url);
          console.log('endpointAData:', endpointBData);

          // Set the apiData state when data is available
          //   setApiData(endpointBData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [url]); // Include url in dependency array to re-run effect when url changes

  return null;
};

export default DataStandard;
