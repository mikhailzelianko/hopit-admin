import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <>{/* to avoid warnings when empty */}</>
    <MenuItem icon="asterisk" to="/district">
      <Translate contentKey="global.menu.entities.district" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/region">
      <Translate contentKey="global.menu.entities.region" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/country">
      <Translate contentKey="global.menu.entities.country" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/trail">
      <Translate contentKey="global.menu.entities.trail" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/trail-path">
      <Translate contentKey="global.menu.entities.trailPath" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/trail-path-waypoint">
      <Translate contentKey="global.menu.entities.trailPathWaypoint" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
