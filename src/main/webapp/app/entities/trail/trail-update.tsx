import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICountry } from 'app/shared/model/country.model';
import { getEntities as getCountries } from 'app/entities/country/country.reducer';
import { getEntity, updateEntity, createEntity, reset } from './trail.reducer';
import { ITrail } from 'app/shared/model/trail.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const TrailUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const countries = useAppSelector(state => state.country.entities);
  const trailEntity = useAppSelector(state => state.trail.entity);
  const loading = useAppSelector(state => state.trail.loading);
  const updating = useAppSelector(state => state.trail.updating);
  const updateSuccess = useAppSelector(state => state.trail.updateSuccess);

  const handleClose = () => {
    props.history.push('/trail');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getCountries({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...trailEntity,
      ...values,
      country: countries.find(it => it.id.toString() === values.countryId.toString()),
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
          ...trailEntity,
          type: 'HIKING',
          countryId: trailEntity?.country?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="hopitApp.trail.home.createOrEditLabel" data-cy="TrailCreateUpdateHeading">
            <Translate contentKey="hopitApp.trail.home.createOrEditLabel">Create or edit a Trail</Translate>
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
                  id="trail-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('hopitApp.trail.title')}
                id="trail-title"
                name="title"
                data-cy="title"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('hopitApp.trail.description')}
                id="trail-description"
                name="description"
                data-cy="description"
                type="text"
              />
              <ValidatedField
                label={translate('hopitApp.trail.shortDescription')}
                id="trail-shortDescription"
                name="shortDescription"
                data-cy="shortDescription"
                type="text"
              />
              <ValidatedField
                label={translate('hopitApp.trail.specialRules')}
                id="trail-specialRules"
                name="specialRules"
                data-cy="specialRules"
                type="text"
              />
              <ValidatedField label={translate('hopitApp.trail.type')} id="trail-type" name="type" data-cy="type" type="select">
                <option value="HIKING">{translate('hopitApp.TrailType.HIKING')}</option>
                <option value="BIKE">{translate('hopitApp.TrailType.BIKE')}</option>
                <option value="WATER">{translate('hopitApp.TrailType.WATER')}</option>
              </ValidatedField>
              <ValidatedField label={translate('hopitApp.trail.price')} id="trail-price" name="price" data-cy="price" type="text" />
              <ValidatedField
                label={translate('hopitApp.trail.enterLat')}
                id="trail-enterLat"
                name="enterLat"
                data-cy="enterLat"
                type="text"
              />
              <ValidatedField
                label={translate('hopitApp.trail.enterLong')}
                id="trail-enterLong"
                name="enterLong"
                data-cy="enterLong"
                type="text"
              />
              <ValidatedField
                label={translate('hopitApp.trail.flagUnavailable')}
                id="trail-flagUnavailable"
                name="flagUnavailable"
                data-cy="flagUnavailable"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('hopitApp.trail.flagWater')}
                id="trail-flagWater"
                name="flagWater"
                data-cy="flagWater"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('hopitApp.trail.flagBirdwatching')}
                id="trail-flagBirdwatching"
                name="flagBirdwatching"
                data-cy="flagBirdwatching"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('hopitApp.trail.flagReligious')}
                id="trail-flagReligious"
                name="flagReligious"
                data-cy="flagReligious"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('hopitApp.trail.flagFishing')}
                id="trail-flagFishing"
                name="flagFishing"
                data-cy="flagFishing"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('hopitApp.trail.flagParking')}
                id="trail-flagParking"
                name="flagParking"
                data-cy="flagParking"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('hopitApp.trail.flagWC')}
                id="trail-flagWC"
                name="flagWC"
                data-cy="flagWC"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('hopitApp.trail.flagCamping')}
                id="trail-flagCamping"
                name="flagCamping"
                data-cy="flagCamping"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('hopitApp.trail.flagPicnic')}
                id="trail-flagPicnic"
                name="flagPicnic"
                data-cy="flagPicnic"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('hopitApp.trail.flagStreetfood')}
                id="trail-flagStreetfood"
                name="flagStreetfood"
                data-cy="flagStreetfood"
                check
                type="checkbox"
              />
              <ValidatedField label={translate('hopitApp.trail.source')} id="trail-source" name="source" data-cy="source" type="text" />
              <ValidatedField
                label={translate('hopitApp.trail.adminComment')}
                id="trail-adminComment"
                name="adminComment"
                data-cy="adminComment"
                type="text"
              />
              <ValidatedField
                id="trail-country"
                name="countryId"
                data-cy="country"
                label={translate('hopitApp.trail.country')}
                type="select"
              >
                <option value="" key="0" />
                {countries
                  ? countries.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/trail" replace color="info">
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

export default TrailUpdate;
