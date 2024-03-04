import { useState, useEffect } from 'react';
import { APIStandard, METResponse, WAQIResponse } from './APIResponse';

export interface ApiResponse {
  status: 'loading' | 'success' | 'error';
  data: APIStandard | null;
  error: string | null;
}

function DataFetcher(url?: string): ApiResponse {
  const [apiData, setApiData] = useState<APIStandard>(null as unknown as APIStandard);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!url) {
          throw new Error('URL is undefined');
        }
        const apiResponse = await fetch(url);
        const apiDataResponse: METResponse = await apiResponse.json();
        const apiData2: ApiResponse = {
          data: {
            data: {
              time: {
                from: new Date(apiDataResponse.data.time[0].from),
                to: new Date(apiDataResponse.data.time[0].to),
                variables: {
                  AQI: {
                    units: 'µg/m³',
                    value: apiDataResponse.data.time[0].variables.AQI.value,
                    pm10: apiDataResponse.data.time[0].variables.AQI_pm10.value,
                    pm25: apiDataResponse.data.time[0].variables.AQI_pm25.value,
                    no2: apiDataResponse.data.time[0].variables.AQI_no2.value,
                    o3: apiDataResponse.data.time[0].variables.AQI_o3.value,
                  },
                  concentrations: {
                    PM10: {
                      value: apiDataResponse.data.time[0].variables.pm10_concentration.value,
                      units: 'µg/m³',
                      origin: {
                        langtransport: {
                          value: apiDataResponse.data.time[0].variables.pm10_nonlocal_fraction.value,
                          units: 'µg/m³',
                        },
                        sjosalt: {
                          value: apiDataResponse.data.time[0].variables.pm10_nonlocal_fraction_seasalt.value,
                          units: 'µg/m³',
                        },
                        eksos: {
                          value: apiDataResponse.data.time[0].variables.pm10_local_fraction_traffic_exhaust.value,
                          units: 'µg/m³',
                        },
                        veistov: {
                          value: apiDataResponse.data.time[0].variables.pm10_local_fraction_traffic_nonexhaust.value,
                          units: 'µg/m³',
                        },
                        skip: {
                          value: apiDataResponse.data.time[0].variables.pm10_local_fraction_shipping.value,
                          units: 'µg/m³',
                        },
                        vedfyring: {
                          value: apiDataResponse.data.time[0].variables.pm10_local_fraction_heating.value,
                          units: 'µg/m³',
                        },
                        industri: {
                          value: apiDataResponse.data.time[0].variables.pm10_local_fraction_industry.value,
                          units: 'µg/m³',
                        },
                      },
                    },
                    PM25: {
                      value: apiDataResponse.data.time[0].variables.pm25_concentration.value,
                      units: 'µg/m³',
                      origin: {
                        langtransport: {
                          value: apiDataResponse.data.time[0].variables.pm25_nonlocal_fraction.value,
                          units: 'µg/m³',
                        },
                        sjosalt: {
                          value: apiDataResponse.data.time[0].variables.pm25_nonlocal_fraction_seasalt.value,
                          units: 'µg/m³',
                        },
                        eksos: {
                          value: apiDataResponse.data.time[0].variables.pm25_local_fraction_traffic_exhaust.value,
                          units: 'µg/m³',
                        },
                        veistov: {
                          value: apiDataResponse.data.time[0].variables.pm25_local_fraction_traffic_nonexhaust.value,
                          units: 'µg/m³',
                        },
                        skip: {
                          value: apiDataResponse.data.time[0].variables.pm25_local_fraction_shipping.value,
                          units: 'µg/m³',
                        },
                        vedfyring: {
                          value: apiDataResponse.data.time[0].variables.pm25_local_fraction_heating.value,
                          units: 'µg/m³',
                        },
                        industri: {
                          value: apiDataResponse.data.time[0].variables.pm25_local_fraction_industry.value,
                          units: 'µg/m³',
                        },
                      },
                    },
                    NO2: {
                      value: apiDataResponse.data.time[0].variables.no2_concentration.value,
                      units: 'µg/m³',
                      origin: {
                        langtransport: {
                          value: apiDataResponse.data.time[0].variables.no2_nonlocal_fraction.value,
                          units: 'µg/m³',
                        },
                        eksos: {
                          value: apiDataResponse.data.time[0].variables.no2_local_fraction_traffic_exhaust.value,
                          units: 'µg/m³',
                        },
                        skip: {
                          value: apiDataResponse.data.time[0].variables.no2_local_fraction_shipping.value,
                          units: 'µg/m³',
                        },
                        vedfyring: {
                          value: apiDataResponse.data.time[0].variables.no2_local_fraction_heating.value,
                          units: 'µg/m³',
                        },
                        industri: {
                          value: apiDataResponse.data.time[0].variables.no2_local_fraction_industry.value,
                          units: 'µg/m³',
                        },
                      },
                    },
                    O3: {
                      value: apiDataResponse.data.time[0].variables.o3_concentration.value,
                      units: 'µg/m³',
                      origin: {
                        langtransport: {
                          value: apiDataResponse.data.time[0].variables.o3_nonlocal_fraction.value,
                          units: 'µg/m³',
                        },
                      },
                    },
                  },
                },
              },
            },
            location: {
              name: apiDataResponse.meta.location.name,
              path: apiDataResponse.meta.location.path,
              longitude: parseInt(apiDataResponse.meta.location.longitude),
              latitude: parseInt(apiDataResponse.meta.location.latitude),
              areacode: apiDataResponse.meta.location.areacode,
            },
            stationID: apiDataResponse.meta.superlocation.superareacode,
            dominantPollutant: apiDataResponse.meta.sublocations,
            description: apiDataResponse.data.time[0].variables.AQI.units,
          },
          status: 'loading',
          error: null,
        };
        setApiData(apiData2.data as APIStandard);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return { status, data: apiData, error };
}

