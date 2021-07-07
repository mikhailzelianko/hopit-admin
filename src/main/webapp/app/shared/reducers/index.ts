import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore
import district from 'app/entities/district/district.reducer';
// prettier-ignore
import region from 'app/entities/region/region.reducer';
// prettier-ignore
import country from 'app/entities/country/country.reducer';
// prettier-ignore
import trail from 'app/entities/trail/trail.reducer';
// prettier-ignore
import trailPath from 'app/entities/trail-path/trail-path.reducer';
// prettier-ignore
import trailPathWaypoint from 'app/entities/trail-path-waypoint/trail-path-waypoint.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const rootReducer = {
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  district,
  region,
  country,
  trail,
  trailPath,
  trailPathWaypoint,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar,
};

export default rootReducer;
