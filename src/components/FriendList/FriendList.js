import s from './FriendList.module.css';

import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <span
            className={s.status}
            style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
          ></span>
          <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
