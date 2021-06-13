import axios from 'axios';
import { toast } from 'react-toastify';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest);

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

export const addContact = ({ name, number }) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
      toast('Contact was successfully added');
    })
    .catch(error => {
      dispatch(addContactError(error.message));
      toast('Something went wrong. Please, retry');
    });
};

export const removeContact = contactID => dispatch => {
  dispatch(removeContactRequest());
  axios
    .delete(`/contacts/${contactID}`)
    .then(() => {
      dispatch(removeContactSuccess(contactID));
      toast('Contact was successfully removed');
    })
    .catch(error => {
      dispatch(removeContactError(error.message));
      toast('Something went wrong. Please, retry');
    });
};
