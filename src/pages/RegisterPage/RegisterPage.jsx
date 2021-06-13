import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { connect } from 'react-redux';
import { signup } from '..//..//redux/auth';

import '../LoginPage/LoginPage.scss';

// const mapDispatchToProps = {
//   onSignup: signup,
// };

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn('error');
    }
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(signup({ name, email, password }));

      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, name, email, password],
  );

  return (
    <section className="sectiion_log_reg">
      <div className="FormWrapper">
        <div className="TitleWrapper">
          {' '}
          <h1 className="Title">Registration</h1>
        </div>

        <form onSubmit={() => null} className="Form">
          <label className="Label">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>

          <label className="Label">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className="Label">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
