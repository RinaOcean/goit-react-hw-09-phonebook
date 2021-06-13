import { useSelector } from 'react-redux';

import MainNavigation from '../MainNavigation';
import AuthNavigation from '../AuthNavigation';
import UserMenu from '../UserMenu/UserMenu';

import { getIsAuthenticated } from '../../redux/auth';

import './AppBar.scss';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <header className="Header">
      <MainNavigation />

      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}
