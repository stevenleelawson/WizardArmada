import React, { Component } from 'react';
import { auth } from '../../firebase';
import PropTypes from 'prop-types';
import './styles.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      errorMsg: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    auth.doSignInWithEmailAndPassword(email, password)
    /* eslint-disable */
      .catch((error) => this.setState({errorMsg: 'Please create an account'}));
    /* eslint-enable */
    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { email, password, errorMsg } = this.state;
    return (
      <div className='sign-in-container'>
        <h5>Sign In</h5>
        <form className='sign-in' onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='email'
            value={email}
            onChange={this.handleChange}
            className='sign-in-input'
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={this.handleChange}
            className='sign-in-input'
          />
          <button className='sign-in-btn' type='submit'>ENTER</button>
        </form>
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    );
  }
}

SignInForm.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};

export default SignInForm;
