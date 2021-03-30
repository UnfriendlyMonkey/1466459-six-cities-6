import {NameSpace} from '../reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getLogin = (state) => state[NameSpace.USER].login;
export const getFavorite = (state) => state[NameSpace.USER].favorite;
