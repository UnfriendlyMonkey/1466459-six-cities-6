import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const Setting = {
  LOCATIONS: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]
};

ReactDOM.render(
    <App
      locations={Setting.LOCATIONS}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
