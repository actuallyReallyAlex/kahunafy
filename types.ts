import EventEmitter from "events";
import Configstore from "configstore";

export interface AppState {
  config: Configstore;
  currentBreak: SurfSpotData;
  currentReport: SurflineReport;
  menuAction: null | string;
  menuActionEmitter: EventEmitter.EventEmitter;
}

export interface SunlightTime {
  dawn: string;
  dusk: string;
  midnight: string;
  sunrise: string;
  sunset: string;
}

interface AdvertisingData {
  spotId: string;
  sst: string;
  subregionId: string;
}

interface AnalyticsData {
  spotId: string;
  subregionId: string;
}

interface AssociatedData {
  abbrTimezone: string;
  advertising: AdvertisingData;
  analytics: AnalyticsData;
  beachesUrl: string;
  chartsUrl: string;
  href: string;
  localPhotosUrl: string;
  subregionUrl: string;
  units: UnitStandard;
  utcOffset: number;
  weatherIconPath: string;
}

interface BreadcrumData {
  href: string;
  name: string;
}

interface CameraStatusData {
  altMessage: string;
  isDown: boolean;
  message: string;
  subMessage: string;
}

interface CameraData {
  _id: string;
  alias: string;
  control: string;
  isPremium: boolean;
  isPrerecorded: boolean;
  lastPrerecordedClipStartTimeUTC: string;
  lastPrerecordedClipEndTimeUTC: string;
  nighttime: boolean;
  rewindBaseUrl: string;
  rewindClip: string;
  status: CameraStatusData;
  stillUrl: string;
  streamUrl: string;
  title: string;
}

interface SpotSubregionData {
  _id: string;
  forecastStatus: string;
}

interface SpotData {
  abilityLevels: string[];
  boardTypes: string[];
  breadcrumb: BreadcrumData[];
  cameras: CameraData[];
  lat: number;
  legacyId: number;
  legacyRegionId: number;
  lon: number;
  name: string;
  subregion: SpotSubregionData;
}

interface ConditionData {
  expired: boolean;
  human: boolean;
  sortableConditions: number;
  value: string;
}

interface WindData {
  direction: number;
  speed: number;
}

interface WaveHeightData {
  human: boolean;
  humanRelation: string;
  max: number;
  min: number;
  occasional: null;
  plus: boolean;
}

interface ForecastData {
  conditions: ConditionData;
  note: null;
  waveHeight: WaveHeightData;
  wind: WindData;
}

interface TideData {
  height: number;
  timestamp: number;
  type: string;
  utcOffset: number;
}

interface TideDataGroup {
  current: TideData;
  next: TideData;
  previous: TideData;
}

interface WaterTempData {
  max: number;
  min: number;
}

interface ReportWeatherData {
  condition: string;
  temperature: number;
}

interface ReportSwellData {
  _id: string;
  direction: number;
  directionMin: number;
  height: number;
  period: number;
}

interface ForecasterData {
  iconUrl: string;
  name: string;
  title: string;
}

interface ReportData {
  body: string;
  forecaster: ForecasterData;
  timestamp: number;
}

export interface SurflineReport {
  associated: AssociatedData;
  forecast: ForecastData;
  report: ReportData;
  spot: SpotData;
  swells: ReportSwellData[];
  tide: TideDataGroup;
  units: UnitStandard;
  waterTemp: WaterTempData;
  weather: ReportWeatherData;
}

interface SurfData {
  max: number;
  min: number;
  optimalScore: number;
}

export interface SurfSpotData {
  continent: string;
  country: string;
  name: string;
  region: string;
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
