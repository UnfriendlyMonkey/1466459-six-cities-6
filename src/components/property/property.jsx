import React from 'react';
import {arrayOf} from 'prop-types';
import {offerType} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import CommentForm from '../comment-form/comment-form';
import CommentsList from '../comments-list/comments-list';
import Map from '../map/map';


const Property = (props) => {
  const {offers} = props;
  const index = parseInt(window.location.pathname.slice(7), 10);
  const property = offers.filter((offer) => offer.id === index)[0];
  const {id, images, type, isPremium, isFavorite, title, rating, bedrooms, maxAdults, price, goods, host, description} = property;
  const {avatarUrl, name, isPro} = host;
  const avatarClassName = `property__avatar-wrapper user__avatar-wrapper ${isPro && `property__avatar-wrapper--pro`}`;
  const nearPlaces = offers.filter((offer) => offer !== property && offer.city.name === property.city.name);

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
              <button
                className={`property__bookmark-button button ${isFavorite && `property__bookmark-button--active`}`}
                type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
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
              <CommentsList id={id}/>
              <CommentForm />
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map city={property.city.name} points={nearPlaces}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">

            {nearPlaces.map((offer) => (
              <PlaceCard key={offer.id} offer={offer} from={`property`}/>
            ))}

          </div>
        </section>
      </div>
    </main>
  );
};

Property.propTypes = {
  offers: arrayOf(
      offerType
  ).isRequired
};

export default Property;
