import EventEmitter from "events";

export interface AppState {
  menuAction: null | string;
  menuActionEmitter: EventEmitter.EventEmitter;
}

interface SunlightTime {
  dawn: string;
  dusk: string;
  midnight: string;
  sunrise: string;
  sunset: string;
}

interface SurfData {
  max: number;
  min: number;
  optimalScore: number;
}

export interface SurfSpotData {
  continent: string;
  country: string;
  region: string;
  name: string;
  spotId: string;
}

export type SurfSpotGroup = SurfSpotData[];

export interface SurfWindow {
  max: string;
  min: string;
}

interface SwellData {
  direction: number;
  directionMin: number;
  height: number;
  period: number;
  optimalScore: number;
}

export type TimesData = string[];

export interface WaveData {
  surf: SurfData;
  swells: SwellData[];
  timestamp: string;
}

interface LocationData {
  lat: number;
  lon: number;
}

type UnitStandard = {
  temperature: "F";
  tideHeight: "FT";
  waveHeight: "FT";
  windSpeed: "KTS";
};

interface WaveResponseAssociated {
  forecastLocation: LocationData;
  location: LocationData;
  offshoreLocation: LocationData;
  units: UnitStandard;
  utcOffset: number;
}

type WaveResponseData = {
  wave: WaveDataGroup;
};

export interface WaveResponse {
  associated: WaveResponseAssociated;
  data?: WaveResponseData;
}

export interface WeatherData {
  condition: string;
  temperature: number;
  timestamp: string;
}

export type WaveDataGroup = WaveData[];

export interface WeatherDataGroup {
  sunlightTimes: SunlightTime[];
  weather: WeatherData[];
}

interface WeatherResponseAssociated {
  units: UnitStandard;
  utcOffset: number;
  weatherIconPath: string;
}

export interface WeatherResponse {
  associated: WeatherResponseAssociated;
  data?: WeatherDataGroup;
}
