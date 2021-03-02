import {object, shape, number, string, date} from 'prop-types';

export const commentType = shape({
  comment: string,
  date,
  id: number.isRequired,
  propertyId: number.isRequired,
  rating: number,
  user: object,
});
