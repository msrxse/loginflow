/**
 * Form.js
 *
 */

import React, { Component } from 'react';
import FormLabel from './FormLabel';
import styles from './form.scss';

class RegisterForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
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
    this.props.registerUser();

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
          <input id="formButton" className={styles.btn} type="submit" placeholder="Send message" />
        </div>
      </form>
    );
  }
}

export default RegisterForm;
