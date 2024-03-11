import { useState, useEffect, useCallback } from 'react';
import { APIStandard, METResponse, METTime, WAQIResponse, stdtime, stdtimes } from './APIResponse';

export interface ApiResponse {
  fetchData: (userInput: string) => Promise<void>;
  status: 'loading' | 'success' | 'error';
  data: APIStandard | null;
  error: string | null;
}

function PM25AQI(x: number) {
  let aqi = 1;
  if (x < 0) {
    aqi = 1;
  } else if (x < 30.0) {
    aqi = x / 30.0 + 1;
  } else if (x < 50.0) {
    aqi = (x - 30.0) / (50.0 - 30.0) + 2;
  } else if (x < 150.0) {
    aqi = (x - 50.0) / (150.0 - 50.0) + 3;
  } else {
    aqi = x / 150.0 + 3;
  }

  if (aqi > 4.999) {
    aqi = 4.999;
  }

  return aqi;
}

function PM10AQI(x: number) {
  let aqi = 1;
  if (x < 0) {
    aqi = 1;
  } else if (x < 60.0) {
    aqi = x / 60.0 + 1;
  } else if (x < 120.0) {
    aqi = (x - 60.0) / (120.0 - 60.0) + 2;
  } else if (x < 400.0) {
    aqi = (x - 120.0) / (400.0 - 120.0) + 3;
  } else {
    aqi = x / 400.0 + 3;
  }

  if (aqi > 4.999) {
    aqi = 4.999;
  }

  return aqi;
}

function NO2AQI(x: number) {
  let aqi = 1;
  if (x < 0) {
    aqi = 1;
  } else if (x < 100.0) {
    aqi = x / 100.0 + 1;
  } else if (x < 200.0) {
    aqi = (x - 100.0) / (200.0 - 100.0) + 2;
  } else if (x < 400.0) {
    aqi = (x - 200.0) / (400.0 - 200.0) + 3;
  } else {
    aqi = x / 400.0 + 3;
  }

  if (aqi > 4.999) {
    aqi = 4.999;
  }

  return aqi;
}

function SO2AQI(x: number) {
  let aqi = 1;
  if (x < 0) {
    aqi = 1;
  } else if (x < 100.0) {
    aqi = x / 100.0 + 1;
  } else if (x < 350.0) {
    aqi = (x - 100.0) / (350.0 - 100.0) + 2;
  } else if (x < 500.0) {
    aqi = (x - 350.0) / (500.0 - 350.0) + 3;
  } else {
    aqi = x / 500.0 + 3;
  }

  if (aqi > 4.999) {
    aqi = 4.999;
  }

  return aqi;
}

function O3AQI(x: number) {
  let aqi = 1;
  if (x < 0) {
    aqi = 1;
  } else if (x < 100.0) {
    aqi = x / 100.0 + 1;
  } else if (x < 180.0) {
    aqi = (x - 100.0) / (180.0 - 100.0) + 2;
  } else if (x < 240.0) {
    aqi = (x - 180.0) / (240.0 - 180.0) + 3;
  } else {
    aqi = x / 240.0 + 3;
  }

  if (aqi > 4.999) {
    aqi = 4.999;
  }

  return aqi;
}

function waqi(x: number) {
  let waqi = 1;
  if (x < 0) {
    waqi = 1;
  } else if (x < 50.0) {
    waqi = x / 50.0 + 1;
  } else if (x < 100.0) {
    waqi = (x - 50.0) / (100.0 - 50.0) + 2;
  } else if (x < 150.0) {
    waqi = (x - 100.0) / (150.0 - 100.0) + 3;
  } else {
    waqi = x / 150.0 + 3;
  }

  return Math.round(waqi);
}

function AQI(x: number) {
  let aqi = 1;
  if (x < 0) {
    aqi = 1;
  } else if (x < 2.0) {
    aqi = x / 2.0 + 1;
  } else if (x < 3.0) {
    aqi = (x - 2.0) / (3.0 - 2.0) + 2;
  } else if (x < 4.0) {
    aqi = (x - 3.0) / (4.0 - 3.0) + 3;
  } else {
    aqi = x / 4.0 + 3;
  }

  if (aqi > 4.999) {
    aqi = 4.999;
  }

  return aqi;
}

