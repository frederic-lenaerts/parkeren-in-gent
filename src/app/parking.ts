export interface Parking {
  datasetid: string;
  recordid: string;
  fields: Fields;
  geometry: Geometry;
  record_timestamp: string;
}

export interface Fields {
  totalcapacity_test: number;
  lastmodifieddate: string;
  open: string;
  id: string;
  lastupdate: string;
  from: string;
  daysopen: string;
  openingtimes: string;
  suggestedfullthreshold: number;
  to: string;
  geo_location: number[];
  latitude: string;
  suggestedcapacity: string;
  contactinfo: string;
  description: string;
  city: string;
  suggestedfreethreshold: number;
  capacityrounding: number;
  availablecapacity: number;
  address: string;
  newopeningtimes: string;
  name: string;
  longitude: number;
  parkingserver: string;
  parkingstatus: string;
  totalcapacity: number;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}
