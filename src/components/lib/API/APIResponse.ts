export interface AQIint {
  units: string;
  value: any;
  pm10: any;
  pm25: any;
  no2: any;
  o3: any;
}

interface stdconcentration {
  value: number;
  units: string;
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

interface stdconcentrations {
  [key: string]: stdconcentration;
}

interface stdvariables {
  AQI: AQIint;
  concentrations: stdconcentrations;
}

interface stdlocation {
  name: string;
  path: string;
  longitude: number;
  latitude: number;
  areacode: string;
}

export interface stdtime {
  from: Date;
  to: Date;
  variables: stdvariables;
}

export interface stdtimes {
  time: stdtime[];
}

export interface APIStandard {
  data: stdtimes;
  dominantPollutant?: any;
  location: stdlocation;
  stationID?: string;
  description?: string;
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
  AQI: Aqi;
  no2_concentration: No2Concentration;
  AQI_no2: AqiNo2;
  no2_nonlocal_fraction: No2NonlocalFraction;
  no2_local_fraction_traffic_exhaust: No2LocalFractionTrafficExhaust;
  no2_local_fraction_shipping: No2LocalFractionShipping;
  no2_local_fraction_heating: No2LocalFractionHeating;
  no2_local_fraction_industry: No2LocalFractionIndustry;
  pm10_concentration: Pm10Concentration;
  AQI_pm10: AqiPm10;
  pm10_nonlocal_fraction: Pm10NonlocalFraction;
  pm10_nonlocal_fraction_seasalt: Pm10NonlocalFractionSeasalt;
  pm10_local_fraction_traffic_exhaust: Pm10LocalFractionTrafficExhaust;
  pm10_local_fraction_traffic_nonexhaust: Pm10LocalFractionTrafficNonexhaust;
  pm10_local_fraction_shipping: Pm10LocalFractionShipping;
  pm10_local_fraction_heating: Pm10LocalFractionHeating;
  pm10_local_fraction_industry: Pm10LocalFractionIndustry;
  pm25_concentration: Pm25Concentration;
  AQI_pm25: AqiPm25;
  pm25_nonlocal_fraction: Pm25NonlocalFraction;
  pm25_nonlocal_fraction_seasalt: Pm25NonlocalFractionSeasalt;
  pm25_local_fraction_traffic_exhaust: Pm25LocalFractionTrafficExhaust;
  pm25_local_fraction_traffic_nonexhaust: Pm25LocalFractionTrafficNonexhaust;
  pm25_local_fraction_shipping: Pm25LocalFractionShipping;
  pm25_local_fraction_heating: Pm25LocalFractionHeating;
  pm25_local_fraction_industry: Pm25LocalFractionIndustry;
  o3_concentration: O3Concentration;
  AQI_o3: AqiO3;
  o3_nonlocal_fraction: O3NonlocalFraction;
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
