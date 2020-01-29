import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserStats.module.css';

function UserStats({ followersQuantity, viewsQuantity, likesQuantity }) {
  return (
    <ul className={styles.stats}>
      <li className={styles.list}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followersQuantity}</span>
      </li>
      <li className={styles.list}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{viewsQuantity}</span>
      </li>
      <li className={styles.list}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likesQuantity}</span>
      </li>
    </ul>
  );
}

UserStats.propTypes = {
  followersQuantity: PropTypes.number.isRequired,
  viewsQuantity: PropTypes.number.isRequired,
  likesQuantity: PropTypes.number.isRequired,
};

export default UserStats;
