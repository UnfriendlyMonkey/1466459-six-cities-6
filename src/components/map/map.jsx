import React, {useEffect, useRef} from 'react';
import {arrayOf, oneOf} from 'prop-types';
import leaflet from 'leaflet';
import {offerType} from '../../types/offer';

import 'leaflet/dist/leaflet.css';

const Map = ({city, points}) => {

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

    return () => {
      mapRef.current.remove();
    };
  }, [city]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  city: oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]),
  points: arrayOf(
      offerType
  )
};

export default Map;
