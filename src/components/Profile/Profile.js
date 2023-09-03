import React from 'react'
import PropTypes from 'prop-types';
import "./Profile.css"

export default function Profile({
    username,
    tag,
    location,
    avatar,
    stats,
}) {
  return (
    <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt={username}
        className="profile__avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
      <li>
        <span className="stats__label">Followers</span>
        <span className="stats__quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="stats__label">Views</span>
        <span className="stats__quantity">{stats.views}</span>
      </li>
      <li>
        <span className="stats__label">Likes</span>
        <span className="stats__quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
  )
}
 
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  };