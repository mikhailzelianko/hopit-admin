import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './trail.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const TrailDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const trailEntity = useAppSelector(state => state.trail.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="trailDetailsHeading">
          <Translate contentKey="hopitApp.trail.detail.title">Trail</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{trailEntity.id}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="hopitApp.trail.title">Title</Translate>
            </span>
          </dt>
          <dd>{trailEntity.title}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="hopitApp.trail.description">Description</Translate>
            </span>
          </dt>
          <dd>{trailEntity.description}</dd>
          <dt>
            <span id="shortDescription">
              <Translate contentKey="hopitApp.trail.shortDescription">Short Description</Translate>
            </span>
          </dt>
          <dd>{trailEntity.shortDescription}</dd>
          <dt>
            <span id="specialRules">
              <Translate contentKey="hopitApp.trail.specialRules">Special Rules</Translate>
            </span>
          </dt>
          <dd>{trailEntity.specialRules}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="hopitApp.trail.type">Type</Translate>
            </span>
          </dt>
          <dd>{trailEntity.type}</dd>
          <dt>
            <span id="price">
              <Translate contentKey="hopitApp.trail.price">Price</Translate>
            </span>
          </dt>
          <dd>{trailEntity.price}</dd>
          <dt>
            <span id="enterLat">
              <Translate contentKey="hopitApp.trail.enterLat">Enter Lat</Translate>
            </span>
          </dt>
          <dd>{trailEntity.enterLat}</dd>
          <dt>
            <span id="enterLong">
              <Translate contentKey="hopitApp.trail.enterLong">Enter Long</Translate>
            </span>
          </dt>
          <dd>{trailEntity.enterLong}</dd>
          <dt>
            <span id="flagUnavailable">
              <Translate contentKey="hopitApp.trail.flagUnavailable">Flag Unavailable</Translate>
            </span>
          </dt>
          <dd>{trailEntity.flagUnavailable ? 'true' : 'false'}</dd>
          <dt>
            <span id="flagWater">
              <Translate contentKey="hopitApp.trail.flagWater">Flag Water</Translate>
            </span>
          </dt>
          <dd>{trailEntity.flagWater ? 'true' : 'false'}</dd>
          <dt>
            <span id="flagBirdwatching">
              <Translate contentKey="hopitApp.trail.flagBirdwatching">Flag Birdwatching</Translate>
            </span>
          </dt>
          <dd>{trailEntity.flagBirdwatching ? 'true' : 'false'}</dd>
          <dt>
            <span id="flagReligious">
              <Translate contentKey="hopitApp.trail.flagReligious">Flag Religious</Translate>
            </span>
          </dt>
          <dd>{trailEntity.flagReligious ? 'true' : 'false'}</dd>
          <dt>
            <span id="flagFishing">
              <Translate contentKey="hopitApp.trail.flagFishing">Flag Fishing</Translate>
            </span>
          </dt>
          <dd>{trailEntity.flagFishing ? 'true' : 'false'}</dd>
          <dt>
            <span id="flagParking">
              <Translate contentKey="hopitApp.trail.flagParking">Flag Parking</Translate>
            </span>
          </dt>
          <dd>{trailEntity.flagParking ? 'true' : 'false'}</dd>
          <dt>
            <span id="flagWC">
              <Translate contentKey="hopitApp.trail.flagWC">Flag WC</Translate>
            </span>
          </dt>
          <dd>{trailEntity.flagWC ? 'true' : 'false'}</dd>
          <dt>
            <span id="flagCamping">
              <Translate contentKey="hopitApp.trail.flagCamping">Flag Camping</Translate>
            </span>
          </dt>
          <dd>{trailEntity.flagCamping ? 'true' : 'false'}</dd>
          <dt>
            <span id="flagPicnic">
              <Translate contentKey="hopitApp.trail.flagPicnic">Flag Picnic</Translate>
            </span>
          </dt>
          <dd>{trailEntity.flagPicnic ? 'true' : 'false'}</dd>
          <dt>
            <span id="flagStreetfood">
              <Translate contentKey="hopitApp.trail.flagStreetfood">Flag Streetfood</Translate>
            </span>
          </dt>
          <dd>{trailEntity.flagStreetfood ? 'true' : 'false'}</dd>
          <dt>
            <span id="source">
              <Translate contentKey="hopitApp.trail.source">Source</Translate>
            </span>
          </dt>
          <dd>{trailEntity.source}</dd>
          <dt>
            <span id="adminComment">
              <Translate contentKey="hopitApp.trail.adminComment">Admin Comment</Translate>
            </span>
          </dt>
          <dd>{trailEntity.adminComment}</dd>
          <dt>
            <Translate contentKey="hopitApp.trail.country">Country</Translate>
          </dt>
          <dd>{trailEntity.country ? trailEntity.country.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/trail" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/trail/${trailEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TrailDetail;
