export const offersAdapter = (offer) => {

  const host = offer.host;
  const adaptedHost = Object.assign(
      {},
      host,
      {
        avatarUrl: host.avatar_url,
        isPro: host.is_pro,
      }
  );

  delete adaptedHost.avatar_url;
  delete adaptedHost.is_pro;

  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        host: adaptedHost,
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        maxAdults: offer.max_adults,
        previewImage: offer.preview_image,
      }
  );

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};
