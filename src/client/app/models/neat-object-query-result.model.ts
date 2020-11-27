export interface INeatObjectQueryResult {
  airmass: number;
  archive_url: string | null;
  cutout_url: string;
  ddec: number;
  dec: number;
  delta: number;
  designation: string;
  dra: number;
  exposure: number;
  filter: string;
  instrument: string | null;
  jd: number;
  phase: number;
  preview_url: string | null;
  productid: string;
  ra: number;
  raDec?: string;
  rdot: number;
  rh: number;
  sangle: number;
  selong: number;
  source: string;
  thumbnail_url: string | null;
  tmtp: number;
  trueanomaly: number;
  unc_a: number;
  unc_b: number;
  unc_theta: number;
  vangle: number;
  vmag: number;
}