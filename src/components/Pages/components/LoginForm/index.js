/**
 * Form.js
 *
 */

import React, { Component } from 'react';
import LoginFormLabel from './LoginFormLabel';
import styles from './form.scss'; // This injects all styles globally!

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
// I have installed transform-class-properties but this still doesn't work

  handleChange = (e) => {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e, message) => {
    e.preventDefault();
    const formData = {
      formSender: this.state.name,
      formEmail: this.state.email,
      formSubject: this.state.subject,
      formMessage: this.state.message,
    };

//     if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
//       return false;
//     }

// // Dispatch action SET_AUTH
// //  Clear form
//     this.setState({
//       firstName: '',
//       lastName: '',
//       email: '',
//       subject: '',
//       message: '',
//     });
//   };

  render() {
    return (
      <form className="react-form" onSubmit={this.handleSubmit}>
        <h1>Say Hi!</h1>

        <fieldset className="form-group">
          <LoginFormLabel htmlFor="formName" title="Full Name:" />

          <input id="formName" className="form-input" name="name" type="text" required onChange={this.handleChange} value={this.state.name} />
        </fieldset>

        <fieldset className="form-group">
          <LoginFormLabel htmlFor="formEmail" title="Email:" />

          <input id="formEmail" className="form-input" name="email" type="email" required onChange={this.handleChange} value={this.state.email} />
        </fieldset>

        <fieldset className="form-group">
          <LoginFormLabel htmlFor="formSubject" title="Subject:" />

          <input id="formSubject" className="form-input" name="subject" type="text" required onChange={this.handleChange} value={this.state.subject} />
        </fieldset>

        <fieldset className="form-group">
          <LoginFormLabel htmlFor="formMessage" title="Message:" />

          <textarea id="formMessage" className="form-textarea" name="message" required onChange={this.handleChange} />
        </fieldset>

        <div className="form-group">
          <input id="formButton" className="btn" type="submit" placeholder="Send message" />
        </div>
      </form>
    );
  }
}

export default LoginForm;
