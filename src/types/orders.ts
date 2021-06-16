import {Days, Services, ServicesPer} from './enums';

export type Agreement = {
  _id: string;
  account_id: {
    account_name: string
  };
  container_qty: string;
  demand_rate: string;
  end_date: string;
  group_id: string;
  agreement_id: string;
  is_active: boolean;
  is_recurring: boolean;
  location: string;
  notes: string;
  owner_id: string;
  recurring_rate: string;
  services: string;
  start_date: string;
  url: string;
  day_freq: number[];

  // sun_freq: number;
  // mon_freq: number;
  // tue_freq: number;
  // wed_freq: number;
  // thu_freq: number;
  // fri_freq: number;
  // sat_freq: number;
};

export type AddAgreement = {
  _id: string;
  account_id: string;
  container_qty: string;
  demand_rate: string;
  end_date: string;
  group_id: string;
  agreement_id: string;
  is_active: boolean;
  is_recurring: boolean;
  location: string;
  notes: string;
  owner_id: string;
  recurring_rate: string;
  services: string;
  start_date: string;
  url: string;
  day_freq: number[];
  
  // sun_freq: number;
  // mon_freq: number;
  // tue_freq: number;
  // wed_freq: number;
  // thu_freq: number;
  // fri_freq: number;
  // sat_freq: number;
};

export type Order = {
  _id: string;
  account_id: {
    account_name: string
  };
  agreement_id?: string;
  containers_serviced?: number;
  completed_geo_location?: string;
  completed_time?: Date;
  container_qty: Number;
  demand_rate: string;
  group_id: string;
  haul_status: boolean;
  is_active: boolean;
  is_demo: boolean;
  is_recurring: boolean;
  monthly_rate: string;
  location: string;
  notes: string[];
  order_id: string;
  order_status: string;
  services: string;
  service_date: string;
  service_day: string;
  url: string[];
  route_id?: string;
};

export type AddOrder = {
  _id: string;
  account_id: string;
  agreement_id?: string;
  containers_serviced?: number;
  completed_geo_location?: string;
  completed_time?: Date;
  container_qty: Number;
  demand_rate: string;
  group_id: string;
  haul_status: boolean;
  is_active: boolean;
  is_demo: boolean;
  is_recurring: boolean;
  monthly_rate: string;
  location: string;
  notes: string[];
  order_id: string;
  order_status: string;
  services: string;
  service_date: string;
  service_day: string;
  url: string[];
};

export type Demo = {
  _id: string;
  account_id: string;
  created: string;
};
