import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ITrail } from 'app/shared/model/trail.model';
import { getEntities as getTrails } from 'app/entities/trail/trail.reducer';
import { getEntity, updateEntity, createEntity, reset } from './trail-path.reducer';
import { ITrailPath } from 'app/shared/model/trail-path.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const TrailPathUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const trails = useAppSelector(state => state.trail.entities);
  const trailPathEntity = useAppSelector(state => state.trailPath.entity);
  const loading = useAppSelector(state => state.trailPath.loading);
  const updating = useAppSelector(state => state.trailPath.updating);
  const updateSuccess = useAppSelector(state => state.trailPath.updateSuccess);

  const handleClose = () => {
    props.history.push('/trail-path');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getTrails({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...trailPathEntity,
      ...values,
      trail: trails.find(it => it.id.toString() === values.trailId.toString()),
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
          ...trailPathEntity,
          trailId: trailPathEntity?.trail?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="hopitApp.trailPath.home.createOrEditLabel" data-cy="TrailPathCreateUpdateHeading">
            <Translate contentKey="hopitApp.trailPath.home.createOrEditLabel">Create or edit a TrailPath</Translate>
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
                  id="trail-path-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('hopitApp.trailPath.title')}
                id="trail-path-title"
                name="title"
                data-cy="title"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('hopitApp.trailPath.description')}
                id="trail-path-description"
                name="description"
                data-cy="description"
                type="text"
              />
              <ValidatedField
                id="trail-path-trail"
                name="trailId"
                data-cy="trail"
                label={translate('hopitApp.trailPath.trail')}
                type="select"
              >
                <option value="" key="0" />
                {trails
                  ? trails.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/trail-path" replace color="info">
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

export default TrailPathUpdate;
