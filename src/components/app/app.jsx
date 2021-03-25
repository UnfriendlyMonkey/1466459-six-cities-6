import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Property from '../property/property';
import Favorites from '../favorites/favorites';
import Page404 from '../page404/page404';
import PrivateRoute from '../private-route/private-route';

const App = (props) => {

  const {login} = props;

  let pageClassName = ``;
  switch (window.location.pathname) {
    case `/`:
      pageClassName = `page page--gray page--main`;
      break;
    case `/login`:
      pageClassName = `page page--gray page--login`;
      break;
    case `/favorites`:
      pageClassName = `page page--favorites-empty`;
      break;
    default:
      pageClassName = `page`;
  }

  return (
    <div className={pageClassName}>
      <BrowserRouter>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link
                  className={window.location.pathname === `/` ? `header__logo-link header__logo-link--active` : `header__logo-link`}
                  to={window.location.pathname === `/` ? `` : `/`}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={login === `` ? `/login` : ``}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{login === `` ? `Sign in` : login}</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact
            path="/favorites"
            render={() => <Favorites />}
          >
          </PrivateRoute>
          <Route exact path="/offer/:id">
            <Property />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  login: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  login: state.login,
});

export {App};
export default connect(mapStateToProps, null)(App);
