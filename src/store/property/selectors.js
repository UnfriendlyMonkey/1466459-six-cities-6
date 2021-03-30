import {NameSpace} from '../reducer';

export const getActiveOffer = (state) => state[NameSpace.PROPERTY].activeOffer;
export const getComments = (state) => state[NameSpace.PROPERTY].comments;
export const getNearPlaces = (state) => state[NameSpace.PROPERTY].nearPlaces;