export default DataFetcher;

// const apiData: APIStandard = {
//   data: {
//     time: {
//       from: new Date(apiDataResponse.data.time.s),
//       to: new Date(apiDataResponse.data.time.e),
//       variables: {
//         AQI: {
//           units: 'Standardized Index',
//           value: apiDataResponse.data.aqi,
//           pm10: apiDataResponse.data.iaqi.pm10.v,
//           pm25: apiDataResponse.data.iaqi.pm25.v,
//           no2: apiDataResponse.data.iaqi.no2.v,
//           o3: apiDataResponse.data.iaqi.o3.v,
//         },
//         concentrations: {
//           no2_concentration: {
//             value: apiDataResponse.data.iaqi.no2.v,
//             units: 'µg/m³',
//             origin: {
//               langtransport: {
//                 value: apiDataResponse.data.iaqi.no2.v,
//                 units: 'µg/m³',
//               },
//               sjosalt: {
//                 value: apiDataResponse.data.iaqi.no2.v,
//                 units: 'µg/m³',
//               },
//               eksos: {
//                 value: apiDataResponse.data.iaqi.no2.v,
//                 units: 'µg/m³',
//               },
//               veistov: {
//                 value: apiDataResponse.data.iaqi.no2.v,
//                 units: 'µg/m³',
//               },
//               skip: {
//                 value: apiDataResponse.data.iaqi.no2.v,
//                 units: 'µg/m³',
//               },
//               vedfyring: {
//                 value: apiDataResponse.data.iaqi.no2.v,
//                 units: 'µg/m³',
//               },
//               industri: {
//                 value: apiDataResponse.data.iaqi.no2.v,
//                 units: 'µg/m³',
//               },
//             },
//           },
//           pm10_concentration: {
//             value: apiDataResponse.data.iaqi.pm10.v,
//             units: 'µg/m³',
//             origin: {
//               langtransport: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               sjosalt: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               eksos: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               veistov: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               skip: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               vedfyring: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               industri: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//             },
//           },
//           pm25_concentration: {
//             value: apiDataResponse.data.iaqi.pm10.v,
//             units: 'µg/m³',
//             origin: {
//               langtransport: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               sjosalt: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               eksos: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               veistov: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               skip: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               vedfyring: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               industri: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//             },
//           },
//           o3_concentration: {
//             value: apiDataResponse.data.iaqi.pm10.v,
//             units: 'µg/m³',
//             origin: {
//               langtransport: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               eksos: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               skip: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               veistov: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               vedfyring: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//               industri: {
//                 value: apiDataResponse.data.iaqi.pm10.v,
//                 units: 'µg/m³',
//               },
//             },
//           },
//         },
//       },
//     },
//   },
//   dominantPollutant: apiDataResponse.data.dominentpol,
//   location: {
//     name: apiDataResponse.data.city.name,
//     path: apiDataResponse.data.city.url,
//     longitude: apiDataResponse.data.city.geo[0],
//     latitude: apiDataResponse.data.city.geo[1],
//     areacode: apiDataResponse.data.city.areacode,
//   },
//   stationID: apiDataResponse.data.idx,
// };
