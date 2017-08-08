/**
 * Form.js
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormLabel from './FormLabel';
import styles from './form.css';

class RegisterForm extends Component {
  constructor() {
    super();

    this.state = {
      name: 'admin',
      email: 'admin@example.com',
    };
  }

  handleChange = (e) => {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      formSender: this.state.name,
      formEmail: this.state.email,
    };

    // if (formData.formSender.length < 1 || formData.formEmail.length < 1) {
    //   return false;
    // }

// Dispatch action SET_AUTH
    this.props.registerUser(formData);

//  Clear form
    this.setState({
      name: '',
      email: '',
    });
  };

  render() {
    return (
      <form className={styles.reactForm} onSubmit={this.handleSubmit}>
        <h1>Register Form</h1>

        <fieldset className="form-group">
          <FormLabel htmlFor="formName" title="Full Name:" />

          <input
            id="formName"
            className="form-input"
            name="name"
            type="text"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </fieldset>

        <fieldset className="form-group">
          <FormLabel htmlFor="formEmail" title="Email:" />

          <input
            id="formEmail"
            className="form-input"
            name="email"
            type="email"
            required
            onChange={this.handleChange}
            value={this.state.email}
          />
        </fieldset>

        <div className="form-group">
          <button id="formButton" className={styles.btn} type="submit">Register</button>
        </div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  registerUser: PropTypes.func,
};

RegisterForm.defaultProps = {
  registerUser: false,
};

export default RegisterForm;
