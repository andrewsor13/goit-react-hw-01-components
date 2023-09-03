import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from 'components/FriendListItem/FriendListItem';
import "./FriendList.css"

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
