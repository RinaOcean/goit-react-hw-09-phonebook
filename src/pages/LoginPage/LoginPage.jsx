import { useState } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '..//..//redux/auth';

import './LoginPage.scss';

export default function LoginPage() {
  const [email, setEmail] = useState('');

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState('');

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    reset();
  };

  return (
    <section className="sectiion_log_reg">
      <div className="FormWrapper">
        <div className="TitleWrapper">
          <h1 className="Title">Login</h1>
        </div>

        <form onSubmit={() => null} className="Form">
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

// class LoginPage extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onLogin(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <section className="sectiion_log_reg">
//         <div className="FormWrapper">
//           <div className="TitleWrapper">
//             <h1 className="Title">Login</h1>
//           </div>

//           <form onSubmit={this.handleSubmit} className="Form">
//             <label className="Label">
//               Email
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={this.handleChange}
//               />
//             </label>

//             <label className="Label">
//               Password
//               <input
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={this.handleChange}
//                 autoComplete="off"
//               />
//             </label>
//             <button type="submit">Log in</button>
//           </form>
//         </div>
//       </section>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: login,
// };

// export default connect(null, mapDispatchToProps)(LoginPage);
