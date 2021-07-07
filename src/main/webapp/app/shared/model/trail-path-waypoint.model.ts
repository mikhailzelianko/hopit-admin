import { ITrailPath } from 'app/shared/model/trail-path.model';

export interface ITrailPathWaypoint {
  id?: number;
  waypointLat?: number | null;
  waypointLong?: number | null;
  trailpath?: ITrailPath | null;
}

export const defaultValue: Readonly<ITrailPathWaypoint> = {};
