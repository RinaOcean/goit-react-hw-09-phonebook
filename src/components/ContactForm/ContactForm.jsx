import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact, getItems } from '../../redux/contacts';

import './ContactForm.scss';

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const [name, setName] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const [number, setNumber] = useState('');

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const items = useSelector(getItems);

  const handleSubmit = event => {
    event.preventDefault();
    const isInContacts = contact =>
      contact.name === name || contact.number === number;

    if (items.some(isInContacts)) {
      alert(`Contact is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));

    reset();
  };

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

// class ContactForm extends Component {
//   static propTypes = {
//     name: PropTypes.string,
//     number: PropTypes.string,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const isInContacts = contact =>
//       contact.name === this.state.name || contact.number === this.state.number;

//     if (this.props.items.some(isInContacts)) {
//       alert(`Contact is already in contacts`);
//       return;
//     }
//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className="ContactForm" onSubmit={this.handleSubmit}>
//         <div className="TitleWrapper">
//           <h1 className="Title">Phonebook</h1>
//         </div>

//         <label htmlFor={this.nameInputId}>Name</label>
//         <input
//           type="text"
//           value={name}
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//           onChange={this.handleChange}
//           id={this.nameInputId}
//         />
//         <label htmlFor={this.numberInputId}>Number</label>
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
//           title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
//           required
//           onChange={this.handleChange}
//           id={this.numberInputId}
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   items: getItems(state),
// });

// const mapDispatchFromProps = dispatch => ({
//   onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
// });

// export default connect(mapStateToProps, mapDispatchFromProps)(ContactForm);
