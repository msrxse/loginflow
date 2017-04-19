/**
 *
 * Wraps the loading indicator in a tag with the .btn--loading class
 */

import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from './LoadingIndicator';

function LoadingButton(props) {
  return (
    <button className={`${props.className} btn btn--loading`} disabled="true">
      <LoadingIndicator />
    </button>
  );
}

LoadingButton.propTypes = {
  className: PropTypes.bool,
};

LoadingButton.defaultProps = {
  className: '',
};

export default LoadingButton;
