import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, getFilteredContactList } from '../../redux/contacts';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './ContactsListItem.scss';

export default function ContactsListItem() {
  const dispatch = useDispatch();
  const contactsItems = useSelector(getFilteredContactList);
  const onDelete = useCallback(() => dispatch(removeContact()), [dispatch]);

  return (
    <>
      {contactsItems.map(({ id, name, number }) => {
        return (
          <li key={id} className="ContactsListItem">
            {name}: {number}
            <button type="button" onClick={() => onDelete(id)}>
              <DeleteForeverIcon />
            </button>
          </li>
        );
      })}
    </>
  );
}

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};
