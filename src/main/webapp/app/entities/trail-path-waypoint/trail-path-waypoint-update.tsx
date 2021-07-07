import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ITrailPath } from 'app/shared/model/trail-path.model';
import { getEntities as getTrailPaths } from 'app/entities/trail-path/trail-path.reducer';
import { getEntity, updateEntity, createEntity, reset } from './trail-path-waypoint.reducer';
import { ITrailPathWaypoint } from 'app/shared/model/trail-path-waypoint.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const TrailPathWaypointUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const trailPaths = useAppSelector(state => state.trailPath.entities);
  const trailPathWaypointEntity = useAppSelector(state => state.trailPathWaypoint.entity);
  const loading = useAppSelector(state => state.trailPathWaypoint.loading);
  const updating = useAppSelector(state => state.trailPathWaypoint.updating);
  const updateSuccess = useAppSelector(state => state.trailPathWaypoint.updateSuccess);

  const handleClose = () => {
    props.history.push('/trail-path-waypoint');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getTrailPaths({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...trailPathWaypointEntity,
      ...values,
      trailpath: trailPaths.find(it => it.id.toString() === values.trailpathId.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...trailPathWaypointEntity,
          trailpathId: trailPathWaypointEntity?.trailpath?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="hopitApp.trailPathWaypoint.home.createOrEditLabel" data-cy="TrailPathWaypointCreateUpdateHeading">
            <Translate contentKey="hopitApp.trailPathWaypoint.home.createOrEditLabel">Create or edit a TrailPathWaypoint</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="trail-path-waypoint-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('hopitApp.trailPathWaypoint.waypointLat')}
                id="trail-path-waypoint-waypointLat"
                name="waypointLat"
                data-cy="waypointLat"
                type="text"
              />
              <ValidatedField
                label={translate('hopitApp.trailPathWaypoint.waypointLong')}
                id="trail-path-waypoint-waypointLong"
                name="waypointLong"
                data-cy="waypointLong"
                type="text"
              />
              <ValidatedField
                id="trail-path-waypoint-trailpath"
                name="trailpathId"
                data-cy="trailpath"
                label={translate('hopitApp.trailPathWaypoint.trailpath')}
                type="select"
              >
                <option value="" key="0" />
                {trailPaths
                  ? trailPaths.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/trail-path-waypoint" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default TrailPathWaypointUpdate;
