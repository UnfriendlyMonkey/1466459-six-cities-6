import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import offers from './mocks/offers';
import {reducer} from './store/reducer';

const Setting = {
  LOCATIONS: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        locations={Setting.LOCATIONS}
        offers={offers}
      />
    </Provider>,
    document.querySelector(`#root`)
);
