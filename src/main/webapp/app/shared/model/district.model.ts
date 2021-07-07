import { IRegion } from 'app/shared/model/region.model';

export interface IDistrict {
  id?: number;
  districtName?: string;
  region?: IRegion | null;
}

export const defaultValue: Readonly<IDistrict> = {};
