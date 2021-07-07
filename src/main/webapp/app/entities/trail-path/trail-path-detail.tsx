import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './trail-path.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const TrailPathDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const trailPathEntity = useAppSelector(state => state.trailPath.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="trailPathDetailsHeading">
          <Translate contentKey="hopitApp.trailPath.detail.title">TrailPath</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{trailPathEntity.id}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="hopitApp.trailPath.title">Title</Translate>
            </span>
          </dt>
          <dd>{trailPathEntity.title}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="hopitApp.trailPath.description">Description</Translate>
            </span>
          </dt>
          <dd>{trailPathEntity.description}</dd>
          <dt>
            <Translate contentKey="hopitApp.trailPath.trail">Trail</Translate>
          </dt>
          <dd>{trailPathEntity.trail ? trailPathEntity.trail.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/trail-path" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/trail-path/${trailPathEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TrailPathDetail;
