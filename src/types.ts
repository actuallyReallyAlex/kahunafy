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

interface WeatherData {
  condition: string;
  temperature: number;
  timestamp: string;
}

export type WaveDataGroup = WaveData[];

export interface WeatherDataGroup {
  sunlightTimes: SunlightTime[];
  weather: WeatherData[];
}