const useDataFetcher = (userInput?: string): ApiResponse => {
  const [apiData, setApiData] = useState<APIStandard>(null as unknown as APIStandard);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (userInput: string) => {
    const url = `https://api.waqi.info/feed/${userInput}/?token=22f37ad5c0fae31b55ee3304697b74c44a1a4cd0`;
    try {
      if (!userInput) {
        throw new Error('URL is undefined');
      }
      if (url.includes('met')) {
        const apiResponse = await fetch(url);
        console.log(apiResponse.status);
        const apiDataResponse: METResponse = await apiResponse.json();
        const timeData: stdtimes = {
          time: apiDataResponse.data.time.map((timeEntry: METTime) => ({
            from: new Date(timeEntry.from),
            to: new Date(timeEntry.to),
            variables: {
              AQI: {
                units: 'µg/m³',
                value: timeEntry.variables.AQI.value,
                pm10: timeEntry.variables.AQI_pm10.value,
                pm25: timeEntry.variables.AQI_pm25.value,
                no2: timeEntry.variables.AQI_no2.value,
                o3: timeEntry.variables.AQI_o3.value,
              },
              concentrations: {
                PM10: {
                  value: PM10AQI(timeEntry.variables.pm10_concentration.value),
                  units: 'µg/m³',
                  origin: {
                    langtransport: {
                      value: timeEntry.variables.pm10_nonlocal_fraction.value,
                      units: '%',
                    },
                    sjosalt: {
                      value: timeEntry.variables.pm10_nonlocal_fraction_seasalt.value,
                      units: '%',
                    },
                    eksos: {
                      value: timeEntry.variables.pm10_local_fraction_traffic_exhaust.value,
                      units: '%',
                    },
                    veistov: {
                      value: timeEntry.variables.pm10_local_fraction_traffic_nonexhaust.value,
                      units: '%',
                    },
                    skip: {
                      value: timeEntry.variables.pm10_local_fraction_shipping.value,
                      units: '%',
                    },
                    vedfyring: {
                      value: timeEntry.variables.pm10_local_fraction_heating.value,
                      units: '%',
                    },
                    industri: {
                      value: timeEntry.variables.pm10_local_fraction_industry.value,
                      units: '%',
                    },
                  },
                },
                PM25: {
                  value: timeEntry.variables.pm25_concentration.value,
                  units: 'µg/m³',
                  origin: {
                    langtransport: {
                      value: timeEntry.variables.pm25_nonlocal_fraction.value,
                      units: '%',
                    },
                    sjosalt: {
                      value: timeEntry.variables.pm25_nonlocal_fraction_seasalt.value,
                      units: '%',
                    },
                    eksos: {
                      value: timeEntry.variables.pm25_local_fraction_traffic_exhaust.value,
                      units: '%',
                    },
                    veistov: {
                      value: timeEntry.variables.pm25_local_fraction_traffic_nonexhaust.value,
                      units: '%',
                    },
                    skip: {
                      value: timeEntry.variables.pm25_local_fraction_shipping.value,
                      units: '%',
                    },
                    vedfyring: {
                      value: timeEntry.variables.pm25_local_fraction_heating.value,
                      units: '%',
                    },
                    industri: {
                      value: timeEntry.variables.pm25_local_fraction_industry.value,
                      units: '%',
                    },
                  },
                },
                NO2: {
                  value: timeEntry.variables.no2_concentration.value,
                  units: 'µg/m³',
                  origin: {
                    langtransport: {
                      value: timeEntry.variables.no2_nonlocal_fraction.value,
                      units: '%',
                    },
                    eksos: {
                      value: timeEntry.variables.no2_local_fraction_traffic_exhaust.value,
                      units: '%',
                    },
                    skip: {
                      value: timeEntry.variables.no2_local_fraction_shipping.value,
                      units: '%',
                    },
                    vedfyring: {
                      value: timeEntry.variables.no2_local_fraction_heating.value,
                      units: '%',
                    },
                    industri: {
                      value: timeEntry.variables.no2_local_fraction_industry.value,
                      units: '%',
                    },
                  },
                },
                O3: {
                  value: timeEntry.variables.o3_concentration.value,
                  units: 'µg/m³',
                  origin: {
                    langtransport: {
                      value: timeEntry.variables.o3_nonlocal_fraction.value,
                      units: 'µg/m³',
                    },
                  },
                },
              },
            },
          })),
        };

        setApiData({
          data: timeData,
          location: {
            name: apiDataResponse.meta.location.name,
            path: apiDataResponse.meta.location.path,
            longitude: parseFloat(apiDataResponse.meta.location.longitude),
            latitude: parseFloat(apiDataResponse.meta.location.latitude),
            areacode: apiDataResponse.meta.location.areacode,
          },
          stationID: apiDataResponse.meta.superlocation.superareacode,
          dominantPollutant: apiDataResponse.meta.sublocations,
        });
        setError(null);
        setStatus('success');
      } else if (url.includes('waqi')) {
        const apiResponse = await fetch(url);
        console.log(apiResponse.status);
        const apiDataResponse: WAQIResponse = await apiResponse.json();
        console.log(apiDataResponse.data.city.name);
        console.log(AQI(apiDataResponse.data.aqi));
        setApiData({
          data: {
            time: [
              {
                from: new Date(apiDataResponse.data.time.s),
                to: new Date(apiDataResponse.data.time.v),
                variables: {
                  AQI: {
                    value: waqi(apiDataResponse.data.aqi),
                    units: 'µg/m³',
                    pm10: PM10AQI(apiDataResponse.data.iaqi.pm10.v),
                    pm25: PM25AQI(apiDataResponse.data.iaqi.pm25.v),
                    no2: NO2AQI(apiDataResponse.data.iaqi.no2.v),
                    o3: O3AQI(apiDataResponse.data.iaqi.o3.v),
                  },
                  concentrations: {
                    PM10: {
                      value: apiDataResponse.data.iaqi.pm10.v,
                      units: 'µg/m³',
                      origin: {},
                    },
                    PM25: {
                      value: apiDataResponse.data.iaqi.pm25.v,
                      units: 'µg/m³',
                      origin: {},
                    },
                    NO2: {
                      value: apiDataResponse.data.iaqi.no2.v,
                      units: 'µg/m³',
                      origin: {},
                    },
                    O3: {
                      value: apiDataResponse.data.iaqi.o3.v,
                      units: 'µg/m³',
                      origin: {},
                    },
                  },
                },
              },
            ],
          },
          location: {
            name: apiDataResponse.data.city.name,
            path: apiDataResponse.data.city.name,
            longitude: apiDataResponse.data.city.geo[0],
            latitude: apiDataResponse.data.city.geo[1],
            areacode: apiDataResponse.data.city.location,
          },
          stationID: apiDataResponse.data.idx.toString(),
          dominantPollutant: apiDataResponse.data.dominentpol,
        });
        setError(null);
        setStatus(apiResponse.status === 200 ? 'success' : 'error');
      }
    } catch (error) {
      setStatus('error');
    }
  }, []);

  return { fetchData, data: apiData, status, error };
};

export default useDataFetcher;
