import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import District from './district';
import Region from './region';
import Country from './country';
import Trail from './trail';
import TrailPath from './trail-path';
import TrailPathWaypoint from './trail-path-waypoint';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}district`} component={District} />
      <ErrorBoundaryRoute path={`${match.url}region`} component={Region} />
      <ErrorBoundaryRoute path={`${match.url}country`} component={Country} />
      <ErrorBoundaryRoute path={`${match.url}trail`} component={Trail} />
      <ErrorBoundaryRoute path={`${match.url}trail-path`} component={TrailPath} />
      <ErrorBoundaryRoute path={`${match.url}trail-path-waypoint`} component={TrailPathWaypoint} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
