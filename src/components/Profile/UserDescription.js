import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserDescription.module.css';

function UserDescription({ avatar, name, tag, location, alt }) {
  return (
    <div className={styles.description}>
      <img src={avatar} alt={alt} className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
}

UserDescription.defaultProps = {
  alt: 'user avatar',
};

UserDescription.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default UserDescription;
