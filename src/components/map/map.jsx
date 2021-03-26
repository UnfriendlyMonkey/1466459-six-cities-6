import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {arrayOf, object, oneOf} from 'prop-types';
import leaflet from 'leaflet';
import {offerType} from '../../types/offer';

import 'leaflet/dist/leaflet.css';

const Map = ({city, points, activeOffer}) => {

  const mapRef = useRef();
  const coordinates = {
    "Paris": [48.8534, 2.3488],
    "Cologne": [50.9333, 6.95],
    "Brussels": [50.8504, 4.34878],
    "Amsterdam": [52.38333, 4.9],
    "Hamburg": [53.5753, 10.0153],
    "Dusseldorf": [51.2217, 6.77616]
  };

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });
  const zoom = 12;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: coordinates[city],
      zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach((point) => {
      leaflet
        .marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        }, {icon})
        .addTo(mapRef.current)
        .bindPopup(point.title);
    });


    if (Object.keys(activeOffer).length !== 0) {
      const activeIcon = leaflet.icon({
        // браузер, почему-то, не отрисовывает эту иконку.
        // Если этот же адрес использовать в строке 37, например, то находит и отрисовывает правильно
        // судя по сообщениям в консоли, ищет что-то странное
        // 2b3e1faf89f94a4835397e7a43b4f77d.png%22)marker-icon-2x.png:1 GET http://localhost:1337/2b3e1faf89f94a4835397e7a43b4f77d.png%22)marker-icon-2x.png 404 (Not Found)
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 30]
      });
      leaflet
        .marker({
          lat: activeOffer.location.latitude,
          lng: activeOffer.location.longitude
        }, {activeIcon})
        .addTo(mapRef.current)
        .bindPopup(activeOffer.title);
    }

    return () => {
      mapRef.current.remove();
    };
  }, [city, activeOffer]);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  city: oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]),
  points: arrayOf(
      offerType
  ),
  activeOffer: object,
};

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
});

export {Map};
export default connect(mapStateToProps, null)(Map);
