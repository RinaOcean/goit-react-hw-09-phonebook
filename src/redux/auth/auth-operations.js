import { SignalWifi1BarRounded } from '@material-ui/icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signup = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
    toast('You have been successfully signed up!', {
      autoClose: 2000,
    });
  } catch (error) {
    dispatch(registerError(error.message));
    toast('Something went wrong. Please, retry');
  }
};

export const login = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
    toast('Hey!You are logged in!', {
      autoClose: 2000,
    });
  } catch (error) {
    dispatch(loginError(error.message));

    toast('Wrong email or password');
  }
};

export const logout = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(logoutSuccess());
    toast('You are logged out. Bye!', {
      autoClose: 2000,
    });
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
