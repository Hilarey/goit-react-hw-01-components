import React from 'react';
import UserDescription from './UserDescription';
import UserStats from './UserStats';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ user }) {
  const { stats } = user;
  return (
    <div className={styles.profileWrap}>
      <div className={styles.profile}>
        <UserDescription
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
        />
        <UserStats
          followersQuantity={stats.followers}
          viewsQuantity={stats.views}
          likesQuantity={stats.likes}
        />
      </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;
