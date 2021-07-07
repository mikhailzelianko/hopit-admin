import { ITrailPathWaypoint } from 'app/shared/model/trail-path-waypoint.model';
import { ITrail } from 'app/shared/model/trail.model';

export interface ITrailPath {
  id?: number;
  title?: string;
  description?: string | null;
  trailPathWaypoints?: ITrailPathWaypoint[] | null;
  trail?: ITrail | null;
}

export const defaultValue: Readonly<ITrailPath> = {};
