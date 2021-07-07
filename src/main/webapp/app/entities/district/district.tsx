import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntities } from './district.reducer';
import { IDistrict } from 'app/shared/model/district.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const District = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const districtList = useAppSelector(state => state.district.entities);
  const loading = useAppSelector(state => state.district.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  const { match } = props;

  return (
    <div>
      <h2 id="district-heading" data-cy="DistrictHeading">
        <Translate contentKey="hopitApp.district.home.title">Districts</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="hopitApp.district.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="hopitApp.district.home.createLabel">Create new District</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {districtList && districtList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="hopitApp.district.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.district.districtName">District Name</Translate>
                </th>
                <th>
                  <Translate contentKey="hopitApp.district.region">Region</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {districtList.map((district, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${district.id}`} color="link" size="sm">
                      {district.id}
                    </Button>
                  </td>
                  <td>{district.districtName}</td>
                  <td>{district.region ? <Link to={`region/${district.region.id}`}>{district.region.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${district.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${district.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${district.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
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
              <Translate contentKey="hopitApp.district.home.notFound">No Districts found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default District;
