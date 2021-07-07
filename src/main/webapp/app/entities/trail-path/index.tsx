import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TrailPath from './trail-path';
import TrailPathDetail from './trail-path-detail';
import TrailPathUpdate from './trail-path-update';
import TrailPathDeleteDialog from './trail-path-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TrailPathUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TrailPathUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TrailPathDetail} />
      <ErrorBoundaryRoute path={match.url} component={TrailPath} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TrailPathDeleteDialog} />
  </>
);

export default Routes;
