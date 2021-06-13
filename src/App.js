import React, { Suspense, lazy, useEffect, useCallback } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Container from './components/Container';
import AppBar from './components/AppBar';
import Spinner from 'react-bootstrap/Spinner';

import { fetchContacts } from './redux/contacts/contacts-operations';
import { getItems, getLoadingItems } from './redux/contacts/contacts-selectors';
import { getCurrentUser } from './redux/auth/auth-operations';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components//PublicRoute/PublicRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const HomePage = lazy(() =>
  import('./pages/MainPage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const isLoading = useSelector(getLoadingItems);

  useEffect(() => {
    console.log('hi');
    dispatch(getCurrentUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsPage}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginPage}
          />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/"
            component={RegisterPage}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}
