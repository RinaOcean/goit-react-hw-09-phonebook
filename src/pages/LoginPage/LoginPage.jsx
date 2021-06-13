import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '..//..//redux/auth';

import './LoginPage.scss';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState('');

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(login());

      setEmail('');
      setPassword('');
    },
    [dispatch],
  );

  return (
    <section className="sectiion_log_reg">
      <div className="FormWrapper">
        <div className="TitleWrapper">
          <h1 className="Title">Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="Form">
          <label className="Label">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>

          <label className="Label">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
              autoComplete="off"
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    </section>
  );
}
