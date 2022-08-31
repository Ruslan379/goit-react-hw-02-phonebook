import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/Filter/Filter.module.css' 



export const Filter = ({ value, onChange }) => (
  <label
    className={css.FilterLabel}
  >
    Find contacts by name
    <input
      className={css.FilterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
