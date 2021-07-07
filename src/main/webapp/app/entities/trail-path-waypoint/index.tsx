import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TrailPathWaypoint from './trail-path-waypoint';
import TrailPathWaypointDetail from './trail-path-waypoint-detail';
import TrailPathWaypointUpdate from './trail-path-waypoint-update';
import TrailPathWaypointDeleteDialog from './trail-path-waypoint-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TrailPathWaypointUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TrailPathWaypointUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TrailPathWaypointDetail} />
      <ErrorBoundaryRoute path={match.url} component={TrailPathWaypoint} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TrailPathWaypointDeleteDialog} />
  </>
);

export default Routes;
