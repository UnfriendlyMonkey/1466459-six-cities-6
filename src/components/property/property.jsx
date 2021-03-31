import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {object, func, array} from 'prop-types';
// import {offerType} from '../../types/offer';
import CommentForm from '../comment-form/comment-form';
import CommentsList from '../comments-list/comments-list';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import {fetchComments, fetchNearPlaces, fetchProperty, setFavorite} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {getActiveOffer, getComments, getNearPlaces} from '../../store/property/selectors';
import { FavoriteButton } from '../favorite-button/favorite-button';


const Property = ({onLoadProperty, onLoadComments, onLoadNearPlaces, activeOffer, nearPlaces, comments, toggleFavorite}) => {
  let {id} = useParams();
  id = parseInt(id, 10);
  useEffect(() => {
    onLoadProperty(id);
    onLoadComments(id);
    onLoadNearPlaces(id);
  }, [id]);
  const property = activeOffer;
  if (Object.keys(property).length === 0) {
    return (
      <LoadingScreen />
    );
  }
  const {images, type, isPremium, isFavorite, title, rating, bedrooms, maxAdults, price, goods, host, description} = property;
  const {avatarUrl, name, isPro} = host;
  const avatarClassName = `property__avatar-wrapper user__avatar-wrapper ${isPro && `property__avatar-wrapper--pro`}`;
  const pointsForMap = nearPlaces.concat(property);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((image) => (
              <div className="property__image-wrapper" key={image + id}>
                <img className="property__image" src={image} alt={`Photo ` + type} />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <FavoriteButton id={id} isFavorite={isFavorite} toggleFavorite={toggleFavorite}/>
              {/* <button
                className={`property__bookmark-button button ${isFavorite && `property__bookmark-button--active`}`}
                type="button"
                onClick={toggleFavorite(property)}>
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button> */}
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: (Math.round(rating) * 20).toString() + `%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms + ` Bedrooms`}
              </li>
              <li className="property__feature property__feature--adults">
                {`Max ` + maxAdults + ` adults`}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((item) => (
                  <li className="property__inside-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={avatarClassName}>
                  <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {name}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
                {/* <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p> */}
              </div>
            </div>
            <section className="property__reviews reviews">
              <CommentsList comments={comments}/>
              <CommentForm id={id}/>
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map city={property.city.name} points={pointsForMap}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList offers={nearPlaces} from={`property`}/>
        </section>
      </div>
    </main>
  );
};

Property.propTypes = {
  activeOffer: object.isRequired,
  onLoadProperty: func.isRequired,
  onLoadComments: func.isRequired,
  onLoadNearPlaces: func.isRequired,
  toggleFavorite: func.isRequired,
  nearPlaces: array,
  comments: array,
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
  nearPlaces: getNearPlaces(state),
  comments: getComments(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadProperty(id) {
    dispatch(fetchProperty(id));
  },
  onLoadComments(id) {
    dispatch(fetchComments(id));
  },
  onLoadNearPlaces(id) {
    dispatch(fetchNearPlaces(id));
  },
  toggleFavorite(id, status) {
    // const status = offer.isFavorite ? 0 : 1;
    dispatch(setFavorite(id, status));
    // и я не могу отсюда, например, воздействовать на саму карточку, чтобы хотя бы фиктивно поменять статус флажка
  },
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
