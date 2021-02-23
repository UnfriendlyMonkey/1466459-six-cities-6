import {object, arrayOf, bool, shape, number, string} from 'prop-types';

export const offerType = shape({
  bedrooms: number,
  city: object,
  description: string,
  goods: arrayOf(string),
  host: object,
  id: number.isRequired,
  images: arrayOf(string),
  isFavorite: bool.isRequired,
  isPremium: bool.isRequired,
  location: object,
  maxAdults: number,
  previewImage: string.isRequired,
  price: number.isRequired,
  rating: number,
  title: string.isRequired,
  type: string.isRequired,
});
