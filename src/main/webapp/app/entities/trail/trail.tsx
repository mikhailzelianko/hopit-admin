import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntities } from './trail.reducer';
import { ITrail } from 'app/shared/model/trail.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const Trail = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const trailList = useAppSelector(state => state.trail.entities);
  const loading = useAppSelector(state => state.trail.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  const { match } = props;

  return (
    <div>
      <h2 id="trail-heading" data-cy="TrailHeading">
        <Translate contentKey="hopitApp.trail.home.title">Trails</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="hopitApp.trail.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="hopitApp.trail.home.createLabel">Create new Trail</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {trailList && trailList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="hopitApp.trail.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.title">Title</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.description">Description</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.shortDescription">Short Description</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.specialRules">Special Rules</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.type">Type</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.price">Price</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.enterLat">Enter Lat</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.enterLong">Enter Long</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.flagUnavailable">Flag Unavailable</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.flagWater">Flag Water</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.flagBirdwatching">Flag Birdwatching</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.flagReligious">Flag Religious</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.flagFishing">Flag Fishing</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.flagParking">Flag Parking</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.flagWC">Flag WC</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.flagCamping">Flag Camping</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.flagPicnic">Flag Picnic</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.flagStreetfood">Flag Streetfood</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.source">Source</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.adminComment">Admin Comment</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trail.country">Country</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {trailList.map((trail, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${trail.id}`} color="link" size="sm">
                      {trail.id}
                    </Button>
                  </td>
                  <td>{trail.title}</td>
                  <td>{trail.description}</td>
                  <td>{trail.shortDescription}</td>
                  <td>{trail.specialRules}</td>
                  <td>
                    <Translate contentKey={`hopitApp.TrailType.${trail.type}`} />
                  </td>
                  <td>{trail.price}</td>
                  <td>{trail.enterLat}</td>
                  <td>{trail.enterLong}</td>
                  <td>{trail.flagUnavailable ? 'true' : 'false'}</td>
                  <td>{trail.flagWater ? 'true' : 'false'}</td>
                  <td>{trail.flagBirdwatching ? 'true' : 'false'}</td>
                  <td>{trail.flagReligious ? 'true' : 'false'}</td>
                  <td>{trail.flagFishing ? 'true' : 'false'}</td>
                  <td>{trail.flagParking ? 'true' : 'false'}</td>
                  <td>{trail.flagWC ? 'true' : 'false'}</td>
                  <td>{trail.flagCamping ? 'true' : 'false'}</td>
                  <td>{trail.flagPicnic ? 'true' : 'false'}</td>
                  <td>{trail.flagStreetfood ? 'true' : 'false'}</td>
                  <td>{trail.source}</td>
                  <td>{trail.adminComment}</td>
                  <td>{trail.country ? <Link to={`country/${trail.country.id}`}>{trail.country.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${trail.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${trail.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${trail.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="hopitApp.trail.home.notFound">No Trails found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Trail;
