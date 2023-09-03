import React from 'react';

import PropTypes from 'prop-types';

import "./Statistics.css"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({label, percentage, id}) => {
          return (
            <li
              key={id}
              className="item"
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
