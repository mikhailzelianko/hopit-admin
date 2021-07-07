import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntities } from './trail-path.reducer';
import { ITrailPath } from 'app/shared/model/trail-path.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const TrailPath = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const trailPathList = useAppSelector(state => state.trailPath.entities);
  const loading = useAppSelector(state => state.trailPath.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  const { match } = props;

  return (
    <div>
      <h2 id="trail-path-heading" data-cy="TrailPathHeading">
        <Translate contentKey="hopitApp.trailPath.home.title">Trail Paths</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="hopitApp.trailPath.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="hopitApp.trailPath.home.createLabel">Create new Trail Path</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {trailPathList && trailPathList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="hopitApp.trailPath.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trailPath.title">Title</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trailPath.description">Description</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.trailPath.trail">Trail</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {trailPathList.map((trailPath, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${trailPath.id}`} color="link" size="sm">
                      {trailPath.id}
                    </Button>
                  </td>
                  <td>{trailPath.title}</td>
                  <td>{trailPath.description}</td>
                  <td>{trailPath.trail ? <Link to={`trail/${trailPath.trail.id}`}>{trailPath.trail.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${trailPath.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${trailPath.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${trailPath.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
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
              <Translate contentKey="hopitApp.trailPath.home.notFound">No Trail Paths found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TrailPath;
