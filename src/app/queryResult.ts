export interface QueryResult<T> {
  nhits: number;
  parameters: Parameters;
  records: T[];
  facet_groups: FacetGroup[];
}

export interface FacetGroup {
  facets: Facet[];
  name: string;
}

export interface Facet {
  count: number;
  path: string;
  state: string;
  name: string;
}

export interface Parameters {
  dataset: string;
  timezone: string;
  rows: number;
  start: number;
  format: string;
  facet: string[];
}
