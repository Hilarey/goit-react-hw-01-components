import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <span
            className={friend.isOnline ? styles.online : styles.offline}
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt=""
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.proptype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
