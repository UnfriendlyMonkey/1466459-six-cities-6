import {combineReducers} from 'redux';
import {user} from './user/user';
import {offers} from './offers/offers';
import {property} from './property/property';

export const NameSpace = {
  USER: `USER`,
  OFFERS: `OFFERS`,
  PROPERTY: `PROPERTY`,
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.OFFERS]: offers,
  [NameSpace.PROPERTY]: property,
});
