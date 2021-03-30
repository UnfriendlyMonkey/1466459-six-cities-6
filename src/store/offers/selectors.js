import {NameSpace} from '../reducer';

export const getLocations = (state) => state[NameSpace.OFFERS].locations;
export const getCurrentCity = (state) => state[NameSpace.OFFERS].currentCity;
export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getLoadedDataStatus = (state) => state[NameSpace.OFFERS].isDataLoaded;
export const getSortingOrder = (state) => state[NameSpace.OFFERS].sortedBy;
