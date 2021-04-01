import {NameSpace} from '../reducer';
import {sorting} from '../../services/sorting';

export const getLocations = (state) => state[NameSpace.OFFERS].locations;
export const getCurrentCity = (state) => state[NameSpace.OFFERS].currentCity;
export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getSortedOffers = (state) => {
  const sortingOrder = state[NameSpace.OFFERS].sortedBy;
  const currentCity = state[NameSpace.OFFERS].currentCity;
  return sorting[sortingOrder](state[NameSpace.OFFERS].offers.filter((offer) => offer.city.name === currentCity));
};
// too complicated it seems
export const getFavorites = (state) => state[NameSpace.OFFERS].offers.filter((offer) => offer.isFavorite === true);
export const getLoadedDataStatus = (state) => state[NameSpace.OFFERS].isDataLoaded;
export const getSortingOrder = (state) => state[NameSpace.OFFERS].sortedBy;
