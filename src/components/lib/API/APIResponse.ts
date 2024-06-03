export interface AQIint {
  text: string;
  value: any;
  pm10: any;
  pm25: any;
  no2: any;
  o3: any;
}

export interface Contributor {
  stdconcentration: string;
  topContributors: string;
}
export interface stdconcentration {
  value: number;
  units: string;
  topContributers?: {
    veistov?: number;
    eksos?: number;
    langtransport?: number;
    skip?: number;
    vedfyring?: number;
    industri?: number;
  };
  origin?:
    | {
        langtransport?: {
          value: number;
          units: string;
        };
        sjosalt?: {
          value: number;
          units: string;
        };
        eksos?: {
          value: number;
          units: string;
        };
        veistov?: {
          value: number;
          units: string;
        };
        skip?: {
          value: number;
          units: string;
        };
        vedfyring?: {
          value: number;
          units: string;
        };
        industri?: {
          value: number;
          units: string;
        };
      }
    | undefined;
}

export interface stdconcentrations {
  [key: string]: stdconcentration;
}

interface stdvariables {
  AQI: AQIint;
  concentrations: stdconcentrations;
}

interface stdlocation {
  path: string;
  name: string;
  longitude: number;
  latitude: number;
  areacode: string;
}

export interface stdtime {
  from: Date;
  to: Date;
  variables: stdvariables;
  topContribs?: Contributor;
}

export interface stdtimes {
  time: stdtime[];
}

export interface APIStandard {
  data: stdtimes;
  dominantPollutant: string;
  location: stdlocation;
  stationID?: string;
}

export interface METResponse {
  meta: METMeta;
  data: METData;
}

export interface METMeta {
  reftime: string;
  location: Location;
  superlocation: Superlocation;
  sublocations: any[];
}

export interface Location {
  name: string;
  path: string;
  longitude: string;
  latitude: string;
  areacode: string;
}

export interface Superlocation {
  name: string;
  path: string;
  longitude: string;
  latitude: string;
  areacode: string;
  areaclass: string;
  superareacode: string;
}

export interface METData {
  time: METTime[];
}

export interface METTime {
  from: string;
  to: string;
  variables: METVariables;
}

export interface METVariables {
  [key: string]: {
    value: number;
    units: string;
  };
}

export interface Aqi {
  value: number;
  units: string;
}

export interface No2Concentration {
  value: number;
  units: string;
}

export interface AqiNo2 {
  value: number;
  units: string;
}

export interface No2NonlocalFraction {
  value: number;
  units: string;
}

export interface No2LocalFractionTrafficExhaust {
  value: number;
  units: string;
}

export interface No2LocalFractionShipping {
  value: number;
  units: string;
}

export interface No2LocalFractionHeating {
  value: number;
  units: string;
}

export interface No2LocalFractionIndustry {
  value: number;
  units: string;
}

export interface Pm10Concentration {
  value: number;
  units: string;
}

export interface AqiPm10 {
  value: number;
  units: string;
}

export interface Pm10NonlocalFraction {
  value: number;
  units: string;
}

export interface Pm10NonlocalFractionSeasalt {
  value: number;
  units: string;
}

export interface Pm10LocalFractionTrafficExhaust {
  value: number;
  units: string;
}

export interface Pm10LocalFractionTrafficNonexhaust {
  value: number;
  units: string;
}

export interface Pm10LocalFractionShipping {
  value: number;
  units: string;
}

export interface Pm10LocalFractionHeating {
  value: number;
  units: string;
}

export interface Pm10LocalFractionIndustry {
  value: number;
  units: string;
}

export interface Pm25Concentration {
  value: number;
  units: string;
}

export interface AqiPm25 {
  value: number;
  units: string;
}

export interface Pm25NonlocalFraction {
  value: number;
  units: string;
}

export interface Pm25NonlocalFractionSeasalt {
  value: number;
  units: string;
}

export interface Pm25LocalFractionTrafficExhaust {
  value: number;
  units: string;
}

export interface Pm25LocalFractionTrafficNonexhaust {
  value: number;
  units: string;
}

export interface Pm25LocalFractionShipping {
  value: number;
  units: string;
}

export interface Pm25LocalFractionHeating {
  value: number;
  units: string;
}

export interface Pm25LocalFractionIndustry {
  value: number;
  units: string;
}

export interface O3Concentration {
  value: number;
  units: string;
}

export interface AqiO3 {
  value: number;
  units: string;
}

export interface O3NonlocalFraction {
  value: number;
  units: string;
}

export interface WAQIResponse {
  status: string;
  data: WAQIData;
}

export interface WAQIData {
  aqi: number;
  idx: number;
  attributions: Attribution[];
  city: City;
  dominentpol: string;
  iaqi: Iaqi;
  time: WAQITime;
  forecast: Forecast;
  debug: Debug;
}

export interface Attribution {
  url: string;
  name: string;
  logo?: string;
}

export interface City {
  geo: number[];
  name: string;
  url: string;
  location: string;
}

export interface Iaqi {
  co: Co;
  dew: Dew;
  h: H;
  no2: No2;
  o3: O3;
  p: P;
  pm10: Pm10;
  pm25: Pm25;
  so2: So2;
  t: T;
  w: W;
}

export interface Co {
  v: number;
}

export interface Dew {
  v: number;
}

export interface H {
  v: number;
}

export interface No2 {
  v: number;
}

export interface O3 {
  v: number;
}

export interface P {
  v: number;
}

export interface Pm10 {
  v: number;
}

export interface Pm25 {
  v: number;
}

export interface So2 {
  v: number;
}

export interface T {
  v: number;
}

export interface W {
  v: number;
}

export interface WAQITime {
  s: string;
  tz: string;
  v: number;
  iso: string;
}

export interface Forecast {
  daily: Daily;
}

export interface Daily {
  o3: O32[];
  pm10: Pm102[];
  pm25: Pm252[];
}

export interface O32 {
  avg: number;
  day: string;
  max: number;
  min: number;
}

export interface Pm102 {
  avg: number;
  day: string;
  max: number;
  min: number;
}

export interface Pm252 {
  avg: number;
  day: string;
  max: number;
  min: number;
}

export interface Debug {
  sync: string;
}
