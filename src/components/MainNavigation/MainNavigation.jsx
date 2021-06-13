import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '..//..//redux/auth/auth-selectors';

export default function MainNavigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <nav className="NavList">
      <NavLink
        exact
        to="/"
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Main
      </NavLink>

      {isLoggedIn && (
        <NavLink
          exact
          to="/contacts"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
