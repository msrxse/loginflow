/**
 *
 * Wraps the loading indicator in a tag with the .btn--loading class
 */

import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from './LoadingIndicator';
import styles from './form/form.scss';

function LoadingButton(props) {
  return (
    <button className={`${props.className} ${styles.btn} btn`} disabled="true">
      <LoadingIndicator />
    </button>
  );
}

LoadingButton.propTypes = {
  className: PropTypes.string,
};

LoadingButton.defaultProps = {
  className: '',
};

export default LoadingButton;
