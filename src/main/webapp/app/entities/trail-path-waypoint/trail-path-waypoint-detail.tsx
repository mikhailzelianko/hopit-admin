import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './trail-path-waypoint.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const TrailPathWaypointDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const trailPathWaypointEntity = useAppSelector(state => state.trailPathWaypoint.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="trailPathWaypointDetailsHeading">
          <Translate contentKey="hopitApp.trailPathWaypoint.detail.title">TrailPathWaypoint</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{trailPathWaypointEntity.id}</dd>
          <dt>
            <span id="waypointLat">
              <Translate contentKey="hopitApp.trailPathWaypoint.waypointLat">Waypoint Lat</Translate>
            </span>
          </dt>
          <dd>{trailPathWaypointEntity.waypointLat}</dd>
          <dt>
            <span id="waypointLong">
              <Translate contentKey="hopitApp.trailPathWaypoint.waypointLong">Waypoint Long</Translate>
            </span>
          </dt>
          <dd>{trailPathWaypointEntity.waypointLong}</dd>
          <dt>
            <Translate contentKey="hopitApp.trailPathWaypoint.trailpath">Trailpath</Translate>
          </dt>
          <dd>{trailPathWaypointEntity.trailpath ? trailPathWaypointEntity.trailpath.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/trail-path-waypoint" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/trail-path-waypoint/${trailPathWaypointEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TrailPathWaypointDetail;
