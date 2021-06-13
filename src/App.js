import React, { Suspense, lazy, useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
import Spinner from 'react-bootstrap/Spinner';

import { fetchContacts } from './redux/contacts/contacts-operations';
// import { getItems, getLoadingItems } from './redux/contacts/contacts-selectors';
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
  // const items = useSelector(getItems);
  // const isLoading = useSelector(getLoadingItems);

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
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginPage />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/">
            <RegisterPage />
          </PublicRoute>

          <Redirect to="/" />
        </Switch>
      </Suspense>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
