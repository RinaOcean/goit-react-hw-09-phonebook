import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact, getItems } from '../../redux/contacts';

import './ContactForm.scss';

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const [name, setName] = useState('');
  const handleChangeName = useCallback(event => {
    setName(event.target.value);
  }, []);

  const [number, setNumber] = useState('');
  const handleChangeNumber = useCallback(event => {
    setNumber(event.target.value);
  }, []);

  const items = useSelector(getItems);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const isInContacts = contact =>
        contact.name === name || contact.number === number;

      if (items.some(isInContacts)) {
        alert(`Contact is already in contacts`);
        return;
      }
      dispatch(addContact({ name, number }));

      setName('');
      setNumber('');
    },
    [dispatch, items, name, number],
  );

  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <div className="TitleWrapper">
        <h1 className="Title">Phonebook</h1>
      </div>

      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        value={name}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChangeName}
        id={nameInputId}
      />
      <label htmlFor={numberInputId}>Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        required
        onChange={handleChangeNumber}
        id={numberInputId}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}
