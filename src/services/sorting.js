import {SortingType} from '../const';

export const sorting = {
  [SortingType.POPULAR]: (offers) => offers,
  [SortingType.TOP_RATED]: (offers) => offers.slice().sort((a, b) => (b.rating - a.rating)),
  [SortingType.PRICE_ASC]: (offers) => offers.slice().sort((a, b) => (a.price - b.price)),
  [SortingType.PRICE_DESC]: (offers) => offers.slice().sort((a, b) => (b.price - a.price)),
};
