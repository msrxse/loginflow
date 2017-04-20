/**
 * Form.js
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginFormLabel extends Component {
  render() {
    return (
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    );
  }
}

LoginFormLabel.propTypes = {
  title: PropTypes.string,
  htmlFor: PropTypes.string,
};

LoginFormLabel.defaultProps = {
  title: '',
  htmlFor: '',
};

export default LoginFormLabel;
