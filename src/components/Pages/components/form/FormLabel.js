/**
 * Form.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const FormLabel = ({ title, htmlFor }) =>
  <label htmlFor={htmlFor}>{title}</label>;

FormLabel.propTypes = {
  title: PropTypes.string,
  htmlFor: PropTypes.string,
};

FormLabel.defaultProps = {
  title: '',
  htmlFor: '',
};

export default FormLabel;
