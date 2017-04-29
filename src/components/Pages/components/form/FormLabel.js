/**
 * Form.js
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormLabel extends Component {
  render() {
    return (
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    );
  }
}

FormLabel.propTypes = {
  title: PropTypes.string,
  htmlFor: PropTypes.string,
};

FormLabel.defaultProps = {
  title: '',
  htmlFor: '',
};

export default FormLabel;
