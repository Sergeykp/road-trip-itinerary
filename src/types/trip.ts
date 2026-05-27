export interface TripLink {
  label: string;
  url: string;
}

export interface StopInfo {
  icon: string;
  text: string;
}

export interface Stop {
  icon: string;
  name: string;
  nameRu: string;
  time: string;
  desc: string;
  links?: TripLink[];
  tips?: string[];
  info?: StopInfo[];
  q: string;
  imgs: string[];
}

export interface DaySummaryLine {
  icon: string;
  text: string;
}

export interface Day {
  date: string;
  title: string;
  sub: string;
  emoji: string;
  dot: string;
  summary?: DaySummaryLine[];
  stops: Stop[];
}

export interface TripMeta {
  title: string;
  route: string;
  subtitle: string;
}

export interface TripData {
  meta: TripMeta;
  days: Day[];
}

export interface SelectedStop {
  dayIndex: number;
  stopIndex: number;
}
