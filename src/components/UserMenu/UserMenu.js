import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserEmail, logout } from '..//..//redux/auth';

import defaultAvatar from '..//..//imgs/monster-icon.png';

import './UserMenu.scss';

// const mapStateToProps = state => ({
//   email: getUserEmail(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: logout,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  const onLogout = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <div className="UserMenu">
      <img className="AvatarImg" src={defaultAvatar} alt="" width="40" />
      <span className="User">{email}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
