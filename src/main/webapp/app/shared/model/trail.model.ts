import { ICountry } from 'app/shared/model/country.model';
import { ITrailPath } from 'app/shared/model/trail-path.model';
import { TrailType } from 'app/shared/model/enumerations/trail-type.model';

export interface ITrail {
  id?: number;
  title?: string;
  description?: string | null;
  shortDescription?: string | null;
  specialRules?: string | null;
  type?: TrailType;
  price?: number | null;
  enterLat?: number | null;
  enterLong?: number | null;
  flagUnavailable?: boolean | null;
  flagWater?: boolean | null;
  flagBirdwatching?: boolean | null;
  flagReligious?: boolean | null;
  flagFishing?: boolean | null;
  flagParking?: boolean | null;
  flagWC?: boolean | null;
  flagCamping?: boolean | null;
  flagPicnic?: boolean | null;
  flagStreetfood?: boolean | null;
  source?: string | null;
  adminComment?: string | null;
  country?: ICountry | null;
  trailPaths?: ITrailPath[] | null;
}

export const defaultValue: Readonly<ITrail> = {
  flagUnavailable: false,
  flagWater: false,
  flagBirdwatching: false,
  flagReligious: false,
  flagFishing: false,
  flagParking: false,
  flagWC: false,
  flagCamping: false,
  flagPicnic: false,
  flagStreetfood: false,
};
